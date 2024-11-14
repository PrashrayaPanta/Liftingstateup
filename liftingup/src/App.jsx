import "./App.css";
import Child from "./child";

function App() {
  function getData(data) {
    console.log(data);
  }

  return (
    <>
      <Child getData={getData} />
    </>
  );
}

export default App;
