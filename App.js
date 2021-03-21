import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput, Dimensions, Platform} from 'react-native';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoListItem from './components/TodoListItem'

const { height, width} = Dimensions.get('window');

export default function App() {
  console.disableYellowBox = true;  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barstyle="auto" />
      <Text style={styles.apptitle}>오늘의 MAIN</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
      </View>
    </SafeAreaView>
  )
    
}



  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4F4FA',
    alignItems: 'center',
  },

    apptitle : {
        color:'white',
        fontSize: 36,
        fontWeight:'300',
        textAlign:'center',
        marginTop:50,
        marginBottom:30
    },
    card :{
      backgroundColor:'white',
      flex:1,
      width: width - 25,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
       ...Platform.select({
        ios : {
          shadowColor:'rgb(50, 50, 50)',
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: {
            height :- 1,
            width:0
          }
        },
        android: {
          elevation: 3
        }
      })
    },
    input : {
      padding: 20,
      borderBottomColor:'#B778FF',
      borderBottomWidth: 1.5,
      fontSize: 18
    }
});
