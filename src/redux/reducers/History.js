const initState = {
    dataHistory: [],
  };
  
  const History = (state = initState, action = {}) => {
    switch (action.type) {
        case 'SET_USERS_TRANSACTION':
          return {
            ...state,
            dataHistory: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default History;
  