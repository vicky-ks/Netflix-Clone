import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sdata from "./Sdata";
import Card from "./Card";

ReactDOM.render(
  <>
    <h1 className="heading_style">List Of NETFLIX Series 2020</h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgscr}
          sname={val.sname}
          title={val.title}
          link={val.links}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
