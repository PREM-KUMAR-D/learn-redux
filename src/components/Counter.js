import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state)=>state.count)

  const dispatchFunc = useDispatch();
  const show = useSelector((state)=>state.showCounter);

  const incHandler = ()=>{

    dispatchFunc({type: 'increase', amount: 5});
  }

  const decHandler =()=>{
    dispatchFunc({type:'decrease', amount: 5});
  }
  
  const toggleCounterHandler = () => {
    dispatchFunc({type:'toggleCounter'})
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
