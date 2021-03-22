// components/TodoInsert.js
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View,  TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');


  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="오늘도 파이팅!"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <TouchableOpacity onPress={addTodoHandler}>
      <View style={styles.button}>
      <Icon name="pluscircleo" size={30} color="blue" />
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding:20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft:20
  },
  button: {
    marginRight: 15,

  },
});
{/* <Button style={styles.bu}title={'추가'} /> */}
export default TodoInsert;