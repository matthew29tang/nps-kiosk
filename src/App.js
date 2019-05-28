import React from 'react';
import './App.css';
import NavBar from './pages/router/NavBar.js';
import Routing from './pages/router/Routing.js';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <NavBar />
        </div>
      );
    }
  }

export default App;
