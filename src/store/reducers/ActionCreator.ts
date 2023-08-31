import {request} from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import IGameToGameTypeAdapter from "@/adapters/IGame-to-GameType-adapter";
import IGameInfoToGameInfoTypeAdapter from "@/adapters/IGames-to-GamesType-adapter";
import {QueryParamsType} from "@/types";
const controller = new AbortController();

export const fetchGames = createAsyncThunk(
    'games/fetchAll',
    async({params, isCancel}: {params: QueryParamsType, isCancel?: Boolean}, thunkAPI) => {
        if (isCancel) {
            // controller.abort();
            console.log('cancel')
        } else {
            try {
                const response = await request.get('games', {
                    params: params,
                    signal: controller.signal,
                    'axios-retry': {
                        retries: 3,
                        retryDelay: () => 3000,
                        onRetry: ((a) => {console.log(a)})
                    }
                });
                return IGameToGameTypeAdapter(response.data)
            } catch (e) {
                return thunkAPI.rejectWithValue("Не удалось загрузить игры")
            }
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

