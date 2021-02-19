import React from 'react'
import "./App.css";
import Header from './components/partials/Header'
import Nav from './components/partials/Nav'
import Footer from './components/partials/Footer'
import reactDom from 'react-dom';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Nav />
        <Footer />
      </div>
    );
  }
}


export default App;
