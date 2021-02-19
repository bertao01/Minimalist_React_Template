import React from 'react'
import "./App.css";
import Header from './components/partials/Header'
import Nav from './components/partials/Nav'
import Footer from './components/partials/Footer'
import reactDom from 'react-dom';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={apiResponse:""}
  }

  callAPI(){
      fetch("http://localhost:4000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
  }

  componentWillMount(){
      this.callAPI()
  }
  
  render(){
    return (
      <div className="App">
        <Nav />
        <h1 className="text-danger">{this.state.apiResponse}</h1>
        <Footer />
      </div>
    );
  }
}


export default App;
