export type setStateType = {
    maxValue: number,
    minValue: number,
    value: number,
    mistake: string,
    maxValueSet: number,
    minValueSet: number,
    disableSet: boolean,
}

const initialState = {
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

type InitialStateType = typeof initialState
export const setReducer = (state = initialState, action: ReducerType): InitialStateType => {
    switch (action.type) {
        case 'RESET':
            return {
                ...state,
                mistake: String(action.minValue),
                value: action.minValue
            }
        case 'INC':
            if (action.value < action.maxValue) {
                // @ts-ignore
                action.value = action.value + 1
            }
            return {
                ...state,
                mistake: String(action.value),
                value: action.value
            }
        case 'SET-BUTTON':
            return {
                ...state,
                mistake: String(action.minValueSet),
                minValue: action.minValueSet,
                maxValue: action.maxValueSet,
                value: action.minValueSet,
                disableSet: true
            }
        case 'MAX-VALUE-SET-SET':
            if (Number(action.value) <= action.minValueSet) {
                return {
                    ...state,
                    mistake: 'Incorrect value',
                    disableSet: true,
                    maxValueSet: Number(action.value)
                }
            } else {
                return {
                    ...state,
                    maxValueSet: Number(action.value),
                    disableSet: false,
                    mistake: 'enter values and press \'set\''
                }
            }
        case 'MIN-VALUE-SET-SET':
            if (Number(action.value) < 0) {
                return {
                    ...state,
                    mistake: 'Incorrect value',
                    disableSet: true,
                    minValueSet: Number(action.value)
                }
            } else if
            (Number(action.value) >= action.maxValueSet) {
                return {
                    ...state,
                    mistake: 'Incorrect value',
                    disableSet: true,
                    minValueSet: Number(action.value)
                }
            } else {
                return {
                    ...state,
                    minValueSet: Number(action.value),
                    disableSet: false,
                    mistake: 'enter values and press \'set\''
                }
            }
        default:
            return state
    }
}
export type MaxValueSetSetActionType = ReturnType<typeof MaxValueSetSetAC>
export const MaxValueSetSetAC = (value: string, minValueSet: number) => {
    return {type: 'MAX-VALUE-SET-SET', value, minValueSet} as const
}
export type MinValueSetSetActionType = ReturnType<typeof MinValueSetSetAC>
export const MinValueSetSetAC = (value: string, maxValueSet: number) => {
    return {type: 'MIN-VALUE-SET-SET', value, maxValueSet} as const
}
export type SetButtonActionType = ReturnType<typeof setButtonAC>
export const setButtonAC = (maxValueSet: number, minValueSet: number) => {
    return {type: 'SET-BUTTON', maxValueSet, minValueSet} as const
}

export type ResetActionType = ReturnType<typeof resetAC>
export const resetAC = (minValue: number)=> {
    return {type: 'RESET', minValue} as const
}
// export type IncActionType = {
//     type: 'INC',
//     value: number,
//     maxValue: number
// }
// export const incAC = (value: number, maxValue: number): IncActionType => {
//     return {type: 'INC', value, maxValue}
// }
export type IncActionType = ReturnType<typeof incAC>
export const incAC = (value: number, maxValue: number)=> {
    return {type: 'INC', value, maxValue} as const
}
