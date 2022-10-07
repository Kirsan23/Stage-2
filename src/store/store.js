import { configureStore } from '@reduxjs/toolkit';
import usersDataReducer from '../store/slices/usersSlice'
import tabsReducer from '../store/slices/tabsSlice'

export default configureStore({
  reducer: {
    usersData: usersDataReducer,
    tabs: tabsReducer,
  },
});
