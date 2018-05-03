/**
 * @author arman
 * @since 12/29/16
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {initializeApp} from '../actions';
import storeFactory from '../store/index';
import MainContent from './dumb/main-content.component';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = storeFactory();

injectTapEventPlugin();
class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <div className="electron__player body">
                <MainContent />
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
