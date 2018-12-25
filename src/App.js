import React, { Component } from "react";
// import styled, { css } from "styled-components";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        {/* <EditableGrid
          rows={["50%", "13px", "1fr"]}
          columns={["35%", "13px", "30%", "13px", "1fr"]}
          areas={["desc editor", "desc console"]}
        >
          <GridArea name="desc">desc</GridArea>
          <GridArea name="editor">editor</GridArea>
          <GridArea name="images">images</GridArea>
          <GridArea name="console">console</GridArea>
          <GridArea name="vertical" draggable>
            vertical
          </GridArea>
          <GridArea name="horizon" draggable>
            horizon
          </GridArea>
          <GridArea name="edidiv" draggable>
            edidiv
          </GridArea>
        </EditableGrid> */}

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

// // ======================================================================================================

// function EditableGrid(props) {
//   return (
//     <EditableGridWrapper
//       rows={props.rows}
//       columns={props.columns}
//       areas={props.areas}
//     >
//       {props.children}
//     </EditableGridWrapper>
//   );
// }

// const EditableGridWrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   display: grid;
//   display: -ms-grid;
//   /* -ms-grid-rows: ${p => p.rows.join(" ")}; */
//   grid-template-rows: ${p => p.rows.join(" ")};
//   grid-template-columns: ${p => p.columns.join(" ")};
//   /* -ms-grid-columns: ${p => p.columns.join(" ")}; */
//   grid-template-areas: "desc vertical editor  edidiv  images"
//                        "desc vertical horizon horizon horizon"
//                        "desc vertical console console console";
//   /* ${p => p.areas.map(a => `"${a}"`)}; */
// `;

// // ======================================================================================================

// function GridArea(props) {
//   return (
//     <GridAreaWrapper name={props.name} draggable={props.draggable}>
//       {props.children}
//     </GridAreaWrapper>
//   );
// }

// const GridAreaWrapper = styled.div`
//   border: 1px solid #444;
//   grid-area: ${p => p.name};
// `;

// // ======================================================================================================

// // function Divider(props) {
// //   return (
// //     <DividerWrapper
// //       name={props.name}
// //       draggable
// //       direction={props.direction}
// //       onDragStart={e => console.log("start", e)}
// //       onDragEnd={() => console.log("end")}
// //       onDrag={e => console.log("onDrag", e.pageX)}
// //       // onDragStart={props.onDragStart}
// //       // onDragEnd={props.onDragEnd}
// //       // onDrag={props.onDrag}
// //     />
// //   );
// // }

// // const DividerWrapper = styled.div`
// //   position: absolute;
// //   background-color: tomato;

// //   ${p =>
// //     p.direction === "vertical" &&
// //     css`
// //       height: 100%;
// //       width: 4px;
// //       top: 0;
// //       left: calc(35% - 2px);
// //     `}
// // `;
