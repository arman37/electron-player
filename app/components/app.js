/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {initializeApp} from '../actions';
import {Containers} from './smart/containers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(Reducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
));

injectTapEventPlugin();
class App extends React.Component {
  render () {
    return (
        <Provider store={store}>
            <div className="electron__player body">
                <Containers />
            </div>
        </Provider>
    );
  }
}

store.dispatch(initializeApp('msg'));

// Render to index.html
ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
  document.getElementById('content')
);
