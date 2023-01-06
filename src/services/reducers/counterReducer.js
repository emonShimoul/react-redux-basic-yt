// 3. reducers - increment -> count => count + 1
//             - increment -> count => count - 1
//             - reset -> count => 0

import { INCREMENT, DECREMENT, RESET } from "../constants/counterConstants";

const initialCounter = { count: 0 }
const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};

export default counterReducer;