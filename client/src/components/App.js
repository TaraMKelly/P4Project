import { useEffect, useState } from "react"
import Login from "./Login"
// import { Switch, Route } from "react-router-dom";
import Main from './Main'
import NavBar from "./NavBar";


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

  return (
    <>
      <NavBar setUser={setUser}/>
      <Main/>
    </>
  );

  // return (
  //   <>
  //       {!user ? (
  //         <Switch>
  //           <Route path="/login">
  //             <Login setUser={setUser} />
  //           </Route>
  //         </Switch>
  //       ) : (
  //         <Switch>
  //           <Route path="/">
  //             <NavBar user={user} setUser={setUser} />
  //             <Main />
  //           </Route>
  //         </Switch>
  //       )}
  //   </>
  // );
}
export default App;
