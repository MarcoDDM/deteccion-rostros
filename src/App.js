import React from 'react';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/*
        <ImageLinkForm />
        <FaceRecognition />*/}
    </div>
  );
}

export default App;
