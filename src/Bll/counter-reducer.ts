
const initialState={
    value:0
}
type InitialStateType=typeof initialState

export const counterReducer=(state=initialState,action:any):InitialStateType=>{
    return state
}