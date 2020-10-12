import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
