import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userPositions = [
  'UI/UX Designer',
  'Graphic Designer',
  'Web Developer',
  'App Developer',
];

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://randomuser.me/api/?results=4');
  const users = response.data.results.map((user, index) => ({
    name: `${user.name.first} ${user.name.last}`,
    photo: user.picture.large,
    position: userPositions[index],
  }));

  return users;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
