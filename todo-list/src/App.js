import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import {Record, List}  from  'immutable';

const TodoListInfo = Record({
  input : '',
  list : List()
});

const TodoInfo = Record({
  id: 0,
  text : '',
  checked: false
})
class App extends Component {
  id = 4;
  state = {
    todoListInfo: TodoListInfo({
      input: '',
      list: List([
        TodoInfo({
          id:1,
          text: 'todo1',
          checked: false
        }),
        TodoInfo({
          id:2,
          text: 'todo2',
          checked: true
        }),
      ])
    })
  }
  
  handleCreate = () => {
    const {todoListInfo}  = this.state;
    const nextTodoListInfo = todoListInfo.set('input', '')
    .update('list', (list)=> list.push(TodoInfo({
      id: this.id++,
      text: todoListInfo.input,
      checked: false
    })))
    this.setState({
      todoListInfo: nextTodoListInfo
    });
  }
  handelKeyPress = (e) => {
    if(e.key === 'Enter')
      this.handleCreate();
  }

  handleChange = (e) => {
    const { value } = e.target;
    const {todoListInfo } = this.state;
    this.setState({
      todoListInfo : todoListInfo.set('input', value)
    });
  }
  handleToggle = (id) => {
      const { todoListInfo } = this.state;
      const index = todoListInfo.list.findIndex(todo => todo.id === id);

      const next = todoListInfo.list.setIn([index, 'checked'],
        !todoListInfo.list.get(index).checked);

      this.setState({
        todoListInfo: todoListInfo.set('list', next)
      })
  }
 
  handleRemove = (id) => {
    const {todoListInfo} = this.state;
    const index = todoListInfo.list.findIndex( todo => todo.id === id);
    const next = todoListInfo.list.delete(index);

    this.setState({
      todoListInfo : todoListInfo.set('list', next)
    })
  }

  render() {
    const { handleChange, handleCreate, handelKeyPress, handleToggle, handleRemove } = this;
    const { todoListInfo } = this.state;
    return (
      <div className="body">
          <TodoListTemplate from={(
            <Form 
                value={todoListInfo.input}  
                onChange={handleChange}
                onCreate={handleCreate}
                onKeyPress={handelKeyPress}
                />
            )}>
            <TodoItemList 
                todos={todoListInfo.list}
                onToggle={handleToggle}
                onRemove={handleRemove}               
                />
          </TodoListTemplate>
      </div>
    );
  }
}

export default App;

