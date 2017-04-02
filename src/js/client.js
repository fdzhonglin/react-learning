import React from "react";
import ReactDOM from "react-dom";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.title = "Welcome Johnny";
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);