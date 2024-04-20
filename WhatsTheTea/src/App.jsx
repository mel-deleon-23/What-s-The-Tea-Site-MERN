import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Add routes for other pages here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
