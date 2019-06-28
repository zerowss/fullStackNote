/*
 * @Author: wangss 
 * @Date: 2019-06-20 09:35:04 
 * @Last Modified by: wangss
 * @Last Modified time: 2019-06-20 12:00:22
 */

const createStore = (plan, initState) => {
    let state = initState;
    let listeners = [];

    const subscribe = (listener) => {
        listeners.push(listener);
    }

    const dispatch = (action) => {
        state = reducer(state, action);
        for (let index = 0; index < listeners.length; index++) {
            const listener = listeners[index];
            listener();
        }
    }

    const getState = () => {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    }
};


let initState = {
    counter: {
        count: 0
    },
    info: {
        name: '',
        desc: ''
    }
}


const reducer_count = (state, action) => {
    console.log('state', state);

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}
const reducer_info = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {
                ...state,
                name: action.name
            }
        case 'DESC':
            return {
                ...state,
                desc: action.desc
            }
        default:
            return state;
    }
}
const combineReducers = (reducers) => {
    const reducerKeys = Object.keys(reducers);
    return function combination(state = {}, action) {
        /*生成的新的state*/
        const nextState = {}

        /*遍历执行所有的reducers，整合成为一个新的state*/
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i]
            const reducer = reducers[key]
            /*之前的 key 的 state*/
            const previousStateForKey = state[key]
            /*执行 分 reducer，获得新的state*/
            const nextStateForKey = reducer(previousStateForKey, action)

            nextState[key] = nextStateForKey
        }
        return nextState;
    }
}

const reducer = combineReducers({
    counter: reducer_count,
    info: reducer_info
})

let store = createStore(reducer, initState);
store.subscribe(() => {
    const state = store.getState();
    console.log(state.counter.count, state.info.name, state.info.desc);
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'NAME',
    name: '前端'
});
store.dispatch({
    type: 'DESC',
    desc: 'hello'
});
