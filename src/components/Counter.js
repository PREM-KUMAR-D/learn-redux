import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state)=>state.count)

  const dispatchFunc = useDispatch();

  const incHandler = ()=>{

    dispatchFunc({type: 'INCREMENTBY2'});
  }

  const decHandler =()=>{
    dispatchFunc({type:'DECREMENTBY2'});
  }
  
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incHandler}>
          Increment
        </button>
        <button onClick={decHandler}>
          Decrement
        </button>
      </div>
    </main>
  );
};

export default Counter;
