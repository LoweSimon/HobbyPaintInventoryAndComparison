import { createContext, useReducer } from "react";

export const PaintContext = createContext()

export const paintsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAINTS':
            return {
                paints: action.payload
            }
        case 'CREATE_PAINT':
            return {
                paints: [action.payload, ...state.paints]
            }
        default:
            return state
    }
}

export const PaintContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(paintsReducer, {
        paints: null
    })

    return (
        <PaintContext.Provider value={{...state, dispatch}}>
            { children }
        </PaintContext.Provider>
    )
}