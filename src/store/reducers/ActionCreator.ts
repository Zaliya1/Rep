import {request} from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IGameToGameTypeAdapter from "@/adapters/IGame-to-GameType-adapter";
import IGameInfoToGameInfoTypeAdapter from "@/adapters/IGameInfo-to-GameInfoType-Adapter";
import {QueryParamsType} from "@/types";

export const fetchGames = createAsyncThunk(
    'games/fetchAll',
    async(params: QueryParamsType, thunkAPI) => {
        try {
            const response = await request.get('games', {
                params: params
            });
            return IGameToGameTypeAdapter(response.data)
        } catch (e) {
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
            return thunkAPI.rejectWithValue("Не удалось загрузить игру")
        }
    }
)

