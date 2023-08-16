import React from "react";
import { useState } from "react";
const Content = () => {
  const headerStyle = {
    backgroundColor: "maroon",
    color: "white",
  };
  const test = () => console.log("Testing");

  const handleClick = () => console.log("Click Event Received");

  const handleClickNew = (name) =>
    console.log(`Hi ${name} Click New Event Received`);

  const handleClickNewDetails = (e) => console.log(e.target);

  const [count, setCount] = useState(99);
  const incrementCount = () => setCount(count + 1);

  const [name, setName] = useState();
  function handleNameChange() {
    const names = ["Siva", "Krishna", "Skantha", "Ganapathy"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }
  function handleNameChangeOld() {
    const names = ["Siva", "Krishna", "Skantha", "Ganapathy"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div>
      <h1 style={headerStyle}> Content{test()} </h1>
      <h2 style={{ backgroundColor: "Grey", color: "white" }}>
        Content Version 2
      </h2>

      <div className="button-container">
        <button onClick={handleClick}>For Simple Click</button>
        <button onClick={() => handleClickNew("Bala")}>For Name</button>{" "}
        {/* { This is prints the output at the time of page loading } */}
        <button onClick={() => handleClickNew("Siva")}>For Click Params</button>
        <button onClick={(e) => handleClickNewDetails(e)}>
          For Click Details
        </button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        <p>Let's make {name} change</p>
        <button onClick={handleNameChange}>Name Change</button>
        <p>Let's make old {handleNameChangeOld()} change</p>{" "}
        {/* { This is prints the random output at the time of page loading } */}
      </div>
    </div>
  );
};
export default Content;
