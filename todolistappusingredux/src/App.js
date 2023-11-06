import "./App.css";
import { connect } from "react-redux";
import TodoList from "./Screens/TodoList";
function App({ dispatch, count }) {
  return <TodoList />;
}

const mapStateToProps = (state) => {
  const obj = { count: state.counter };
  return obj;
};

export default connect(mapStateToProps)(App);
