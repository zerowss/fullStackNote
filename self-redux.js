/*
 * @Author: wangss 
 * @Date: 2019-06-20 09:35:04 
 * @Last Modified by: wangss
 * @Last Modified time: 2019-06-20 10:11:01
 */

 const createStore = (initState)=>{
     let state = initState;
     let listeners = [];

     const subscribe = (listener)=>{
         listeners.push(listener);
     }

     const changeState = (newState)=>{
         state = newState;
         for (let index = 0; index < listeners.length; index++) {
             const listener = listeners[index];
             listener();
         } 
     }

     const getState = ()=>{
         return state;
     }

     return {
         subscribe,
         changeState,
         getState   
     }
 };


 let initState = {
    counter:{
        count: 0
    },
    info:{
        name: '',
        desc: ''
    }
 }

 let store = createStore(initState);
 console.log(store.getState());

store.subscribe(()=>{
     const state = store.getState();
     console.log(`${state.info.name}:${state.info.desc}`);
 })

 store.subscribe(()=>{
     const state = store.getState();
     console.log(state.counter.count);
 })

 store.changeState({
     ...store.getState(),
     info: {
         name: 'wss',
         desc: 'hello world'
     }
 })

store.changeState({
    ...store.getState(),
    counter: {
        count: 1
    }
})
