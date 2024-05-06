import { StyleSheet, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonCustom } from "../components/SettingComponents/ButtonCustom.js";
import React from "react";
import { CustomModal } from "../components/SettingComponents/Modal.js";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Button } from 'react-native'
import { ButtonSwitch } from "../components/SettingComponents/ButtonSwitch.js";



export default function SettingScreen() {
  const insets = useSafeAreaInsets();
  const [isNotifyModalVisible, setIsNotifyModalVisible] = React.useState(false);

  const changeNotifyModalVisible = (state) =>{
    setIsNotifyModalVisible(state);
  }
  const handleDatePicked = () =>{

  }

  const hideDateTimePicker = () =>{
    
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [open, setOpen] = useState(true)
  const [date, setDate] = useState(new Date(1598051730000))
  return (
    <View style={{ 
        paddingBottom: Math.max(insets.bottom, 16),
        paddingTop: Math.max(insets.top, 16),
        paddingHorizontal: Math.max(insets.left, 8),
        backgroundColor: '#fafafa',
        height: '100%',
    }}>
    <ButtonCustom iconName={'lock-closed-outline'} placeHolder={"Change password"} onPress={()=>{}}/> 
    <ButtonCustom iconName={'exit-outline'} placeHolder={"Log out"} onPress={()=>{}}/>
    <ButtonCustom iconName={'notifications'} placeHolder={"Register notify setting"} onPress={()=>{changeNotifyModalVisible(true)}}/> 
    <CustomModal isModalVisible={isNotifyModalVisible} changeModalVisible={changeNotifyModalVisible} />
    <ButtonSwitch iconName={'lock-closed-outline'} placeHolder={"Change password"} onPress={()=>{}}/> 
  </View>
  );
}
