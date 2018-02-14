import { createAction, handleActions } from 'redux-actions';
import { Map, List, Record  } from 'immutable';

//action Types
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const SET_COLOR = 'color/SET_COLOR';

//action Creator
export const increment = createAction(INCREMENT); //index
export const decrement = createAction(DECREMENT); //index
export const setColor = createAction(SET_COLOR); //index, color

export const create = createAction(CREATE); //color
export const remove = createAction(REMOVE); // null

//circle VO
const Circle = Record({
      number : 0,
      color: 'black'
});

const Data = Record({
      list : List()
});

const initialState = Data({
      list : List([
            Circle({
                  number : 0,
                  color : 'black'
            }), 
      ]),
})

//reducer
export default handleActions({
      [INCREMENT]: (state, action) =>{ //index
            const { list }  = state;
            let index = action.payload;
            let nextList = list.update(index, item => item.set('number', item.number + 1));
            return state.set('list', nextList);
      },
      [DECREMENT]: (state, action) => { //index
            const { list } = state;
            let index = action.payload;
            let nextList = list.update(index, item => item.set('number', item.number - 1));
            return state.set('list', nextList);
      },
      [SET_COLOR]: (state, action) => { //index, color
            const { list } = state;
            const { payload } = action;
            let newList = list.update(payload.index, 
                  item => item.set('color', payload.color));
            return state.set('list', newList);
      },
      [CREATE] : (state, action) => { //color
            const { list } = state;
            let newList = list.push(Circle({
                  number : 0,
                  color : action.payload
            }));
            return state.set('list', newList);
      },
      [REMOVE] : (state, action) => { //null
            const { list } = state;
            let newList = list.pop();

            return state.set('list', newList);
      }

}, initialState);