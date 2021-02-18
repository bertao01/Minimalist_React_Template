import React from 'react'
import "./App.css";
import Header from './components/partials/Header'
import Nav from './components/partials/Nav'
import Footer from './components/partials/Footer'

function App(props) {
  return (
    <>
      <Header title="This is a Header"/>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
