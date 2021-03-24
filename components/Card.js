import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';


export default function Item({ content }) {

    const [checked, setChecked] = useState(false);
  
    return (
      <View
        style={styles.item}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color="#262C74"
        />
        <Text 
          style={[checked ? styles.strikeText : styles.unstrikeText]}>{task.title}</Text>
      </View>
    )
  }