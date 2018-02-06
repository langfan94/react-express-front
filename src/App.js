import React, { Component } from 'react';
import AddTodo from './containers/addTodo'
import ShowCon from './containers/showCon'

class App extends Component {
  render() {
    return (
      <div>
        <ul className="todoClass">
          <li>
          <AddTodo children="123"/> 
          </li>
          <li>
          <AddTodo children="zzz"/>
          </li>
          <li>
          <AddTodo children="xxx"/>
          </li>
          <li>
          <AddTodo children="11122"/>
          </li>
          <li>
          <AddTodo children="xfd"/>
          </li>
          <li>
          <AddTodo children="asd"/>
          </li>
        </ul>
        <ShowCon/>
      </div>
    )
  }
}

export default App;
