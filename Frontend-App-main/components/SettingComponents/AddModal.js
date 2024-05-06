import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  TextInput
} from "react-native";
import { Formik } from "formik";

import React from "react";
const WIDTH = Dimensions.get("window").width;

export default function AddModal({ isModalVisible, changeModalVisible }) {
  const createNew = () => {
    changeModalVisible(false);
    // props.setData(data);
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={() => changeModalVisible(false)}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{ flex: 1, textAlign: "center" }}>Add new</Text>
          <Formik
            initialValues={{ email: "Enter email", name:"Enter name" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
            )}
          </Formik>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 8,
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeModalVisible(false)}
            >
              <Text style={{ color: "red" }}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => createNew()}>
              <Text style={{ color: "blue" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    height: 200,
    width: WIDTH - 120,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  textStyle: {
    color: "#7c41f5",
    marginLeft: 16,
  },
  button: {
    padding: 8,
    alignItems: "center",
    flex: 1,
  },
  addButton: {
    backgroundColor: "#7c41f5",
    borderRadius: 8,
    padding: 8,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
    padding: 4,
  }
});
