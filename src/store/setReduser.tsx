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
    | DisableButtonActionType
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
            return {...state, mistake: String(action.minValueSet), minValue: action.minValueSet, maxValue: action.maxValueSet, value:action.minValueSet}
        case 'DISABLE-BUTTON':
            console.log('wwww')
            if (action.minValueSet < 0) {
                return {...state, mistake: 'Incorrect value', disableSet: true}
            } else if (action.maxValueSet <= action.minValueSet) {
                return {...state, mistake: 'Incorrect value', disableSet: true}
            } else if ((action.minValueSet === action.minValue) && (action.maxValueSet === action.maxValue)) {
                return {...state, mistake: 'Incorrect value', disableSet: true}
            } else {
                return {
                    ...state,
                    mistake: 'enter values and press \'set\'',
                    value: action.minValueSet,
                    disableSet: false
                }
            }
        case 'MAX-VALUE-SET-SET':

            return {...state, maxValueSet: Number(action.value)}
        case 'MIN-VALUE-SET-SET':
            if (action.minValueSet < 0) {
                return {...state, mistake: 'Incorrect value', disableSet: true}}
            else {return {...state, minValueSet: Number(action.value)}}
        default:
            return state
    }
}
export type DisableButtonActionType = {
    type: 'DISABLE-BUTTON',
    maxValueSet: number,
    minValueSet: number,
    maxValue: number,
    minValue: number
}
export const DisableButtonAC = (maxValueSet: number,
                                minValueSet: number,
                                maxValue: number,
                                minValue: number): DisableButtonActionType => {
    return {
        type: 'DISABLE-BUTTON', maxValueSet, minValueSet, maxValue, minValue
    }
}
export type MaxValueSetSetActionType = {
    type: 'MAX-VALUE-SET-SET',
    value: string,
}
export const MaxValueSetSetAC = (value: string): MaxValueSetSetActionType => {
    return {
        type: 'MAX-VALUE-SET-SET', value
    }
}
export type MinValueSetSetActionType = {
    type: 'MIN-VALUE-SET-SET',
    value: string,
    minValueSet:number
}
export const MinValueSetSetAC = (value: string,minValueSet:number): MinValueSetSetActionType => {
    return {
        type: 'MIN-VALUE-SET-SET', value,minValueSet
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

