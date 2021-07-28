import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';


const GoalItem = props => {
    return(
        <View key={goal} style={styles.listItem}> 
            <Text>{goal}</Text> 
          </View> 
    )
}

export default GoalItem