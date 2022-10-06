import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './pages/HomePage/containers/TeamMember/usersSlice'
import imagesReducer from './pages/HomePage/containers/OurWork/ourWorkSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    images: imagesReducer,
  },
});
