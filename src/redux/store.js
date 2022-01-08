import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reduers/auth.reducer";
import { firestoreReducer } from "./reduers/firestore.reducer";

const reducers = combineReducers({
  auth: authReducer,
  allBuckets: firestoreReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
