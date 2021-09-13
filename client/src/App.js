// import { useEffect, useState } from "react"
// import Login from "./Login"
// import './App.css';
import Header from '/Header'
import Main from '/Main'

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;


  return (
    <div className="App">
      Bonjour
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
