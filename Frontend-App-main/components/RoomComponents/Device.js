import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icons,{Test} from "../Icons";

import { ButtonGroup } from "./GroupButton";

const Device = (props) => {
  const [mode, setMode] = React.useState("SnowFlake");
  return (
    <View
      style={{
        backgroundColor: "#0005",
        padding: 8,
        borderRadius: 8,
        marginBottom: 16,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white", marginBottom: 8 }}>{props.name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginRight: 4 }}>{Icons[mode]}</View>
          <Text style={{ color: "white" }}>23{"\u00b0"}C</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ButtonGroup
          buttons={["SnowFlake", "Heat", "Fan", "Dry"]}
          doSthAfter={() => {}}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={(item) => {}}
        >
          {Icons["PowerOff"]()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Device;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0005",
    alignSelf: "baseline",
    borderRadius: 1000,
    padding: 8,
  },
});
