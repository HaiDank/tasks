import { MenuProps } from 'antd';
import React from 'react';

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
): MenuItem {
    return {
        key, icon, children, label, type,
    } as MenuItem
};

export const menuItems: MenuProps['items'] = [
    getItem('Dashboard', '/dashboard', )
]
