import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './pages/HomePage/containers/TeamMember/usersSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
