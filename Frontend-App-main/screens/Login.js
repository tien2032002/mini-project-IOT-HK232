import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.behind}>
          <View
            style={{ backgroundColor: "#7c41f5", flex: 4, width: "100%" }}
          ></View>
          <View
            style={{ backgroundColor: "#ffffff", flex: 6, width: "100%" }}
          ></View>
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 28,
            fontWeight: "500",
          }}
        >
          Start your smart home
        </Text>
        <View style={styles.logo}>
          <View style={styles.border}>
            <AntDesign name="home" size={50} color="#7c41f5" />
          </View>
        </View>
        <Text
            style={{ 
                color: "#7c41f5",
                fontSize: 28,
                fontWeight: "500",
                marginBottom: 16,
            }}
        >
            Let's go!
        </Text>
        <Formik
          initialValues={{ username: "User", password: "Password" }}
          onSubmit={() => {
            navigation.navigate("MyApp");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Button color="#7c41f5" onPress={handleSubmit} title="Log in" />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  center: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  behind: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    width: 200,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logo: {
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 1000,
    width: "50%",
    aspectRatio: 1,
    elevation: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  border: {
    borderWidth: 2,
    borderColor: "#7c41f5",
    borderRadius: 10000,
    width: "90%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
