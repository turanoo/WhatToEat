import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
        render() {
          return <h1>What To Eat</h1>
        }
      }
export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
