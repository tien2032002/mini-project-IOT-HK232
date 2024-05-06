import { Alert, StyleSheet, Text, View} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonGroup } from "../components/ChartComponents/GroupButton";
import { ChartDrawer } from "../components/ChartComponents/ChartDrawer";
import React from "react";
import { useEffect } from "react";

export default function ChartScreen() {
  const insets = useSafeAreaInsets();
  get_feed_history = async (topic, type) =>{
    try {
      const response = await fetch(
        'http://10.0.2.2:5000/chart/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "topic": topic,
            "type": type
          }),
        }
      );
      const json = await response.json();
      for (let i = 0; i<json['value'].length;i++) {
        json['value'][i] = parseFloat(json['value'][i])
      }
      setDataset({
        labels: json['time'],
        datasets:[
          {
            data: json["value"]
          }
        ]
      })
      return json
    } catch (error) {
      console.error(error);
    }
  };

  const [topic,setTopic] = React.useState("temp");
  const [type,setType] = React.useState("day");

  const data24h = {
    labels: [
     "00:00", "01:00", "02:00", "03:00", "04:00","05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", 
     "12:00", "13:00", "14:00", "15:00","16:00", "17:00", "18:00", "19:00", "20:00", "21:00",  "22:00", "23:00"],
    datasets: [
      {
        data: [
          Math.random() * 20,Math.random() * 20,Math.random() * 20,Math.random() * 20,
          Math.random() * 20,Math.random() * 20,Math.random() * 20,Math.random() * 20,
          Math.random() * 20,Math.random() * 20,Math.random() * 20,Math.random() * 20,
          Math.random() * 20,Math.random() * 20,Math.random() * 20,Math.random() * 20,
          Math.random() * 20,Math.random() * 20,Math.random() * 20,Math.random() * 20,
          Math.random() * 20,Math.random() * 20,Math.random() * 20,Math.random() * 20,
        ],
      },
    ],
  };

  const [dataset,setDataset] = React.useState(data24h);
  useEffect(() =>{
    feed_history = get_feed_history(topic, type)
  }, [topic, type])

  return (
    <View style={{ 
      height: '100%',
      backgroundColor: '#fafafa',
        paddingVertical: Math.max(insets.bottom, 16),
        paddingHorizontal: Math.max(insets.left,8),
    }}>
        <ButtonGroup 
          buttons={["Temp", "Humidity", "Light"]}
          doSthAfter={(buttonName) => {
            switch(buttonName){
              case "Temp": 
                setTopic("temp")
                break
              case "Humidity": 
                setTopic("humid")
                break
              case "Light": 
                setTopic("light")
                break
              default:
                break
            }
          }} 
          customStyle={{marginBottom: 16}}
        />
        <ButtonGroup 
          buttons={["Last 24h", "Last week", "Last month"]}
          doSthAfter={(buttonName) => {
            switch(buttonName){
              
              case "Last 24h":
                setType("day");
                break;
              case "Last week":
                setType("week");
              case "Last month":
                setType("month")
                break;
              default:
                break;
            }
          }} 
        />
        <ChartDrawer data={dataset}/>
    </View>
  );
}