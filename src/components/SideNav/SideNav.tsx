import { Menu, MenuProps } from 'antd';
import React from 'react';
import { menuItems } from './SideNavItem';

const SideNav: React.FC = () => {

	function onClick() {
		console.log('Menu clicked');
	}

	const items: MenuProps['items'] = menuItems;

	return (
		<div>
			<Menu
				onClick={onClick}
				style={{ width: 256 }}
				defaultSelectedKeys={['/dashboard']}
				mode='inline'
				items={items}
			/>
		</div>
	);
};

export default SideNav;
