const initState = {
    data: [],
}

const Topup = (state = initState, action = {}) => {
    switch (action.type) {
        case "SET_TOPUP":
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default Topup