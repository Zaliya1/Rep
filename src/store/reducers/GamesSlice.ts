import {GameType, SelectType} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGames} from "./ActionCreator";
import {genres, platforms, sorting} from "@/store/consts";

export interface GamesState {
    games: GameType[];
    isLoading: boolean;
    error: string;
    genres: SelectType[],
    platforms: SelectType[],
    sorting: SelectType[],
}
const initialState: GamesState = {
    games: [],
    isLoading: false,
    error: '',
    genres: genres,
    platforms: platforms,
    sorting: sorting
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
