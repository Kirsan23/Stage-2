import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userPositions = [
  'UI/UX Designer',
  'Graphic Designer',
  'Web Developer',
  'App Developer',
];

const initialState = {
  usersData: [],
  status: 'idle',
  error: null,
};

export const fetchUsersData = createAsyncThunk('usersData/fetchUsersData', async () => {
  const response = await axios.get('https://randomuser.me/api/?results=4');
  const usersData = response.data.results.map((user, index) => ({
    name: `${user.name.first} ${user.name.last}`,
    photo: user.picture.large,
    position: userPositions[index],
  }));

  return usersData;
});

const usersSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsersData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.usersData = state.usersData.concat(action.payload);
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
