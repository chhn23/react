import "./App.css";
import Card from "./components/card";

function App() {
  const newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400  text-black p-4 rounded mb-4">
        Tailwind test
      </h1>
      <Card username="Deepak" newArr={newArr} paraText="Know Me" />
      <Card />
    </>
  );
}

export default App;
