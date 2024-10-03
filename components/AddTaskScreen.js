import { Text, View, Button, TextInput, Platform } from 'react-native';
import styles from '../styles/AddTaskScreen'
import { useState } from 'react';

export default function AddTaskScreen({setTasks}) {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');
  

    const handleTaskChange = (value) => {
        setTask(value)
        if (value != '') {
            setError('');
        }
    }

    const handleTaskAdded = () => {
        if (task == '') {
            setError("Description should not be empty!!");
        } else {
            setError("");
            setTask('');
            setTasks(task)
           // setTasks(task);
           // setTaskDesc("");
           // setSuccessText("Added Successfully")
            // setTimeout(()=>{
            //     setSuccessText("")
            // },2000);
            
        }
    }

    return (
        <View style={styles.taskForm}>
            <Text>Add Task Screen</Text>
            <View>
                <TextInput style={styles.taskDesc}
                    placeholder='Enter the task'
                    defaultValue={task}
                    onChangeText={handleTaskChange}>
                </TextInput>

                <View style={styles.addTaskbutton}>
                    <Button
                        title='Add Task'
                        onPress={() => handleTaskAdded()}
                        color={Platform.OS == 'ios' ? 'white' : 'green'}
                    />
                </View>
            </View>
            <TextInput></TextInput>
        </View>
    );
}
