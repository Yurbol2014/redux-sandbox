import React from 'react';
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions  from './actions'




const store = createStore(reducer);
const {dispatch} = store;


const {inc,dec,rnd} = bindActionCreators(actions,dispatch);

//document
//.getElementById('inc')
//.addEventListener('click', inc);

//document
//.getElementById('dec')
//.addEventListener('click', dec); // ЭТО ПРИМЕР РАБОТЫ БЕЗ RECTA
//document
//.getElementById('rnd')
//.addEventListener('click', () => {
//   const payload = Math.floor(Math.random()*10);
//   rnd(payload);
//});

const update =() => {
   //document
   //.getElementById('counter')
   //.innerHTML = store.getState();// ЭТО ПРИМЕР РАБОТЫ БЕЗ RECTA
};
 store.subscribe(update);

//let state = reducer(undefined,{});

//state =  reducer(state, {type: 'INC'}); //Было до подключения Redux
//console.log(state);

//state =  reducer(state, {type: 'INC'});
//console.log(state);


