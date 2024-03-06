/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import Welcome from './src/components/welcome/Welcome';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style = {styles.text} >Hi! Welcome to react-native.</Text> */}
      <Welcome/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  
});

export default App;
