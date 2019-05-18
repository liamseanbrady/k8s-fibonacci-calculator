import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import myThunk from 'middlewares/myThunk'
import rootReducer from 'reducers'
import OtherPage from 'components/OtherPage'
import Fib from 'components/Fib'

class App extends Component {
  render() {
    console.log('testing testing version 2')
    const store = createStore(rootReducer, {}, applyMiddleware(myThunk))

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
            </header>
            <div>
              <Route exact path="/" component={Fib} />
              <Route path="/otherpage" component={OtherPage} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
