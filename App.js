import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Components} from 'common';
import {
  ToDoList,
  CreateList,
  Task,
} from './src/modules';
import store from './src/store';

const {HeaderLeft} = Components;
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="List"
          screenOptions={{ headerStyle: { backgroundColor: '#9AE1CA' } }}
        >
          <Stack.Screen 
            name="List" 
            component={ToDoList} 
            options={{ title: 'Todo App' }}
          />
          <Stack.Screen 
            name="Create" 
            component={CreateList} 
            options={({navigation}) => ({ 
              title: 'Create Todo Task', 
              headerLeft: () => (
                <HeaderLeft onPress={() => navigation.goBack()} />
              ),
            })}
          />
          <Stack.Screen 
            name="Task" 
            component={Task} 
            options={({navigation}) => ({ 
              title: 'Task Preview', 
              headerLeft: () => (
                <HeaderLeft onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
