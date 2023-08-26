import {request} from "../../api";
// import { IGame } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await request.get('games');
            // return response.data
            return response.data.map((item: any) => {
                return {
                    id: String(item.id),
                    title: item.title,
                    releaseDate: item.release_date,
                    publisher: item.publisher,
                    genre: item.genre,
                    img: item.thumbnail,
                }
            })
        } catch (e) {
           // TODO сделать обработку ошибок
            return thunkAPI.rejectWithValue("Не удалось загрузить игры")
        }
    }
)


