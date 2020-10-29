import React , { Component } from 'react';

import './App.css';


class App extends Component {
constructor(){
  super();

  this.state= {
    monsters: [
 {
   name:'Raavan',
   id:'ash1'
  },
  {
    name: 'Mahisasur',
    id : 'ash2'
  },
  {
    name: 'Kansh',
    id: 'ash3'
  }
]
};
}

  render() {
  return (
    <div className="App">
     {
       this.state.monsters.map(monster =>(
          <h1 key= {monster.id}>{monster.name}</h1> )
       )}
    </div>
  );
}}

export default App;
