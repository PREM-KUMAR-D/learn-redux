import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/index';

const Auth = () => {
  
  const isAuth = useSelector((state)=>state.auth.isAuthenticated);
  const dispatchFunc = useDispatch();

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    dispatchFunc(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
