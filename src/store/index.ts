import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {popupReducer} from "./reducers/popupReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {inputReducer} from "./reducers/inputReducer";

const rootReducer = combineReducers({
    popup: popupReducer,
    blocks: inputReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;