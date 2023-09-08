import { Menu, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { menuItems } from './SideNavItem';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { saveMenu, savePage } from '../../states/SidenavSlice';

const SideNav: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const sidenavData = useAppSelector((state) => state.sidenav);

	useEffect(() => {
		let currentPage = sidenavData.currentPage.toString();
		navigate(currentPage);
	}, []);

	function onClick(item: MenuInfo) {
		dispatch(savePage(item.key));
		navigate(item.key);
	}

	const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
		dispatch(saveMenu(keys));
	};

	const items: MenuProps['items'] = menuItems;

	return (
		<Menu
			className='w-full h-full z-40'
			onClick={(item) => onClick(item)}
			defaultSelectedKeys={sidenavData.currentPage}
			defaultOpenKeys={sidenavData.openedSubMenus}
			onOpenChange={onOpenChange}
			expandIcon={null}
			mode='inline'
			items={items}
		/>
	);
};

export default SideNav;
