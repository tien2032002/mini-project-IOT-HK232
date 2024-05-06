from flask import Flask, jsonify, render_template, Response, request
from mqtt import MQTT
import json
import schedule
import time

myMQTT = MQTT()
def getAllData():
    data_dict = {
        "temp": myMQTT.temp,
        "humid": myMQTT.humid,
        "light": myMQTT.light,
        "light_button": myMQTT.led_button,
        "ac_button": myMQTT.ac_button,
        "start_time": myMQTT.user_datetime["startTime"],
        "end_time": myMQTT.user_datetime["endTime"],
        "isEnable": myMQTT.user_datetime["isEnable"]
    }
    return json.dumps(data_dict)

app = Flask(__name__)
@app.route('/') # http://127.0.0.1/time
def serve():
    return getAllData()
@app.route('/endpoint/', methods=["POST"])
def post_example():
    # Get the JSON data from the request
    data = request.json
    
    data_map = {
        True: "1",
        False: "0"
    }
    data['data'] = data_map[data['data']]

    # publish data to server
    myMQTT.client.publish(data['topic'], data['data'])

    # Process the data (for demonstration, simply return the received data)
    print(jsonify(data))
    return jsonify(data)

@app.route('/chart/', methods=["POST"])
def getDataDay():
    data = request.json
    limit_map = {
        "day": 60*60*24/5,
        "week": 60*60*24/5*7,
        "month": 60*60*24/5*30
    }
    feed_history = myMQTT.get_history(data["topic"], limit_map[data["type"]])
    result = {
        "time": [item.created_at for item in feed_history],
        "value": [item.value for item in feed_history]
    }
    result['time'] = result['time'][::-1]
    result['value'] = result['value'][::-1]
    print(result)
    return jsonify(result)

@app.route('/autoTime/', methods=["POST"])
def setTime():
    print(type(json.dumps(request.json)))
    myMQTT.client.publish('user-datetime', json.dumps(request.json))
    return json.dumps(request.json)
    
app.run()
