import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUserData } from '../Services/getUser';

export interface UserState {
    user: {
        id: string;
        email: string;
        document_id: number;
        full_name: string;
    }
}

const initialState: UserState = {
    user: {
        id: '',
        email: '',
        document_id: 0,
        full_name: ''
    }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    }
  },
})

export const { setUser } = userSlice.actions

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
    const userData = await fetchUserData();
    thunkAPI.dispatch(setUser(userData));
});

export default userSlice.reducer