import { View, Text, Pressable, Button, Switch, Alert } from "react-native";
import styles from "../../../styles/HomeScreenStyle";
import { useState } from "react";
import { Modal } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


export default function Task({ id, title, status, onStatusChanged, onRemove}) {
    const [isTaskDone, setIsTaskDone] = useState(false);

    const handerSwitchForstatus = () => {
        setIsTaskDone(!isTaskDone)
        onStatusChanged(id,status);
    }

    const handleTaskRemoval = ()=>{
        onRemove(id)
    }

    const removeItemFromList=()=>{
        Alert.alert(
            "Remove Task",
            "This action will permanently delete this task. This action cannot be undone!",
            [{
                text:'Cancel',
                onPress:()=> {},
                style: 'cancel'
            },{
                text:'Confirm',
                onPress:()=>{
                    handleTaskRemoval()
                }
            }],
        )
    }

    return (
            <View style={styles.task}>
                <View style={styles.taskView}>
                <Text style={styles.taskDescText}>{title}</Text>
                <Text style={styles.taskDescText}>{(status) ? "Status : True" : "Status : False"}</Text>
                <View style={styles.switchView}>
                            <Text style={styles.switchText}>Change the status: </Text>
                            <Switch value={isTaskDone} onValueChange={handerSwitchForstatus}
                                trackColor={{ true: 'light-green', false: 'silver' }} thumbColor={isTaskDone ? 'green' : 'black'} >
                            </Switch>
                        </View>
                </View>
                <Pressable style={styles.removeView} onPress={removeItemFromList}>
                        <FontAwesome5 name="trash-alt" size={24} color="red" />
                        <Text>Remove</Text>
                        </Pressable>
            </View>
    )
}