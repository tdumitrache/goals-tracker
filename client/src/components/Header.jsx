import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/auth.slice";
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    console.log("hau")
    if (user) {
      dispatch(logout())
    }

    dispatch(reset());
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to={'/'}>GoalSetter</Link>
      </div>
      <ul>
        {!user ? (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser />
                Register
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
