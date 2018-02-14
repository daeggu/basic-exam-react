import React, { Component } from 'react';
import CounterList from '../componets/CounterList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterAcitons from '../module/counter';
import { getRandomColor } from '../utils';

class CounterListContainer extends Component {
      onIncrement = (index) => {
            const { CounterActions } = this.props;
            CounterActions.increment(index);
      }
      onDecrement = (index) => {
            const { CounterActions } = this.props;
            CounterActions.decrement(index);
      }
      onSetColor = (index) => {
            const { CounterActions } = this.props;
            const color = getRandomColor();
            CounterActions.setColor({
                  'index' : index,
                  'color' : color
            });
      }
      render() {
            const { onIncrement, onDecrement, onSetColor } = this;
            const { counterList } = this.props;
            return (
                  <div>
                        <CounterList counterList = {counterList}
                                    onIncrement= {onIncrement}
                                    onDecrement = {onDecrement}
                                    onSetColor = {onSetColor}
                        />
                  </div>
            );
      }
}

export default connect(
      (state) => ({
            counterList : state.counter.list
      }),
      (dispatch) => ({
            CounterActions : bindActionCreators(counterAcitons, dispatch),
      })
)(CounterListContainer);