import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
export function ButtonCustom({ iconName, placeHolder, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={iconName} size={24} color='#7c41f5' />
        <Text style={styles.textStyle}>{placeHolder}</Text>
      </View>
      <AntDesign name="right" size={24} color='#7c41f5' />
    </TouchableOpacity>
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
  textStyle:{
    color:'#7c41f5',
    marginLeft: 16,
  }
});
