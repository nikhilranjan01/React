import ClockHeading from "./components/ClockHeading";
import ClockMoto from "./components/ClockMoto";
import ClockTime from "./components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockMoto></ClockMoto>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
