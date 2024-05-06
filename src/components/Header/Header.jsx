import { routes } from "../../helpers/routes";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = ({ openModal }) => {
  const [user] = useAuthState(auth);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={routes.HOME}>Logo</NavLink>
          </li>

          <li>
            <NavLink to={routes.HOME}>Home</NavLink>
          </li>

          <li>
            <NavLink to={routes.TEACHERS}>Teachers</NavLink>
          </li>

          {user && (
            <li>
              <NavLink to={routes.FAVORITES}>Favorites</NavLink>
            </li>
          )}
        </ul>
      </nav>

      <div>
        {!user ? (
          <>
            <button onClick={() => openModal("login")}>Log in</button>

            <button type="button" onClick={() => openModal("registration")}>
              Registration
            </button>
          </>
        ) : (
          <button type="button" onClick={() => signOut(auth)}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
