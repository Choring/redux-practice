let initialState = {
    count:0,
    id:"",
    pw:""
}

function reducer(state=initialState,action){
    console.log("action", action);
    if(action.type === "INCREMENT"){
        return {...state, count: state.count + action.payload.num};
    } else if(action.type === "DECREMENT"){
        return {...state, count: state.count - action.payload.num};
    } else if(action.type === "LOGIN") {
        return {...state, id:action.payload.id, pw:action.payload.pw}
    }

    return {...state};
};

export default reducer;