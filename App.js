import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen from './components/home/HomeScreen'
import AddTaskScreen from './components/AddTaskScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';



//Object for bottom tab navigator
const Tab = createBottomTabNavigator()

export default function App() {
  const [tasks,setTasks] = useState([])

  const handleStatusChange = (id, status) => {
      const taskUpdated = tasks.map((task) => {
        if (task.id === id) {
          task.status = !task.status
        }
        return task;
      });
      setTasks(taskUpdated)
  }

  const onTaskRemoved = (id) => {
      const taskUpdated = tasks.filter((task) => task.id !== id);
      setTasks(taskUpdated)
  }

  const handleTaskAdded = (desc) => {
    const addedTask = { id: 1, title: desc, status: false }
    setTasks([...tasks, addedTask]);
  }

  return (
   <NavigationContainer>
    <Tab.Navigator 
    initialRouteName='Home'>
     <Tab.Screen name='Home' options={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            headerTitleAlign: 'center',
            headerTitle: 'Tasks',
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused
                ? 'home'
                : 'home-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={color}
                  size={size}
                />
              );
            }
          }}>
     {(props) => {
              return (
                <HomeScreen {...props} tasks={tasks} onStatusChanged={handleStatusChange} onRemove={onTaskRemoved} />
              )
            }}
     </Tab.Screen>
     <Tab.Screen name='Add Task' options={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            headerTitleAlign: 'center',
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused
                ? 'plus-box'
                : 'plus-box-outline';
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={color}
                  size={size}
                />
              );
            }
          }}>
            {(props) => {
              return (
                <AddTaskScreen  {...props} setTasks={handleTaskAdded} />
              )
            }}
          </Tab.Screen>
    </Tab.Navigator>
   </NavigationContainer>
  );
}
