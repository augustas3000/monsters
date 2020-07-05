import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  // access to state
  constructor() {
    //call constructor on component class, giving acces to this.state
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    //betetr - use arr functions
    // this.handleChange = this.handleChange.bind(this);
  }

  //mounts - react renders component onto the page for first time
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // handleChange(e) {
  //   //have to explicitly state the context for 'this'
  //   this.setState({ searchField: e.target.value });
  // }

  // better arrow functions, this bound automatically
  handleChange = (e) => {
    //automatically bind this, where this arrow function is defined in
    //the first place
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    //input - onChange - setState - render() - filteredMonsters -
    //CardList re-rendered

    //this - a keyword that references the context in which it is
    //being invoked, this.state - state of class component


    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
