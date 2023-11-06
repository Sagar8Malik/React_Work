import React, { useState } from "react";
import Result from "./Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

const choices = [
  { name: "rock", icon: faHandRock },
  { name: "paper", icon: faHandPaper },
  { name: "scissors", icon: faHandScissors },
];

function Game() {
  const [user1Choice, setUser1Choice] = useState(null);
  const [user2Choice, setUser2Choice] = useState(null);
  const [result, setResult] = useState(null);
  const [showRules, setShowRules] = useState(false); // State to control the visibility of rules

  const handleUserChoice = (user, choice) => {
    if (user === 1) {
      setUser1Choice(choice);
    } else {
      setUser2Choice(choice);
    }
  };

  const determineWinner = () => {
    if (user1Choice === user2Choice) {
      setResult("It's a tie!");
    } else if (
      (user1Choice === "rock" && user2Choice === "scissors") ||
      (user1Choice === "paper" && user2Choice === "rock") ||
      (user1Choice === "scissors" && user2Choice === "paper")
    ) {
      setResult("User 1 wins!");
    } else {
      setResult("User 2 wins!");
    }
  };
  // Function to toggle the visibility of the rules
  const toggleRules = () => {
    setShowRules(!showRules);
  };
  return (
    <div className="game">
      <div className="choices">
        <div className="user">
          <p>User 1</p>
          {choices.map((choice) => (
            <button
              key={choice.name}
              onClick={() => handleUserChoice(1, choice.name)}
              className={user1Choice === choice.name ? "selected" : ""}
              style={{
                marginBottom: "10px",
                width: "60px",
                borderRadius: "10px",
              }}
            >
              <FontAwesomeIcon icon={choice.icon} size="3x" />
            </button>
          ))}
        </div>
        <div className="user">
          <p>User 2</p>
          {choices.map((choice) => (
            <button
              key={choice.name}
              onClick={() => handleUserChoice(2, choice.name)}
              className={user2Choice === choice.name ? "selected" : ""}
              style={{
                marginBottom: "10px",
                width: "60px",
                borderRadius: "10px",
              }}
            >
              <FontAwesomeIcon icon={choice.icon} size="3x" />
            </button>
          ))}
        </div>
      </div>
      <div className="gap"></div>
      <button onClick={determineWinner} className="determine-button">
        Determine Winner
      </button>

      {/* Button to show/hide rules */}
      <button onClick={toggleRules} className="rules-button">
        Show Rules
      </button>

      {/* Display rules when the state is true */}
      <div className={`rules-container ${showRules ? "visible" : ""}`}>
        {showRules && (
          <div className="rules">
            <h3>Rules</h3>
            <p>1. Rock beats Scissors</p>
            <p>2. Scissors beats Paper</p>
            <p>3. Paper beats Rock</p>
            <div>
              {/* Close button */}
              <button onClick={toggleRules} className="close-rules-button">
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Result
        user1Choice={user1Choice}
        user2Choice={user2Choice}
        result={result}
      />
    </div>
  );
}

export default Game;
