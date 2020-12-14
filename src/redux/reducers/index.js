import {combineReducers} from 'redux';
import Auth from './Auth';
import Topup from './Topup';
import Users from './Users';
// import History from './History';
import Search from './Search';
// import ChangePassword from './ChangePassword';
// import ChangePin from './ChangePin';
// import AddPhone from './AddPhone';
// import ChangeName from './ChangeName';
// import Receiver from './Receiver';

const reducers = combineReducers({
  Auth,
  Users,
  Topup,
  // History,
  Search,
  // ChangePassword,
  // ChangePin,
  // AddPhone,
  // ChangeName,
  // Receiver,
});

export default reducers;
