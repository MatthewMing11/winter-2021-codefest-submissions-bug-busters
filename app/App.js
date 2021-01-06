import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Timer from "./components/Timer"
import Questionnaire from "./components/Questionnaire"


const Stack = createStackNavigator({
  Questionnaire: { screen: Questionnaire},
  Timer: { screen: Timer },
});

const App = createAppContainer(Stack);
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});