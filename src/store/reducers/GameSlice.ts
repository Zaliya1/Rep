import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGame} from "./ActionCreator";
import {GameInfoType} from "@/types";

interface GameState {
    game: any;
    isLoading: boolean;
    error: string;
}
const initialState: GameState = {
    game: {},
    isLoading: false,
    error: '',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGame(state, game) {
            state.game = game;
        },
    },
    extraReducers: {
        [fetchGame.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchGame.fulfilled.type]: (state, action: PayloadAction<GameInfoType>) => {
            state.isLoading = false;
            state.game = action.payload;
            state.error = '';
        },
        [fetchGame.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export default gameSlice.reducer;
