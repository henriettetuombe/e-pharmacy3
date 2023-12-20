import React from "react";
import Input from "../../components/Input";

function Colors({ handleChange }) {
  return (
    <div>
      {" "}
      <h2 className="sidebar-title color-title">Age group</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="0-5"
        name="test1"
        color="0-5"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="6-10"
        name="test1"
        color="6-10"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="11-17"
        name="test1"
        color="11-17"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="18-30"
        name="test1"
        color="18-30"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="Above 30"
        name="test1"
        color="#D3D3D3"
        border="2px"
      />
    </div>
  );
}

export default Colors;