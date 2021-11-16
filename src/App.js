
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Objects from './pages/Objects';
import Users from './pages/Users';

import clsx from 'clsx';
import { AppBar } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles'
import { height } from '@mui/system';

//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
/**
React router dom 6.+ no longer uses Switch. You must use Routes. And we no longer write a route like this:
<Route path='/' exact component={Component} />

We write it like this now:
<Route path="/" element={<Home />} />
 */

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    color: 'blue',
    height: '50px'
  },
  mainContainer:{
    marginTop: '60px',
    backgroundColor: 'gray'
  }
}));

function App() {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >

      </AppBar>
      <div className={classes.mainContainer}>

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
      
    </div>
  );
}

export default App;
