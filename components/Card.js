import React, { useState } from 'react'
// import CheckBox from 'react-native-check-box'
import { Checkbox } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts, Allan_400Regular, Allan_700Bold } from '@expo-google-fonts/allan';
import Icon from 'react-native-vector-icons/AntDesign';




export default function Card({ content }) {

  const [checked, setChecked] = useState(false);
  let [fontsLoaded] = useFonts({
    Allan_400Regular,
    Allan_700Bold,
  });
  let fontSize = 20;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={styles.todocontainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color="blue"
        />
        <Text style={{
          fontSize,
          paddingVertical, fontFamily: 'Allan_700Bold'
        }, checked ? styles.strikeText : styles.unstrikeText}>{content.title}</Text>
        <Icon name="rocket1" size={30} color="#000" />
      </View>
    )
  }
}



const styles = StyleSheet.create({

  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter_900Black',
    marginVertical: 20,
    width: 100,
    marginLeft: 20
  },
  todocontainer: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },

  strikeText: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    color: '#bbb',
    textDecorationLine: 'line-through',
    textAlign: 'center'
  },
  unstrikeText: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#29323c',
  },

});