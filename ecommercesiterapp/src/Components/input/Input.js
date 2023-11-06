import React from "react";

const Input = ({ defVal, refe, label, placeholder, typeOf }) => {
  return (
    <div className="ele-group">
      <div className="input-box">
        <label>{label}</label>
        <input
          defaultValue={defVal}
          type={typeOf}
          placeholder={placeholder}
          ref={refe}
          required
        />
      </div>
      {/* <p>Enter correct name</p> */}
    </div>
  );
};

export default Input;
