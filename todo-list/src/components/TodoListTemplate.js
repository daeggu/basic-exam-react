import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({from, children}) => {
      return (
            <main className="todo-list-template">
                  <div className="title">
                        Todo List
                  </div>
                  <section className="form-wrapper">
                        {from}
                  </section>
                  <section className="todos-wrapper">
                        {children}
                  </section>
            </main>
      );
};

export default TodoListTemplate;