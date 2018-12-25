import React, { Component } from "react";
// import styled, { css } from "styled-components";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div className="grid">
          <div className="item desc">desc</div>
          <div className="item editor">editor</div>
          <div className="item images">images</div>
          <div className="item console">console</div>
          <div className="item vertical" draggable>
            vertical
          </div>
          <div className="item horizon" draggable>
            horizon
          </div>
          <div className="item edidiv" draggable>
            edidiv
          </div>
        </div>
      </div>
    );
  }
}

export default App;
