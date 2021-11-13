import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Objects from './pages/Objects';
import Users from './pages/Users';

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
/**
React router dom 6.+ no longer uses Switch. You must use Routes. And we no longer write a route like this:
<Route path='/' exact component={Component} />

We write it like this now:
<Route path="/" element={<Home />} />
 */

function App() {
  return (
    <div className="App">
      <h1>
        Blank you, loser
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='objects' element={ <Objects /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
