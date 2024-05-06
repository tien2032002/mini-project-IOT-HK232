import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {useState} from 'react';
import { padStart } from "lodash";

const Overall = () => {
  const [curDate, setCurDate] = React.useState("");
  const [curTime, setCurTime] = React.useState("");

  const [isAlert, setIsAlert] = useState(false)
  const [sensorData, setSensorData] = useState([]);
  const [alertTime, setAlertTime] = useState([])
  const getSensorData = async() =>{
    try {
      const response = await fetch('http://10.0.2.2:5000/');
      const json = await response.json();
      if(isAlert == false) {
          if (parseInt(json["temp"]) >= 35) {
            Alert.alert("Tempurature too high!")
            setIsAlert(true)
          }
        }
      setSensorData(json);
    } 
    catch (error) {
      console.error(error);
    } 
  }

  React.useEffect(() => {
    var dateTime = new Date();
    var date = dateTime.getDate().toString();
    var month = (dateTime.getMonth() + 1).toString();
    var year = dateTime.getFullYear().toString();
    var hours = dateTime.getHours().toString();
    var min = dateTime.getMinutes().toString();
    var sec = dateTime.getSeconds().toString();
    setCurDate(date.padStart(2, '0') + "/" + month.padStart(2, '0') + "/" + year);
    setCurTime(hours.padStart(2, '0') + ":" + min.padStart(2, '0') + ":" + sec.padStart(2, '0'));
    getSensorData()
    // user_time = sensorData['start_time'].split(':')
  });
  return (
    <LinearGradient
      start={{x: 0, y: 0.8}} end={{x: 1, y: 0.2}} 
      colors={['#673ab7', "#b688d3", "#f8b4a7"]}
      style={styles.overall}
    >
      <View style= {{flex: 1,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <View>
          <Text style={styles.text}>{curDate}</Text>
          <Text style={styles.text}>{curTime}</Text>
        </View>
        <View>
        <Text style={[styles.text,{fontSize: 30, fontWeight: '800'}]}>{sensorData.temp}{"\u00b0"}C</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <View style={styles.overallItem}>
          <Text style={[styles.text,{fontWeight:'800'}]}> {sensorData.humid}%</Text>
          <Text style={styles.text}>Humidity</Text>
        </View>
        <View style={styles.overallItem}>
          <Text style={[styles.text,{fontWeight:'800'}]}>{sensorData.light} Lux</Text>
          <Text style={styles.text}>Light</Text>
        </View>
        <View style={styles.overallItem}>
          <Text style={[styles.text,{fontWeight:'800'}]}>3</Text>
          <Text style={styles.text}>Device On</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Overall;

const styles = StyleSheet.create({
  overall: {
    height: "10%",
    backgroundColor: "white",
    height: "25%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 8,

    padding: 16,
  },
  overallItem: {
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  borderBottom: {
    borderColor: "black",
    borderBottomWidth: 0.5,
  },
  borderLeft: {
    borderColor: "black",
    borderLeftWidth: 0.5,
  },
  text:{
    color: 'white',
    fontSize: 14,
  }
});
