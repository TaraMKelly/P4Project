import { useEffect, useState } from "react"
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
// import Home from "./Home";
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

    // if (!user) return <Login onLogin={setUser} />;

    // return (
    //   <h1>Bonjour</h1>
    // )

  return (
    <>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <h1>Bonjour</h1>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/login">
              <Login onLogin={setUser} />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}
export default App;
