import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type userType = {
	fullname: string;
	email: string;
	role: 'USER' | 'ADMIN';
	logged: boolean
};

var data = false;

if ( sessionStorage.getItem('loginStatus') == 'true'){
	data = true;
}

const initialState: userType | null = {
	fullname: 'Vu Ngoc Hai Dang',
	email: 'dangvnh3107.job@gmail.com',
	role: 'USER',
	logged: data,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state) => {
			state.logged = true;
		},
		logout: (state) => {
			state.logged = false;
			sessionStorage.removeItem('user')
		}
	},
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer;
