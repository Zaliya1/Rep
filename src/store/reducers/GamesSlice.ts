import {GameType} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGames} from "./ActionCreator";

interface GamesState {
    games: GameType[];
    isLoading: boolean;
    error: string;
}
const initialState: GamesState = {
    games: [],
    isLoading: false,
    error: '',
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGames.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchGames.fulfilled.type]: (state, action: PayloadAction<GameType[]>) => {
            state.isLoading = false;
            state.games = action.payload;
            state.error = '';
        },
        [fetchGames.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export default gamesSlice.reducer;
