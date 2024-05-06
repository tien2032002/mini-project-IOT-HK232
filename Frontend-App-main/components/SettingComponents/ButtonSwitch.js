import { View, Text, TouchableOpacity, StyleSheet, Switch, Animated, Alert } from "react-native";
import { Ionicons, AntDesign, FontAwesome5, MaterialIcons  } from "@expo/vector-icons";
import React, {useEffect, useState, useRef} from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export function ButtonSwitch({ iconName, placeHolder, onPress, onSwitch }) {
  const [display, setDisplay] = useState(styles.hide)
  const [isEnabled, setIsEnabled] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndtime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [modify, setModify] = useState("start")
  const stateRef = useRef()
  stateRef.current = modify

  const showTimePicker = (currentValue) => {
    DateTimePickerAndroid.open({
        value: currentValue,
        onChange,
        mode: 'time',
        is24Hour: true,
      });
  };
  const onChange = (event, selectedDate) =>{
    const currentDate = selectedDate;
    if(stateRef.current == "start")
        setStartTime(currentDate)
    else
        setEndtime(currentDate)
  }

  const showStart =  () =>{
    setModify("start" )
    // Alert.alert(modify)
    showTimePicker(startTime)
  }

  const showEnd =  () =>{
    setModify("end")
    // Alert.alert(modify)
    showTimePicker(endTime)

  }
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if(isEnabled)
        setDisplay(styles.hide)
    else 
        setDisplay(styles.child)
  }

  const post_data = () => {
    fetch('http://10.0.2.2:5000/autoTime/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'startTime': startTime.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'}),
        'endTime': endTime.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'}),
        "isEnable": isEnabled
      }),
    });
  }

  useEffect(()=>{
    post_data()

  }, [startTime, endTime, isEnabled])
  return (
    <View>
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="flash-auto" size={24} color="#7c41f5" />
                <Text style={styles.textStyle}>Auto With Schedule</Text>
                <Text style={styles.hide}>{modify}</Text>
            </View>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={
                    "#f4f3f4"
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            
        </TouchableOpacity>

        <TouchableOpacity style={display} onPress={showStart}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="calendar-alt" size={24} color="#7c41f5" />
                <Text style={styles.textStyle}>Start Time</Text>
            </View>
            <Text style={styles.textStyle}>{startTime.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={display} onPress={showEnd}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="calendar-alt" size={24} color="#7c41f5" />
                <Text style={styles.textStyle}>End Time</Text>
            </View>
            <Text style={styles.textStyle}>{endTime.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})}</Text>
        </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  child: {
    marginLeft: 40,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#eee7fe',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  hide:{
    display:"none",
  },
  textStyle:{
    color:'#7c41f5',
    marginLeft: 16,
  }
});
