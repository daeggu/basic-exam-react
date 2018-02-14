import React from 'react';
import './CounterList.css';
import Counter from './Counter';

const CounterList = ({counterList, onIncrement, onDecrement, onSetColor}) => {
  
      const renderList = counterList.map((counter, i)=>(
            <Counter 
                  key= {i}
                  index = {i}
                  number = {counter.number}
                  color = {counter.color}
                  onIncrement={()=> onIncrement(i)}
                  onDecrement={()=> onDecrement(i)}
                  onSetColor={()=> onSetColor(i)} />
                       
      ));

      return (
            <div className="CounterList">
                  {renderList}
             </div>
      );
};

export default CounterList;