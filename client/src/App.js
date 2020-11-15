import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import store from './store/index';

import Home from './pages/home.page';

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  }
]

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div>
          <Switch>
            {
              routes.map(element=>{
                return(
                  <Route 
                  key={element.children}
                  {...element}/>
                )
              })
            }
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;