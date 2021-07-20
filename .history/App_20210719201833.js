//jshint esversion:6
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 10}}>
      <View>
        <TextInput placeholder="Course Gaol" style={{borderBottomColor: 'black', borderBottomWidth: 1 }}/>
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

