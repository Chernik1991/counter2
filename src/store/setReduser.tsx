export type setStateType = {
    maxValue: number,
    minValue: number,
    value: number,
    mistake: string,
    maxValueSet: number,
    minValueSet: number,
    disableSet: boolean,
}

const initialState: setStateType = {
    maxValue: 1,
    minValue: 0,
    value: 0,
    mistake: '0',
    maxValueSet: 1,
    minValueSet: 0,
    disableSet: false
}
type ReducerType =
    ResetActionType
    | IncActionType
    | SetButtonActionType
    | MaxValueSetSetActionType
    | MinValueSetSetActionType
export const setReducer = (state: setStateType = initialState, action: ReducerType): setStateType => {
    switch (action.type) {
        case 'RESET':
            return {...state, mistake: String(action.minValue), value: action.minValue}
        case 'INC':
            if (action.value < action.maxValue) {
                action.value = action.value + 1
            }
            return {...state, mistake: String(action.value), value: action.value}
        case 'SET-BUTTON':
            return {
                ...state,
                mistake: String(action.minValueSet),
                minValue: action.minValueSet,
                maxValue: action.maxValueSet,
                value: action.minValueSet,
                disableSet:true
            }
        case 'MAX-VALUE-SET-SET':
            if (Number(action.value) <= action.minValueSet) {
                return {...state, mistake: 'Incorrect value', disableSet: true,maxValueSet: Number(action.value)}}
            else {return {...state, maxValueSet: Number(action.value),disableSet: false, mistake: 'enter values and press \'set\''}}
        case 'MIN-VALUE-SET-SET':
            if (Number(action.value) < 0) {
                return {...state, mistake: 'Incorrect value', disableSet: true,minValueSet: Number(action.value)}
            } else if
            (Number(action.value) >= action.maxValueSet) {
                return {...state, mistake: 'Incorrect value', disableSet: true, minValueSet: Number(action.value)}
            } else {
                return {...state, minValueSet: Number(action.value), disableSet: false, mistake: 'enter values and press \'set\''}
            }
        default:
            return state
    }
}
export type MaxValueSetSetActionType = {
    type: 'MAX-VALUE-SET-SET',
    value: string,
    minValueSet: number
}
export const MaxValueSetSetAC = (value: string,minValueSet: number): MaxValueSetSetActionType => {
    return {
        type: 'MAX-VALUE-SET-SET', value,minValueSet
    }
}
export type MinValueSetSetActionType = {
    type: 'MIN-VALUE-SET-SET',
    value: string,
    maxValueSet: number
}
export const MinValueSetSetAC = (value: string, maxValueSet: number): MinValueSetSetActionType => {
    return {
        type: 'MIN-VALUE-SET-SET', value, maxValueSet
    }
}
export type SetButtonActionType = {
    type: 'SET-BUTTON',
    maxValueSet: number,
    minValueSet: number,
}
export const setButtonAC = (maxValueSet: number, minValueSet: number): SetButtonActionType => {
    return {type: 'SET-BUTTON', maxValueSet, minValueSet}
}
export type ResetActionType = {
    type: 'RESET',
    minValue: number
}
export const resetAC = (minValue: number): ResetActionType => {
    return {type: 'RESET', minValue}
}
export type IncActionType = {
    type: 'INC',
    value: number,
    maxValue: number
}
export const incAC = (value: number, maxValue: number): IncActionType => {
    return {type: 'INC', value, maxValue}
}

