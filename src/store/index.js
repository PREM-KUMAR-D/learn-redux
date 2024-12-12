import {createStore} from "redux";

const counterReducer =(state,action)=>{

    if(action.type === 'increase'  ){
        
        return {
            count : state.count+ action.amount,
            showCounter: state.showCounter,
        };
    }

    if(action.type === 'decrease'){
        return {
            count : state.count-action.amount,
            showCounter: state.showCounter,
        };
    }

    if(action.type === 'toggleCounter'){
        return{
            count: state.count,
            showCounter: !state.showCounter,
        }
    }


    return{
        count:0,
        showCounter: false,
    }

}

const store = createStore(counterReducer);



export default store;