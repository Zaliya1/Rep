import {request} from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IGameToGameTypeAdapter from "../../adapters/IGame-to-GameType-adapter";

export const fetchGames = createAsyncThunk(
    'games/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await request.get('games');
            return IGameToGameTypeAdapter(response.data)
        } catch (e) {
           // TODO сделать обработку ошибок
            return thunkAPI.rejectWithValue("Не удалось загрузить игры")
        }
    }
)

export const fetchGame = createAsyncThunk(
    'games/fetchOne',
    async(_, thunkAPI) => {
        try {
            const response = await request.get('games/id=405');
            return IGameToGameTypeAdapter(response.data)
        } catch (e) {
            // TODO сделать обработку ошибок
            return thunkAPI.rejectWithValue("Не удалось загрузить игру")
        }
    }
)
