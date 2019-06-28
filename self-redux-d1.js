/*
 * @Author: wangss 
 * @Date: 2019-06-20 09:35:04 
 * @Last Modified by: wangss
 * @Last Modified time: 2019-06-20 10:29:08
 */

 const createStore = (plan,initState)=>{
     let state = initState;
     let listeners = [];

     const subscribe = (listener)=>{
         listeners.push(listener);
     }

     const dispatch = (action)=>{
         state = reducer(state,action);
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
         dispatch,
         getState   
     }
 };


 let initState = {
     count: 0
 }


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

let store = createStore(reducer,initState);
 console.log(store.getState());

 store.subscribe(()=>{
     const state = store.getState();
     console.log(state.count);
 })

store.dispatch({
     type: 'INCREMENT'
 })

store.dispatch({
    type: 'DECREMENT'
})
