import React from "react";

export function ButtonNumber(props) {
  return <button className="btn btn-number">{props.number}</button>;
}

export function ButtonFunction(props) {
  return (
    <button className="btn btn-function" id={props.id}>
      {props.text}
    </button>
  );
}

export function ButtonIcons(props) {
  return (
    <button className="btn btn-icons">
      <props.icons></props.icons>
    </button>
  );
}
