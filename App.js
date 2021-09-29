import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Button from './Components/Button.js';
import Heading from './Components/Heading.js';
import Input from './Components/Input.js';
import TabBar from './Components/TabBar.js';
import TodoList from './Components/TodoList';

let todoIndex = 0;

export class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.setType = this.setType.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  setType(type) {
    this.setState({type});
  }
  inputChange(inputValue) {
    console.log('Input Value', inputValue);
    this.setState({inputValue: inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return; //returns if its empty or whitespace
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos, inputValue: ''}, () => {});
  }

  deleteTodo(todoIndex) {
    let {todos} = this.state;
    todos = todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({todos});
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    console.log(todos);
    todos.forEach(todos => {
      if (todos.todoIndex === todoIndex) {
        todos.complete = !todos.complete;
      }
    });
    this.setState({todos});
  }
  render() {
    // const {inputValue} = this.state;
    return (
      <View>
        <ScrollView>
          <Heading />
          <Input
            inputValue={this.state.inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            type={this.state.type}
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Button submitTodo={this.submitTodo} />
          <TabBar type={this.state.type} setType={this.setType} />
        </ScrollView>
      </View>
    );
  }
}

export default App;
