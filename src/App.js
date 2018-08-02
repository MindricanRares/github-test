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
