import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import gamesReducer from "./reducers/GamesSlice";
import gameReducer from "./reducers/GameSlice";

const rootReducer = combineReducers({
    gamesReducer,
    gameReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
