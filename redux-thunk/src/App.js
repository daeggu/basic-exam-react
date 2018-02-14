import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';
import axios from 'axios';

class App extends Component {

    componentDidMount() {
        const {number, PostActions} = this.props;
        this.getPost(number);
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.number !== nextProps.number){
            this.getPost(nextProps.number);
        }
    }
    //error handling  (async, await) Wait Promise
    getPost = async (postId) => {
        const { PostActions }  = this.props;
        try {
            await PostActions.getPost(postId);
            console.log("request complete..")
        }catch(e){
            console.log("error!!!" , e);
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrementAsync}>-</button>
                { loading && <h2>로딩중....</h2>}
                {
                    error 
                    ? <h1>에러발생</h1>
                    : (
                        <div>
                            <h1> {post.title}</h1>
                            <p> {post.body}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.pender.pending['GET_POST'],
        error: state.pender.failure['GET_POST']
    
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);