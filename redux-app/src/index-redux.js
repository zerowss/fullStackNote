import { combineReducers } from 'redux';

let data = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            const a = {
                title: action.title,
                singer: action.singer,
                if_selected: false,
                if_like: false,
                if_delete: false,
                id: +new Date()
            };
            return [...state, a];
        case 'REMOVE':
            return state.filter(v => v.id !== action.id);
        case 'REMOVE_SELECTED':
            return state.filter(v => !v.if_selected);
        case 'LIKE_SELECTED':
            return state.map(item => {
                if (item.if_selected) {
                    item.if_like = true;
                }
                return item;
            });
        case 'CANCEL_SELECTED':
            return state.map(item => {
                if (item.if_selected) {
                    item.if_like = false
                }
                return item;
            });
        case 'CHECK_ALL':
            return state.map(item => {
                item.if_selected = action.check
                return item;
            });
        case 'CHECK_ONE':
            state.forEach(item => {
                if (item.id === action.id) {
                    item[action.name] = action.check;
                }
            })
            return [...state];
        default:
            return state;
    }

}

export default combineReducers({
    data
});
