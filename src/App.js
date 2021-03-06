import React, { Component } from 'react';
import './App.css';
import {getPersonsData} from './utilsFunctions/personsUtils';

class App extends Component {

  constructor() {
    super();
    this.state ={
      personsData: []
    }
  }
  componentDidMount(){
    var request = require("request");
    var options = {
      method: 'GET',
      url: 'https://web-workshop-server.herokuapp.com/persons',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        firstName: 'Mihai',
        lastName: 'M',
        sex: 'male',
        age: 40
      },
      json: true
    };

    request(options,(error, response, body)=> {
      if (error) throw new Error(error);
      this.setState({
        personsData:getPersonsData(body)
      });
    });

  }

  render() {
    return (
      <div className="App">
        <h1>This is decent size Title</h1>
        <p>This should now be present</p>
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
