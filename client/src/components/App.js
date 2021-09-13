import { useEffect, useState } from "react"
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
// import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // return (
  //   <h1>Bonjour</h1>
  // )
  return (
    <>
      <NavBar setUser={setUser}/>
      <main>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </main>
    </>
  );
}
export default App;
