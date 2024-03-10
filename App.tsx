/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import Welcome from './src/components/welcome/Welcome';
import OtherLoginOption from './src/components/login/components/OtherLoginOption';
import Login from './src/components/login/Login';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Welcome/> */}
        <Login/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  
});

export default App;
