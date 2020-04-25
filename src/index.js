import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Err404 from './Err404'
import PermalinkApp from './PermalinkApp'
import registerServiceWorker from './registerServiceWorker';


const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/tweet/:permalink" component={PermalinkApp} />
        <Route component={Err404} />
      </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
