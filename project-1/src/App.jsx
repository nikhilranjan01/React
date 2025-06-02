import Appname from "./component/Appname";
import AddTodo from "./component/AddTodo";
import Todoitem1 from "./component/Todoitem1";
import Todoitem2 from "./component/todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />

      <div class ="item-contner">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
}

export default App;
