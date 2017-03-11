import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';

import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topic</Link></li>
          </ul>
        

          <hr />

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
