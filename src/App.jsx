import React, { Component } from "react";
import Todo from "./containers/Todo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Theme from "./containers/context/Theme";
import anotherRoute from './containers/route/Route';

class App extends Component {
  render() {
    return (
      <div id="root-container">
        <h1 id="__welcome-header">Hello World!</h1>
        <hr />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/context" component={Theme} />
            <Route path="/route" component={anotherRoute} />
            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
