// frist create reducer in react toolking
import {createSlice} from '@reduxjs/toolkit';
import {UsersData} from '../FakeData';

export const userSlice = createSlice({
    name:'users',
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {
            //write code for adding a user
        }
    }

})

export default userSlice.reducer;