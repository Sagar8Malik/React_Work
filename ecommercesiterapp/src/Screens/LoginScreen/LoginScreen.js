import React from "react";
import "./LoginScreen.css";
import Input from "../../Components/input/Input";
const LoginScreen = () => {
  return (
    <div className="w-h center">
      <div className="flex column shadow padding-10px gap-10px border-radius">
        <Input
          defVal=""
          refe={null}
          label="Email or Username"
          placeholder="Enter your Email..."
          typeOf="text"
        />
        <Input
          defVal=""
          refe={null}
          label="Password"
          placeholder="password..."
          typeOf="password"
        />
        <button className="padding-5px border-none primary font-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
