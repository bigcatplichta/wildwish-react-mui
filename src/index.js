import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './Root';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// ReactDOM.render(
//   <Provider store={store}>
//     <ThemeProvider theme={theme}>
//       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//       <CssBaseline />
//       <Router>
//         <Route path="/:filter?" component={App} />
//       </Router>
//     </ThemeProvider>
//   </Provider>,
//   document.querySelector('#root'),
// );

ReactDOM.render(<Root store={store} />, document.getElementById('root'))