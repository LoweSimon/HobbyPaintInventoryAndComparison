import { PaintContext } from "../context/PaintContext";
import { useContext } from "react";

export const usePaintsContext = () => {
    const context = useContext(PaintContext)

    if (!context) {
        throw Error('usePaintsContext must be used inside a PaintsContextProvider')
    }

    return context
}