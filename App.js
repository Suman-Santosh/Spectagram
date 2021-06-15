import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './navigation/DrawerNavigator';

const Tab = createBottomTabNavigator()

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>     
    )
  }
}