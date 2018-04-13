import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ZoomButtons from './ZoomButtons';

// const MySvg = require('./Freesample.svg')
import mySvg from './Freesample.svg';


class App extends Component {

constructor(props) {
  super(props);
  this.state = {scale : 5}
}

onZoomInClick = () => {
    console.log("click zoom in");
    this.setState({
      scale: this.state.scale + 1
    });
}

onZoomOutClick= () => {
  console.log("click zoom out");
  this.setState({
    scale: this.state.scale - 1
  });
}

  render() {

    var scaleValue = "scale(" + this.state.scale + ")";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>        
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ZoomButtons onZoomInClick = {this.onZoomInClick} onZoomOutClick = {this.onZoomOutClick}/>
        {/* <MySvg /> */}
        <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="-100 -100 500 500" aria-labelledby="title">
              <title id="title">Umbrella Icon</title>
              <g transform={scaleValue}>
              <path d="M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z"/>
              </g>
          </svg>
      </div>
    );
  }
}

export default App;
