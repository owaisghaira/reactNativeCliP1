import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Todo = () => {
  const [todos, setTodos] = useState([{ name: 'osama' }, { name: 'owais' }])
  const [value, setValue] = useState('')
  const setTod = () => {
    // var database = firebase.database().ref("todos");
    // var key = database.push().key
    let todo = {
      // key: key,
      edit: false,
      name: value
    }
    // database.child(key).set(todo)
    let obj = { name: value, edit: false }
    // firebase.database().ref("/").child("todos").push(obj)
    todos.push(obj)
    setValue(' ')
  }
  const deleteTod = (e, key) => {
    // firebase.database().ref("todos").child(key).remove()
    todos.splice(e, 1)
    setValue('')
    setTodos(todos)
    alert('deleted Successfully')
  }
  const editTodo = (i, val) => {
    todos[i].edit = true;
    setValue('')
  }
  const updateTodo = (i) => {
    todos[i].edit = false;
    setTodos(todos)
    setValue('')
  }

  const handleChange = (e, i, key) => {
    todos[i].name = e
    setTodos(todos)
    var edittodo = {
      key: key,
      edit: false,
      name: e
    }
    console.log(edittodo)
    // firebase.database().ref("todos").child(key).set(edittodo);
    console.log(todos)
  }
  return (
    <View style={styles.container}>
      {todos.map((v, index) => {
        return (
          <View key={index} style={styles.todoAdd}>
            {v.edit ?
              <TextInput onChangeText={(e) => handleChange(e, index, v.key)} style={styles.updateInput} />
              :
              <Text style={styles.addText}>{v.name}</Text>
            }

            <View style={{ flexDirection: 'row', marginTop: 6, }}>
              {v.edit ?
                <TouchableOpacity onPress={() => updateTodo(index)} style={styles.todoBtn}>
                  <Text>Update</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => editTodo(index, v.name)} style={styles.todoBtn}>
                  <Text>Edit</Text>
                </TouchableOpacity>

              }
              <TouchableOpacity onPress={() => deleteTod(index, v.key)} style={styles.todoBtn}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

        )
      })}
      <View style={styles.main3}>
        <TextInput value={value} onChangeText={(e) => setValue(e)} placeholder="Enter Todo Here..." style={styles.input} />
        <TouchableOpacity activeOpacity={0.3} style={styles.btnadd}>
          <Text onPress={setTod} style={styles.btntext}>+Add</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    height: 40,
    paddingLeft: 8,
    borderColor: 'gray',
    borderWidth: 2,
    width: 280,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black'

  },
  updateInput: {
    margin: 8,
    height: 28,
    borderColor: 'gray',
    borderWidth: 2,
    width: 180,
  },
  main1: {
    backgroundColor: 'red',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  main2: {
    flex: 10,
    // backgroundColor: 'white',
    width: "100 %"
  },
  main3: {
    flex: 1,
    width: "100 %",
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  btntext: {
    color: 'black',
    fontSize: 20,

  },
  btnadd: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: 'center',
    width: 60,
    height: 37,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10
  },
  todoAdd: {
    margin: 8,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#FF5722',
    borderRadius: 15,
    width: "80%"

  },
  addText: {
    fontSize: 18,
    paddingLeft: 20,
    padding: 4,

  },
  todoBtn: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF5722',
    height: 28,
    marginLeft: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10
  }
});

export default Todo;
