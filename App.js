import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/home/HomeScreen'
import AddTaskScreen from './components/AddTaskScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import uuid from 'react-native-uuid';



//Object for bottom tab navigator
const Tab = createBottomTabNavigator()

export default function App() {
  const [tasks, setTasks] = useState([])

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
    const addedTask = { id: uuid.v4(), title: desc, status: false }
    setTasks([...tasks, addedTask]);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else {
            iconName = focused ? 'plus-box' : 'plus-box-outline';
          }
          return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
        }
      })}>
        <Tab.Screen name='Home' options={{
          headerTitle: 'Tasks',
        }}>
          {(props) => {
            return (
              <HomeScreen {...props} tasks={tasks} onStatusChanged={handleStatusChange} onRemove={onTaskRemoved} />
            )
          }}
        </Tab.Screen>
        <Tab.Screen name='Add Task'>
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
