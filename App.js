import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput, Dimensions, Platform, TouchableOpacity, Alert } from 'react-native';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoListItem from './components/TodoListItem'
import data from './data.json'
import start from './assets/start.png';
import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';





const { height, width } = Dimensions.get('window');

export default function App() {


  console.disableYellowBox = true;

  const [todos, setTodos] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const popup = () => {
    Alert.alert('오늘도 파이팅!')
  }
  // onPress={()=>{
  //   Alert.alert('팝업 알람입니다!!')
  // }}


  useEffect(() => {
    setTodos(data)
  }, [])

  let todo = data.tip;
  let index = data.tip.idx;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barstyle="auto" />
      <Text style={styles.apptitle}>TODAY'S MAIN</Text>
      <TouchableOpacity onPress={() => popup()}>
        <Image
          source={start}
          resizeMode={'contain'}
          style={styles.image}
        />
      </TouchableOpacity>
      < ScrollView style={styles.card}>
        {
          todo.map((content, i) => {
            return (<View style={styles.todocontainer} key={i}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                tintColors={{ true: 'blue' }}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}

              />
              <Text style={styles.text, toggleCheckBox ? styles.strikeText : styles.unstrikeText}>{content.title} </Text>
            </View>)
          })
        }
      </ScrollView>
    </SafeAreaView>
  )

}

// 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  apptitle: {
    color: 'white',
    fontSize: 29,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 10
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: - 1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#B778FF',
    borderBottomWidth: 1.5,
    fontSize: 18
  },
  image: {
    width: 380,
    height: 200,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 15,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
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
  },
  icon: {
    marginLeft: 10
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
  checkbox: {
    alignSelf: "center",
  },
});
{/* <Icon style={styles.icon} name="checkcircleo" size={30} color="pink" /> */ }