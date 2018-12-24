import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
import {FirstFactorial} from "./coderbyte/challenges";

class App extends Component {
  render() {

    // console.group('First Reverse');
    // console.log('Input:', 'Hello World and Coders');
    // console.log('Output:', FirstReverse('Hello World and Coders'));
    // console.groupEnd();

    // console.group('Letter Changes');
    // console.log('Input:', 'hello*3');
    // console.log('Output:', LetterChanges('hello*3'));
    // console.log('Input:', 'fun times!');
    // console.log('Output:', LetterChanges('fun times!'));
    // console.groupEnd();

    // console.group('Simple Adding');
    // console.log('Input:', 140);
    // console.log('Output:', SimpleAdding(140));
    // console.groupEnd();

    // console.group('Longest Word');
    // console.log('Input:', 'I love dogs');
    // console.log('Output:', LongestWord('I love dogs'));
    // console.groupEnd();

    console.group('First Factorial');
    console.log('Input:', 8);
    console.log('Output:', FirstFactorial(8));
    console.groupEnd();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
