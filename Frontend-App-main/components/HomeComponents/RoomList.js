import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Switch,
  Alert,
} from "react-native";
import Icons from "../Icons";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const post_data = (topic, data) => {
  fetch('http://10.0.2.2:5000/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'topic': topic,
      'data': data,
    }),
  });
}

var first_load = true
const RoomList = (props) => {

  const getSensorData = async() =>{
    try {
      if (first_load == true) {
        const response = await fetch('http://10.0.2.2:5000/');
        const json = await response.json();
        // Alert.alert(json['ac_button'])
        toggleSwitch("AC", (json["light_button"]==true?0:1))
        toggleSwitch("Light", (json["light_button"]==true?0:1))
        first_load = false
      }
    } 
    catch (error) {
      console.error(error);
    } 
  }
  const win = Dimensions.get("window");

  const [devicesState, setDevicesState] = React.useState({
    AC: true,
    Light: false,
  });
  const toggleSwitch = (deviceName, val) => {
    let newState = Object.assign({}, devicesState);
    // if (deviceName == "AC") Alert.alert(String(newState[deviceName]))
    newState[deviceName] = !val;
    setDevicesState(newState);
  };
  getSensorData()
  return (
    <FlatList
      style={styles.room}
      horizontal={true}
      data={props.data}
      renderItem={({ item }) => {
        return (
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{
              width: win.width - 32,
            }}
          >
            <View style={[styles.roomItem, { backgroundColor: "#0005" }]}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <View style={styles.roomIcon}>{Icons[item.icon]()}</View>
                <View style={{}}>
                  <Text style={{ color: "white" }}>{item.name}</Text>
                  <Text style={{ color: "white" }}>2 Devices</Text>
                </View>
              </View>
              <View>
                {item.devices &&
                  item.devices.map((device) => (
                    <LinearGradient
                    start={{x: 0, y: 0.8}} end={{x: 1, y: 0.2}} 
                    colors={['#673ab7', "#b688d3"]}
                    style={styles.roomDevice}
                  >
                      <View style={{width: '100%'}}>
                      {Icons[device.name]((fontSize = 20))}
                      <Text style={{ color: "white", fontSize: 14 }}>
                        {device.name}
                      </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "white" }}>
                          {devicesState[device.name] ? "On" : "Off"}
                        </Text>
                        <Switch
                          trackColor={{ false: "#767577", true: "#81b0ff" }}
                          thumbColor={
                            devicesState[device.name] ? "white" : "#f4f3f4"
                          }
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={() =>
                            {
                            const topic_map = {
                              "Light": "light_button",
                              "AC": "ac_button"
                            }
                            toggleSwitch(device.name, devicesState[device.name])
                            post_data(topic_map[device.name], !devicesState[device.name])
                            }
                          }
                          value={devicesState[device.name]}
                        />
                      </View>
                    </LinearGradient>
                  ))}
              </View>
            </View>
          </ImageBackground>
        );
      }}
    />
  );
};

export default RoomList;

const styles = StyleSheet.create({
  room: {
    flexGrow: 1,
    // backgroundColor: 'red'
  },
  roomItem: {
    height: "100%",
    width: "100%",
    padding: 16,
  },
  roomDevice: {
    // backgroundColor: "#673ab7",
    width: "50%",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
    borderRadius: 8,
    // opacity: 0.8
  },
  roomIcon: {
    backgroundColor: "#673ab7",
    fill: "white",
    marginRight: 8,
    borderRadius: 1000,
    padding: 4,
  },
});
