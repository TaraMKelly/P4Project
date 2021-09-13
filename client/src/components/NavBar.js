// import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <Logo>Alcoholics not-Anonymous</Logo>
      {/* <div>
        <Link to="/">Home</Link>
      </div> */}
      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </header>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default NavBar;