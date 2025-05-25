import Appname from "./component/Appname";
import AddTodo from "./component/AddTodo";
import Todoitem1 from "./component/Todoitem1";
import Todoitem2 from "./component/todoitem2";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      <Todoitem1 />
      <Todoitem2 />
    </center>
  );
}

export default App;
