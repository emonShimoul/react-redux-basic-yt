import { INCREMENT } from "../constants/counterConstants"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}