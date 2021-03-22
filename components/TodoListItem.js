// components/TodoListItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const TodoListItem = ({textValue, id, checked, onRemove}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.completeCircle} />
        <Icon name="checkcircleo" size={30} color="pink" />
      </TouchableOpacity>
      <Text style={styles.text, checked ? styles.strikeText : styles.unstrikeText}>{textValue}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={onRemove(id)}>
            <Icon name="delete" size={30} color="#e33057" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex:1,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 25,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: 'pink',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginTop:5,
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    
    flex:1,
    marginTop:20,
    marginBottom:10,
    fontSize:20,
    color: '#bbb',
    textDecorationLine: 'line-through'
  },
  unstrikeText: {
    flex:1,
    marginTop:20,
    marginBottom:10,
    fontSize:20,
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;