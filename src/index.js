import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "RND":
      return state + action.payload ;
      case "DEC":
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(reducer);

document
.getElementById('inc')
.addEventListener('click', () => {
   store.dispatch({type:'INC'});
});

document
.getElementById('dec')
.addEventListener('click', () => {
   store.dispatch({type:'DEC'});
});
document
.getElementById('rnd')
.addEventListener('click', () => {
   const payload = Math.floor(Math.random()*10)
   store.dispatch({type:'RND', payload});
});

const update =() => {
   document
   .getElementById('counter')
   .innerHTML = store.getState();
};
 store.subscribe(update);

//let state = reducer(undefined,{});

//state =  reducer(state, {type: 'INC'}); //Было до подключения Redux
//console.log(state);

//state =  reducer(state, {type: 'INC'});
//console.log(state);


