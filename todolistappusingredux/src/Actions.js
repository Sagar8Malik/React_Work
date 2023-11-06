export const addTodo = (actionPayload) => {
  return {
    type: "ADD",
    payload: actionPayload,
  };
};
export const deleteTodo = (actionPayload) => {
  return {
    type: "DELETE",
    payload: actionPayload,
  };
};
export const updateTodo = (actionPayload) => {
  return {
    type: "UPDATE",
    payload: actionPayload,
  };
};

export const increment = () => ({
  type: "INCREMENT",
});

export const asynIncrement = (actionPayload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "ADD", payload: actionPayload });
    }, 1000);
  };
};



export const getUsers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    // setTimeout(() => {
    //   dispatch({ type: "ADD", payload: actionPayload });
    // }, 1000);
  };
};
