import {
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import RoomList from "../components/HomeComponents/RoomList.js"
import Routines from "../components/HomeComponents/Routines.js";
import Overall from "../components/HomeComponents/Overall.js";


export default function HomeScreen() {
  // get data from backend
  const insets = useSafeAreaInsets();
  routinesList = [
    {
      id: 1,
      name: "Morning",
      icon:  <Feather name="sunrise" size={24} color="black" />,
    },
    {
      id: 2,
      name: "I'm in",
      icon: (
        <MaterialCommunityIcons
          name="home-import-outline"
          size={24}
          color="black"
        />
      ),
    },
    {
      id: 3,
      name: "I'm out",
      icon: (
        <MaterialCommunityIcons
          name="home-export-outline"
          size={24}
          color="black"
        />
      ),
    },
  ];
  data = [
    {
      id: 1,
      icon: 'LivingRoom',
      name: "Living room",
      image: {
        uri: "https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg",
      },
      devices: [
        {
          id: 1,
          name: "Light",
          state: "off"
        },
        {
          id: 2,
          name: "AC", //air conditioner,
          state: "off"
        },
      ],
    },
    {
      id: 2,
      icon: "Bedroom",
      name: "Bedroom",
      image: {
        uri: "https://www.mydomaine.com/thmb/16GYhcYjnXOJn0fPRSF7gTcQdlw=/1050x0/filters:no_upscale():strip_icc()/bedroom-styles-4-mStarr-design-da22d95badf94214b778030359689909.png",
      },
      devices: [
        {
          id: 1,
          name: "Light",
        },
        {
          id: 2,
          name: "AC", //air conditioner,
        },
      ],
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fafafa",
        paddingBottom: Math.max(insets.bottom, 16),

        paddingHorizontal: Math.max(insets.left, 16),
      }}
    >
      {/* overall stactics of the house */}
      <Overall></Overall>
      <Text style={styles.header}>Room</Text>
      {/* <Routines data={routinesList}></Routines> */}
      <RoomList data={data}></RoomList>
    </View>
  );
}
const styles = StyleSheet.create({
  
  header: {
    marginBottom: 16,
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  
});
