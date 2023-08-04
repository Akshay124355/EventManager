import { createStore } from "redux";
import rootReducer from "./rootReducer";
// import eventReducer from "./reducers/eventReducer";

const store = createStore(
    rootReducer);

export default store;