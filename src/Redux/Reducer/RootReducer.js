import { combineReducers } from 'redux';
import drugStores from './DrugStore';

const RootReducer = combineReducers({
  drugStores,
});

export default RootReducer;
