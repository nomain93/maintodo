import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput, Dimensions, Platform} from 'react-native';

const { height, width} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barstyle="auto" />
      <Text style={styles.apptitle}>오늘의 MAIN</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"오늘도 화이팅!"}></TextInput>
      </View>

    </SafeAreaView>
  );
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
    }
});
