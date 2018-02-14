import React, { Component } from 'react';
import Counter from '../componets/Counter';
import CounterListContainer from '../contrainers/CounterListContainer'
import ButtonContainer from '../contrainers/ButtonContainer';

class App extends Component {
  render() {
    return (
        <div>
          <ButtonContainer/>
          <CounterListContainer/>
        </div>
    );
  }
}
export default App;
