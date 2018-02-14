import React from 'react';
import ReactDOM from 'react-dom';
import App from './contrainers/App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './module';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map, List, Record  } from 'immutable';

const store = createStore(reducers ,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//console.log(store.getState().counter);

ReactDOM.render(
      <Provider store={store}>
            <App />
      </Provider>
      ,document.getElementById('root'));
registerServiceWorker();