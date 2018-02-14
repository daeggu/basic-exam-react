import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';

// The action structure of 'redux-pender' follows Flux standard action(https://github.com/acdlite/flux-standard-action)
// So you can create an action with createAction
// The second parameter is a function that returns Promise
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    //No need to manage request state
    data: {
        title: '',
        body: ''
    }
}
export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
           const { title, body } = action.payload.data;
           console.log("success...");
            return {
                data: {
                    title, 
                    body
                }
            }
        },
        onFailure : (state, action) => {
              console.log("failure...");
              return state;
        }, 
        onPending : (state, action) => {
            console.log("pending...");
        }
        // if ('onFailure', 'onPending') functions are omitted. returns the state as it is
    })
}, initialState);

// redux thunk
// export const getPostThunk = (postId) => (dispatch, getState) => {
//       return getPostAPI(postId).then(
//             (res)=>{
//                   console.log(res.data);
//                   getPost(res);
//             }
//       ).catch( e => {
//             console.log("error.... ", e);
//       })
// }
