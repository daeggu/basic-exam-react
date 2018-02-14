import React, { Component } from 'react';
import Button from '../componets/Button';
import * as counterActions from '../module/counter'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';
class ButtonContainer extends Component {

      onCreate = () => {
            const { CounterActions } = this.props;
            let color = getRandomColor();
            CounterActions.create(color);
      }
      onRemove = () => {
            const { CounterActions } = this.props;
            CounterActions.remove();
      }
      render() {
            const { onCreate, onRemove } = this;
            return (
                  <div >
                        <Button onCreate={onCreate} 
                              onRemove={onRemove}></Button>
                  </div>
            );
      }
}
export default connect(
      null,
      (dispatch) => ({
            CounterActions : bindActionCreators(counterActions, dispatch)
      })
)(ButtonContainer)