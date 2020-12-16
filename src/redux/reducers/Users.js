const initState = {
  data: {},
};

const Users = (state = initState, action = {}) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_NAME':
      return {
        ...state,
        data: {
          ...state.data,
          name: action.payload,
        },
      };
    case 'SET_PHONE':
      return {
        ...state,
        data: {
          ...state.data,
          phone: action.payload,
        },
      };
    case 'SET_IMAGE':
      return {
        ...state,
        data: {
          ...state.data,
          photo: action.payload,
        },
      };
    case 'SET_BALANCE':
      return {
        ...state,
        data: {
          ...state.data,
          balance: action.payload,
        },
      };
      case 'SET_USERS_TRANSACTION':
        return {
          ...state,
          data: action.payload,
        };
    default:
      return state;
  }
};

export default Users;
