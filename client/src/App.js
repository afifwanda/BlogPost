import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

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
  );
}

export default App;