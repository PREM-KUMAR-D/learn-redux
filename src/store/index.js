import {createStore} from "redux";

const counterReducer =(state,action)=>{

    if(action === 'INCREMENTBY2'){
        
        return {
            count : state.count+2,
        };
    }

    if(action === 'DECREMENTBY2'){
        return {
            count : state.count-2,
        };
    }


    return{
        count:0
    }

}

const store = createStore(counterReducer);



export default store;