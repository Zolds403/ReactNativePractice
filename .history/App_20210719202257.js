//jshint esversion:6
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput placeholder="Course Gaol" style={{borderColor: 'black', borderWidth: 1, padding: 10 }}/>
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

