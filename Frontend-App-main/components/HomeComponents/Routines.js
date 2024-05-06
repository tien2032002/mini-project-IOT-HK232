import { FlatList, View, StyleSheet, Text } from "react-native";

const Routines = (props) => {
  return (
    <FlatList
      style={styles.routines}
      horizontal={true}
      data={props.data}
      renderItem={({ item }) => {
        return (
          <View style={styles.routinesItem}>
            {item.icon}
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

export default Routines;

const styles = StyleSheet.create({
  routines: {
    height: "25%",
    marginBottom: 16,
  },
  routinesItem: {
    height: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 8,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
});
