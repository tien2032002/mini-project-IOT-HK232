import React from "react";
import {Text, ScrollView} from "react-native";
import {
  LineChart,

} from "react-native-chart-kit";

export const ChartDrawer = ({data}) => {
  
  return (
    <ScrollView horizontal={true}>

      
<LineChart
        renderDotContent={({ x, y,index }) => 
          <Text key={x + y} style={{ position: 'absolute', top: y - 15, left: x + 10,color:'white',fontSize: 10 }}>
            {data['datasets'][0]['data'][index].toFixed(1)}
          </Text>
        }
        data={data}
        width={1000} // from react-native
        height={300}
        yAxisSuffix={"\u00b0"+"C"}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#d391fa",
          backgroundGradientFrom: "#d391fa",
          backgroundGradientTo: "#190087",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            // borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 16,
          // borderRadius: 8,
        }}
      />
    </ScrollView>
  );
};

