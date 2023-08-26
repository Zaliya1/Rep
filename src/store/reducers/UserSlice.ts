import {IGame} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreator";

interface UserState {
    games: IGame[];
    isLoading: boolean;
    error: string;
}
const initialState: UserState = {
    games: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
            state.isLoading = false;
            state.games = action.payload;
            state.error = '';
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export default userSlice.reducer;
