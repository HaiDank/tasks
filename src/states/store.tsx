import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice';
import sidenavReducer from './SidenavSlice'

const store = configureStore({
	reducer: {
		user: userReducer,
		sidenav: sidenavReducer,
	},
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch