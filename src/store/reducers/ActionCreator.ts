import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = async (dispatch: AppDispatch) => {
//     try {
//         const response = axios.get<IUser>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//
//     }
// }
export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)