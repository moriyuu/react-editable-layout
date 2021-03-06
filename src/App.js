import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Grid className="grid">
          <div className="item desc">desc</div>
          <div className="item editor">editor</div>
          <div className="item images">images</div>
          <div className="item console">console</div>
          <div className="item divider vertical" draggable>
            vertical
          </div>
          <div className="item divider horizon" draggable>
            horizon
          </div>
          <div className="item divider edidiv" draggable>
            edidiv
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  display: -ms-grid;
  grid-template-rows: 50% 13px 1fr;
  -ms-grid-rows: 50% 13px 1fr;
  grid-template-columns: 35% 13px 30% 13px 1fr;
  -ms-grid-columns: 35% 13px 30% 13px 1fr;
  grid-template-areas:
    "desc vertical editor  edidiv  images"
    "desc vertical horizon horizon horizon"
    "desc vertical console console console";

  .desc {
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
    -ms-grid-column: 1;
    grid-area: desc;
  }
  .vertical {
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
    -ms-grid-column: 2;
    grid-area: vertical;
  }
  .editor {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    grid-area: editor;
  }
  .horizon {
    -ms-grid-row: 2;
    -ms-grid-column: 3;
    -ms-grid-column-span: 3;
    grid-area: horizon;
  }
  .console {
    -ms-grid-row: 3;
    -ms-grid-column: 3;
    -ms-grid-column-span: 3;
    grid-area: console;
  }
  .edidiv {
    -ms-grid-row: 1;
    -ms-grid-column: 4;
    grid-area: edidiv;
  }
  .images {
    -ms-grid-row: 1;
    -ms-grid-column: 5;
    grid-area: images;
  }
`;
