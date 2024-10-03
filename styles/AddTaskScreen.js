import { Platform, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  taskForm: {
    height: 'auto',
    width: "100%",
    padding: 10,
    backgroundColor: '#D3D3D3',

  },

  taskDesc: {
    width: "92%",
    height: 50,
    backgroundColor: "white",
    marginTop: 16,
    marginStart: 16,
    paddingStart: 8,
    borderRadius: 10
  },

  addTaskbutton: {
    width: "92%",
    margin: 16,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  }
})