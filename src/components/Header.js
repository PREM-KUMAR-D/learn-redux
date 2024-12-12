import classes from './Header.module.css';
import { authActions } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
  const dispatchFunc = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = (event)=>{
    dispatchFunc(authActions.logout());
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;
