
import { createStore,combineReducers, applyMiddleware } from 'redux';
import{ myReducer} from './reducers/myReducer';
import reduxThunk from 'redux-thunk';


const rootReducer=combineReducers({
  user:myReducer})

const store = createStore(rootReducer,applyMiddleware(reduxThunk));

export default store;