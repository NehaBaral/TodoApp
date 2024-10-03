import { Platform, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    taskListView: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: "white",
        padding: 16
    },

    task: {
        height: 'auto',
        width: "100%",
        backgroundColor: "#E8EAED",
        padding: 8,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        flexDirection: "row",
    },

    taskView: {
        height: 'auto',
        width: "85%",
        backgroundColor: "#E8EAED",
        padding: 8,
        marginTop: 8,
        marginBottom: 8,
    },

    taskDescId: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },

    taskDescText: {
        fontSize: 14,
        color: '#000000',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    removeView: {
        bottom: 15,
        right: 15,
        position: 'absolute',
        alignItems: 'center'
    },

       switchView:{
        flexDirection: "row",
       },
    
       switchText:{
        marginTop: 13,
        fontSize: 15
       }
})