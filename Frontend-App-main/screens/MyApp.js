import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChartScreen from "./ChartScreen";
import NotifyScreen from "./NotifyScreen";
import { PaperProvider } from "react-native-paper";
import SettingScreen from "./SettingScreen";
import { Header } from "../components/Header";
export default function MyApp() {
  return (
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
  