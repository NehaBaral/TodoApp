import { Pressable, ScrollView, Text } from "react-native";
import Task from "./task/Task";
import { View } from "react-native";
import styles from "../../styles/HomeScreenStyle";
import { useEffect, useState } from "react";

export default function HomeScreen({ tasks, onStatusChanged, onRemove }) {
    const [emptyMsg, setEmptyMsg] = useState('');


    useEffect(() => {
        if (tasks.length === 0) {
            setEmptyMsg("No Data found !! Click on addButton to Add Task!")
        } else {
            setEmptyMsg("")
        }
    }, [tasks])

    return (
        <View style={styles.taskListView}>
            <Text style={[styles.successMessage, { display: emptyMsg ? 'flex' : 'none' }]}>{emptyMsg}</Text>
            <ScrollView>
                {tasks.map(
                    (task, index) => (
                        <Task key={index} {...task} onStatusChanged={onStatusChanged}
                            onRemove={onRemove} />
                    )
                )}
            </ScrollView>

        </View>

    )
}