import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const counter = useSelector((state)=>state.counter.count)

  const dispatchFunc = useDispatch();
  const show = useSelector((state)=>state.counter.showCounter);

  const incHandler = ()=>{

    dispatchFunc(counterActions.increase(10));
  }

  const decHandler =()=>{
    dispatchFunc(counterActions.decrement());
  }
  
  const toggleCounterHandler = () => {
    dispatchFunc(counterActions.toggleCounter)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}

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
