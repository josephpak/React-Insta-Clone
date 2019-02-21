import React from 'react';
import './reset.css';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import styled, { css } from 'styled-components';

const ControlledDisplay = authenticate(PostsPage)(Login)

const App = () => {
  return (
    <div className="App">
      <ControlledDisplay />
    </div>
  );

}

export default App;