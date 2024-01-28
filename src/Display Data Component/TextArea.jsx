import React, { useState } from "react";
import "./TextArea.css"

function TextArea() {
  const [text, setText] = useState("");
  const handleTextarea = (event) => {
    setText(event.target.value);
  };
  return <div className="textareacontainer">
    <textarea className="auto-resize-textarea"
    value={text}
    onChange={handleTextarea} />
  </div>;
}

export default TextArea;
