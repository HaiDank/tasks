import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type sidenavType = {
	currentPage: string[];
	openedSubMenus?: string[];
};

var initialSidenavData: sidenavType = {
	currentPage: ['dashboard'],
	openedSubMenus: [],
};

var pageData = sessionStorage.getItem('currentPage');
var menuData = sessionStorage.getItem('openedSubMenus');

if (pageData !== null) {
	let pageDataArray = [];
	pageDataArray = JSON.parse(pageData);
	initialSidenavData.currentPage = pageDataArray;
}

if (menuData !== null) {
	let menuDataArray = [];
	menuDataArray = JSON.parse(menuData);
	initialSidenavData.openedSubMenus = menuDataArray;
}

const initialState: sidenavType = {
	currentPage: initialSidenavData.currentPage,
	openedSubMenus: initialSidenavData.openedSubMenus,
};

export const sidenavSlice = createSlice({
	name: 'sidenav',
	initialState,
	reducers: {
		savePage: (state, action: PayloadAction<string>) => {
			let dataArray = [action.payload];
			state.currentPage = dataArray;
			sessionStorage.setItem(
				'currentPage',
				JSON.stringify(dataArray)
			);
		},
		saveMenu: (state, action: PayloadAction<string[]>) => {
			state.openedSubMenus = action.payload;
			sessionStorage.setItem(
				'openedSubMenus',
				JSON.stringify(action.payload)
			);
		},
	},
});

export const { savePage, saveMenu } = sidenavSlice.actions;

export const selectSidenav = (state: RootState) => state.sidenav;

export default sidenavSlice.reducer;
