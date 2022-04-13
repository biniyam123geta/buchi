
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
import React, { useEffect, Suspense } from "react";
import NotFound from './components/UI/NotFound/NotFound';

import Checkout from './components/UI/Checkout';

function App() {
return (
 <div className='App'> 
      <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/home' component={HomePage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="*" component={NotFound} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
