import { routes } from "../../helpers/routes";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useModal } from "../../hooks/useModal";
import { types } from "../../helpers/modalTypes";

const Header = () => {
  const [user] = useAuthState(auth);
  const { openModal } = useModal();

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
            <button onClick={() => openModal(types.SIGN_IN)}>Log in</button>

            <button type="button" onClick={() => openModal(types.SIGN_UP)}>
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
