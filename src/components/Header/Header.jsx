import { routes } from "../../helpers/routes";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "/firebaseApp";
import { useModal } from "../../hooks/useModal";
import { LoginModal, RegistrationModal } from "../Modals";
import { useAuth } from "../../hooks/useAuth";
import HomeLogo from "../ui/HomeLogo/HomeLogo";

// import sprite from "../../assets/images/sprite.svg";

const Header = () => {
  const { user } = useAuth();
  const { openModal, closeModal } = useModal();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <HomeLogo to={routes.HOME} />
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
            <button onClick={() => openModal(<LoginModal onClose={closeModal} />)}>Log in</button>

            <button onClick={() => openModal(<RegistrationModal onClose={closeModal} />)}>
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
