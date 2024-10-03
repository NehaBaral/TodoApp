import { Text, View, Button, TextInput, Platform, TouchableOpacity } from 'react-native';
import styles from '../styles/AddTaskScreen'
import { useState } from 'react';

export default function AddTaskScreen({ setTasks }) {
    const [task, setTask] = useState('');
    const [isError, setIsError] = useState(true);


    const handleTaskChange = (value) => {
        setTask(value)
        if (value != '') {
            setIsError('');
        }
    }

    const handleTaskAdded = () => {
        if (task == '') {
            setIsError(true);
        } else {
            setIsError(false);
            setTask('');
            setTasks(task)
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

                <TouchableOpacity
                    style={[
                        styles.addTaskbutton,
                        { backgroundColor: isError ? 'grey' : 'green' }
                    ]}
                    onPress={() => handleTaskAdded()}
                    disabled={isError}
                >
                    <Text style={[
                        styles.buttonText,
                        { color: isError ? 'red' : 'white' }
                    ]}>
                        Add Task
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput></TextInput>
        </View>
    );
}
