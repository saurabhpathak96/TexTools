import React, { useState } from "react";

export default function Operations(props) {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const lowerToUpper = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Success: ', 'Converted to Upper case')
  };

  const upperToLower = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Success: ', 'Converted to Lower case')
  };

  const capitalize = () => {
    let newText = text.substring(0, 1).toUpperCase() + text.substring(1);
    setText(newText);
    props.showAlert('Success: ', 'Capitalized')
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Success: ', 'Extra space removed')
  };

  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value.split(/[ ]+/).join(" "));
    props.showAlert('Success: ', 'Copied to clipboard')
  };

  const handleClear = () => {
    setText("");
    props.showAlert('Success: ', 'Text Cleared')
  };

  let wordCount = text.length === 0 ? 0 : text.split(/[ ]+/).length;
  let size = text.split(/[ ]+/).length;
  if (text.split(/[ ]+/)[size - 1].length === 0 && wordCount > 0) wordCount--;

  return (
    <>
      <div
        className={
          "container" +
          (props.mode === "dark" ? " text-light" : " text-dark")
        }
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={
              "form-control" +
              (props.mode === "dark" ? " text-light" : " text-dark")
            }
            style={{backgroundColor: (props.mode === "dark"? "grey" : "white")}}
            value={text}
            onChange={changeHandler}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-success mx-1 my-1" onClick={lowerToUpper}>
          Covert to uppercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={upperToLower}>
          Covert to lowercase
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={capitalize}>
          Capitalize
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className={
          "container my-3 " +
          (props.mode === "dark" ? " text-light" : " text-dark")
        }
      >
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <h3> Preview </h3>
        <p style={text.length===0?{opacity: '50%'}:null}>{text.length===0?"Enter something in the textbox above to see the preview.":text}</p>
      </div>
    </>
  );
}
