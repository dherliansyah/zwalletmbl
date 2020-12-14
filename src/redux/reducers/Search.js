const initState = {
    users: [],
}

const Search = (state = initState, action = {}) => {
    switch (action.type) {
        case "SET_SEARCH":
            return{
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default Search