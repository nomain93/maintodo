import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TextInput, Dimensions, Platform, TouchableOpacity, Alert } from 'react-native';
import data from './data.json'
import stay from './assets/stay.png';
import Card from './components/Card'
import Loading from './components/Loading'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';




const { height, width } = Dimensions.get('window');
// const fetchFonts = async () => {
//   await Font.loadAsync({
//     'BMJUA': require('./assets/fonts/BMJUA.ttf'),
//   });
// }

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });



  // const [fontLoaded, setFontLoaded] = useState(true);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={setFontLoaded(true)} 
  //       onError={alert('오류')}/>
  //   );
  // }

  console.disableYellowBox = true;

  const [todos, setTodos] = useState([]);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  // const [cateState,setCateState] = useState([])
  // const [checked, setChecked] = React.useState(false);

  const [ready, setReady] = useState(true)


  const popup = () => {
    Alert.alert('오늘도 파이팅!')
  }
  // onPress={()=>{
  //   Alert.alert('팝업 알람입니다!!')
  // }}

  useEffect(() => {

    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(() => {
      setTodos(data)
      setReady(false)
    }, 1500)


  }, [])
  let todo = todos.tip;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ready ? <Loading /> : (
      <SafeAreaView style={styles.container}>
        <StatusBar barstyle="auto" />
        <Text style={styles.apptitle}>TODAY'S MAIN</Text>
        <TouchableOpacity onPress={() => popup()}>
          <Image
            source={stay}
            resizeMode={'contain'}
            style={styles.image}
          />
        </TouchableOpacity>
        < ScrollView style={styles.card}>
          {
            todo.map((content, i) => {
              return (
                <Card content={content} key={i} />
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
    )

  }
}


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
    fontFamily: 'Inter_900Black',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 10
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
    fontFamily:'Inter_900Black',
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