import { Menu, MenuProps } from 'antd';
import React from 'react';
import { menuItems } from './SideNavItem';
import { useAppDispatch } from '../../hooks/hooks';
import { logout } from '../../states/User/UserSlice';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useNavigate } from 'react-router-dom';

const SideNav: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate()

	function onClick(item: MenuInfo) {
		if (item.key === 'signout') {
			dispatch(logout());
			sessionStorage.removeItem('user');
			navigate('/login', {replace: true})
		} else {
			navigate(item.key)
		}
	}

	const items: MenuProps['items'] = menuItems;

	return (

			<Menu
				className='w-full h-full'
				onClick={(item) => onClick(item)}
				defaultSelectedKeys={['/phong-ban']}
				defaultOpenKeys={['g1']}
				expandIcon={null}
				mode='inline'
				items={items}
			/>
		
	);
};

export default SideNav;
