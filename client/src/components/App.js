import { useEffect, useState } from "react"
import Login from "./Login"
import Main from './Main'
import NavBar from "./NavBar";
import 'semantic-ui-css/semantic.min.css'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
}
export default App;
