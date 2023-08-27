import {request} from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IGameToGameTypeAdapter from "../../adapters/IGame-to-GameType-adapter";
import IGameInfoToGameInfoTypeAdapter from "../../adapters/IGames-to-GamesType-adapter";

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
    async(id: string, thunkAPI) => {
        try {
            const response = await request.get('game', {
                params: {
                    id
                }
            })
            return IGameInfoToGameInfoTypeAdapter(response.data)
        } catch (e) {
            // TODO сделать обработку ошибок
            return thunkAPI.rejectWithValue("Не удалось загрузить игру")
        }
    }
)

