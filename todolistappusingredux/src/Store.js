const initialState = {
  todos: [
    {
      todoTitle: "This is First Todo",
    },
    {
      todoTitle: "This is Second Todo",
    },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      const todos = [...state.todos];
      todos.push({ todoTitle: action.payload });
      return { todos: todos };
    }
    case "DELETE": {
      const todos = [...state.todos].filter((item, i) => i !== action.payload);
      return { todos: todos };
    }
    case "UPDATE": {
      const { index, todoTitle } = action.payload;
      let todos = [...state.todos];
      todos[index] = { ...todos[index], todoTitle };
      return { todos: todos };
    }
    default:
      return state;
  }
}
