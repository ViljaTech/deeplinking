import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home';
import Article from './Article';

const Stack = createStackNavigator();

function App () {
  const prefix = 'myapp://myapp/';
  return (
    <NavigationContainer uriPrefix={prefix}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App