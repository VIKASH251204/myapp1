import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleLoClick = () => {
    // console.log("Button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")

  };

  const handleClearClick = () => {
    // console.log("Button was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared this Text", "success");

  };

  const handleUpChange = (event) => {
    // console.log("Button was Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#323a5c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
            placeholder="Enter Your Text And Check Summry"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {" "}
          Convert To UpperCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          {" "}
          Convert To LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          {" "}
          Clear Text{" "}
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summry</h1>
        <p>
          {text.split(" ").length} words <b>And</b> {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
