import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import NewScreen from './src/screens/NewScreen';
import {Icon} from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ //Same header style to all the screens in the app
          headerStyle: {
            backgroundColor: '#228CDB'
          },
          headerTintColor: '#fff'
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Icon
                name="plus"
                type="feather"
                color="#fff"
                style={style.headerIcon}
                onPress={() => navigation.navigate('New')}
              />
            )
          })}
        />
        <Stack.Screen name="New" component={NewScreen} />

      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});
