import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "../components/Icons";
import Device from "../components/RoomComponents/Device";

export default function RoomScreen() {
  const insets = useSafeAreaInsets();
  devices = [
    {
      id: 1,
      name: "Light",
      status: "Active",
    },
    {
      id: 2,
      name: "AC", //air conditioner,
      status: "90%",
    },
    { id: 3, name: "CCTV", status: "Inactive" },
  ];
  return (
    <ImageBackground
      source={{
        uri: "https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg",
      }}
      resizeMode="cover"
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          paddingVertical: Math.max(insets.bottom, 16),
          paddingHorizontal: Math.max(insets.left, 16),
        }}
      >
        <Device name={"AC"}></Device>
        <View
          style={{
            backgroundColor: "#0005",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", marginBottom: 8 }}>Devices</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {devices &&
              devices.map((device) => (
                <View key={device.id} style={styles.deviceItem}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#0002",
                        borderRadius: 1000,
                        padding: 4,
                        alignSelf: "baseline",
                      }}
                    >
                      {Icons[device.name]()}
                    </View>
                    <Text style={{ color: "#fffe", fontSize: 10 }}> 24hrs</Text>
                  </View>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    {device.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {device.status === "Inactive" ? (
                      <View
                        style={{
                          borderRadius: 1000,
                          aspectRatio: 1,
                          height: 14,
                          backgroundColor: "red",
                        }}
                      ></View>
                    ) : (
                      <View
                        style={{
                          borderRadius: 1000,
                          aspectRatio: 1,
                          height: 14,
                          backgroundColor: "#86DC3D",
                        }}
                      ></View>
                    )}
                    <Text style={{ color: "#FFFA", marginLeft: 4 }}>
                      {device.status}
                    </Text>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  deviceItem: {
    padding: 8,
    width: "31%",
    backgroundColor: "#87CEEBAA",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0005",
    alignSelf: "baseline",
    borderRadius: 1000,
    padding: 8,
  },
});
