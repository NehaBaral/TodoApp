import { Text, View, Button, TextInput, Platform, TouchableOpacity } from 'react-native';
import styles from '../styles/AddTaskScreen'
import { useState, useEffect } from 'react';

export default function AddTaskScreen({ setTasks }) {
    const [task, setTask] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleTaskChange = (value) => {
        setTask(value)
        setIsButtonDisabled(value.trim() === '');
    }

    const handleTaskAdded = () => {
        if (task == '') {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(true);
            setTask('');
            setTasks(task)
            setShowSuccess(true);
        }
    }

    useEffect(() => {
        let timer;
        if (showSuccess) {
            timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showSuccess]);

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
                        disabled={isButtonDisabled}
                        color={Platform.OS == 'ios' ? 'white' : 'green'}
                        backgroundColor= 'green'
                    />
                </View>
                {showSuccess && (
                    <Text style={{textAlign: 'center', color: 'green', marginTop: 10}}>
                        Added Successfully
                    </Text>
                )}
            </View>
            <TextInput></TextInput>
        </View>
    );
}
