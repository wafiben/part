import "./App.css";
import Home from "./Components/Home";
function App() {
  const name = "hamza";
  const person = { profession: "instructor", age: 55 };
  const sayHello = () => {
    alert("hello");
  };
  return (
    <div className="App">
      <Home
        x={name}
        y="hellzzefjfomzhg"
        age={32}
        person={person}
        sayHello={sayHello}
      />
    </div>
  );
}

export default App;
