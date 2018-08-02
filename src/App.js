import React, { Component } from 'react';
import './App.css';
import {getPersonsData} from './utilsFunctions/personsUtils';

class App extends Component {

  constructor() {
    super();
    this.state ={
      personsData: getPersonsData()
    }
  }

  render() {
    return (
      <div className="App">
        <h1>This is decent size Title</h1>
        <p>You should not be able to see this the first time</p>
        {this.state.personsData.map(personData=>{
          return(
            <p key={personData}>{personData}</p>
          )
        })}
      </div>
    );
  }
}

export default App;
