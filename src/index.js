import { createStore } from "redux";
import reducer from "./reducer";
import {inc, dec, rnd} from './actions'




const store = createStore(reducer);




document
.getElementById('inc')
.addEventListener('click', () => {
   store.dispatch(inc());
});

document
.getElementById('dec')
.addEventListener('click', () => {
   store.dispatch(dec());
});
document
.getElementById('rnd')
.addEventListener('click', () => {
   const payload = Math.floor(Math.random()*10)
   store.dispatch(rnd(payload));
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


