import { StyleSheet, StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DeviceScreen from "./screens/DeviceScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SimpleLineIcons, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RoomScreen from "./screens/RoomScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ChartScreen from "./screens/ChartScreen";
import NotifyScreen from "./screens/NotifyScreen";
import { PaperProvider } from "react-native-paper";
import SettingScreen from "./screens/SettingScreen";
import { Header } from "./components/Header";
import Login from "./screens/Login";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    // <Login />
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar />
        <Header />
        <NavigationContainer style={styles.container}>
          <Tab.Navigator
            initialRouteName="Home"
            labeled={false}
            activeColor="#7c41f5"
            inactiveColor="#000000"
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="grid" size={24} color={color} />
                ),
                swipeEnabled: false,
              }}
            />
            <Tab.Screen
              name="Chart"
              component={ChartScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="bar-chart-sharp" size={24} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={NotifyScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="notifications" size={24} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Setting"
              component={SettingScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="settings" size={24} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
});