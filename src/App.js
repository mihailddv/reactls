import React from 'react';
import Header from "./components/Header";
import Layout from "./components/Layout";
import './App.css';

const style = {
  width: "100%",
  height: "100vh",
  boxSizing: "border-box",
  overflow: "hidden",
  background: "#cccccc"
};

const App = () => (
  <div style={style}>
    <Header/>
    {/* <Layout/> */}
  </div>
);

export default App;
