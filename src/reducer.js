 const initialState = {
     value: 0
 }
 export default function counterReducer (state = initialState, action) {

    switch(action.type){
        case 'INCREMENT':
            return {...state, value:state.value +1};
        case 'DECREMENT':
            return {...state, value:(state.value === 0) ? 0 : state.value - 1};
        default:
            return state;
    }
 }