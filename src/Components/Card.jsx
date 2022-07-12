import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.time}</p>
    </div>
  );
}
