import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import MyApp from "../screens/MyApp";
const Stack = createStackNavigator();

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="MyApp" component={MyApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
