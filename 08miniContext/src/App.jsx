import "./App.css";
import Profile from "./components/Login";
import Login from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello World</h1>
      <Login />
      <div>
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
