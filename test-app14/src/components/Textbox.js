import React, { useState } from "react";

const Textbox = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ margin: "1em 0" }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "0.5em", fontSize: "1em", width: "100%" }}
      />
      <p>You typed: {value}</p>
    </div>
  );
};

export default Textbox;
