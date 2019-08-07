import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: [],
      error: '',
      typeFilter: '',
      printFilter: 'all',

    }
  }

  handlePrintFilter(filter) {
    this.setState({printFilter: filter});
  }

  handleTypeFilter(filter) {
    this.setState({typeFilter: filter});
  }

  handleQuery (newQuery) {
    this.setState ({query: newQuery})
  }

  handleBookSearch () {
    const url = 'https://www.googleapis.com/books/v1/volumes?';
    const apiKey = 'AIzaSyBVBFD5Mmd2J4benkaMmcKoRJhEq9uU0yk';
    let requestUrl = '';
    if (this.state.typeFilter !== '') {
      requestUrl = `${url}key=${apiKey}&q=${this.state.query}&printType=${this.state.printFilter}&filter=${this.state.typeFilter}` 
    } else {
      requestUrl = `${url}key=${apiKey}&q=${this.state.query}&printType=${this.state.printFilter}`
    }
    fetch(requestUrl)
      .then(res => {
        console.log(requestUrl);
        return res.json()
      })
      .then(data => {
        console.log(data);
        this.setState({results: data.items});
        console.log(this.state);
      })
      .catch(err => this.setState({error: err}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Google Book Search</h1>
        </header>
        <Search handleBookSearch={this.handleBookSearch.bind(this)}
        handleQuery={this.handleQuery.bind(this)}
        handleTypeFilter={this.handleTypeFilter.bind(this)}
        handlePrintFilter={this.handlePrintFilter.bind(this)}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;