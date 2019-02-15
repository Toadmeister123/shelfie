import React, { Component } from 'react';
import './App.css';
import Dashboard from './componenets/Dashboard/Dashboard'
import Form from './componenets/Form/Form'
import Header from './componenets/Header/Header'
import axios from 'axios';

class App extends Component {
    constructor(){
      super()

      this.state = {
      inventoryList:[],
      input: ''
    } 
  }

  componentDidMount() {
    axios.get('/api/inventory').then(res => {
      console.log(res.data)
      this.setState({
        inventoryList: res.data
      })
    })
  }

  

  render() {
    const {inventoryList} = this.state
    return (
      <div className="App">
        <Dashboard 
        inventoryList={this.state.inventoryList}
        />
        <Form 
        componentDidMount ={this.componentDidMount}
        inventoryList={inventoryList}
        />
        <Header />
      </div>
    );
  }
}

export default App;
