/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SearchScreen from './screens/SearchScreen';
import ResultScreen from './screens/ResultShowScreen';
import {StyleSheet} from 'react-native';
const stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="Search"
            component={SearchScreen}
            options={{title: 'Business Search'}}
          />
          <stack.Screen
            name="Result"
            component={ResultScreen}
            options={{title: 'Business Search'}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
