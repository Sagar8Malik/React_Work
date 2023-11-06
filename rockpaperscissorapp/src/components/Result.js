import React from "react";

function Result({ user1Choice, user2Choice, result }) {
  return (
    <div className="result">
      <p>User 1 chose: {user1Choice || "No choice made yet"}</p>
      <p>User 2 chose: {user2Choice || "No choice made yet"}</p>
      {result && <p>{result}</p>}
    </div>
  );
}

export default Result;
