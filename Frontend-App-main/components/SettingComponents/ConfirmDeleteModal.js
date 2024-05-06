import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import React from "react";
const WIDTH = Dimensions.get("window").width;

export default function ConfirmDeleteModal({isModalVisible,changeModalVisible}) {

  const confirmDelete = () =>{
    changeModalVisible(false);
    // props.setData(data);
  }
  return (
    <Modal transparent={true} animationType="fade" visible={isModalVisible}  onRequestClose={() => changeModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{flex: 1, textAlign:'center'}}>Confirm delete</Text>
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
              <Text style={{ color: "blue" }}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => confirmDelete()}
            >
              <Text style={{ color: "red" }}>Delete</Text>
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
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
      height: 100,
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
  });
  