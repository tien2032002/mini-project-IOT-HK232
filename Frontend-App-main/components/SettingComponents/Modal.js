import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import React from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import AddModal from "./AddModal";

const WIDTH = Dimensions.get("window").width;

function ListItem({ name, email, callback, showDeleteButton = true }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 8 }}>
      <Text style={{ flex: 1, marginRight: 8 }}>{name}</Text>
      <Text style={{ flex: 4, marginRight: 8 }}>{email}</Text>
      <View style={{ flex: 1 }}>
        {showDeleteButton ? (
          <TouchableOpacity
            onPress={()=>callback()}
          >
            <Text style={{ color: "red" }}>Delete</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export function CustomModal({ isModalVisible, changeModalVisible }) {
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);
  const [addModalVisible, setAddModalVisible] = React.useState(false);

  const handleDelete = () => {
    setDeleteModalVisible(false);
  };
  const openDeleteModal = () => {
    setDeleteModalVisible(true);
  }

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={() => changeModalVisible(false)}
    >
      <ConfirmDeleteModal
        isModalVisible={deleteModalVisible}
        changeModalVisible={setDeleteModalVisible}
      />
      <AddModal
                isModalVisible={addModalVisible}
                changeModalVisible={setAddModalVisible}
      />
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text>Register notifications setting</Text>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity style={styles.addButton} onPress={()=>setAddModalVisible(true)}>
              <Text style={{ color: "white" }}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <ListItem
              name={"Name"}
              email={"Email"}
              showDeleteButton={false}
              callback={() => {}}
            />
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 8,
              }}
            />
            <ListItem
              name={"Tuan"}
              email={"tuan.vu@hcmut.edu.vn"}
              callback={()=>openDeleteModal()}
            />
          </View>
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
              <Text style={{ color: "blue" }}>Finish</Text>
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
    minHeight: 500,
    width: WIDTH - 80,
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
