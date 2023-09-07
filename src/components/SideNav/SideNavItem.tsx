import { MenuProps} from 'antd';
import {
	ClockCircleOutlined,
	DollarOutlined,
	ExceptionOutlined,
	HomeOutlined,
	MailOutlined,
	SolutionOutlined,
	TeamOutlined,
	UserAddOutlined,
	UsergroupAddOutlined,
} from '@ant-design/icons';
import React from 'react';

export type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const GroupTitle: React.FC<{title: string}> = ({title}) => {
	return(
		<span className='font-bold '>{title}</span>
	)
}

const OptionTitle: React.FC<{title: string}> = ({title}) => {
	return(
		<span className='font-semibold text-gray-600 '>{title}</span>
	)
}
export const menuItems: MenuProps['items'] = [
	getItem(<OptionTitle title='Dashboard'/>, '/dashboard', <HomeOutlined />),
	getItem(<GroupTitle title='NHÂN VIÊN'/>, 'g1', null, [
		getItem(<OptionTitle title='Phòng Ban'/>, '/phong-ban', <TeamOutlined />),
		getItem(<OptionTitle title='Phòng Ban Của Tôi'/>, '/phong-ban-cua-toi', <TeamOutlined />),
		getItem(<OptionTitle title='Toàn Bộ Nhân Viên'/>, '/toan-bo-nhan-vien',<TeamOutlined />),
		getItem(<OptionTitle title='Tạo Mới Nhân Viên'/>, '/tao-moi-nhan-vien', <UserAddOutlined />),
	]),
	getItem(<GroupTitle title='TĂNG CA'/>, 'g2', null, [
		getItem(<OptionTitle title='Đơn Tăng Ca Nhân Viên'/>, 'don-tang-ca-nhan-vien', <ClockCircleOutlined />),
		getItem(<OptionTitle title='Đơn Tăng Ca Của Tôi'/>, 'don-tang-ca-cua-toi', <ClockCircleOutlined />),
	]),
	getItem(<GroupTitle title='NGHỈ PHÉP'/>, 'g3', null, [
		getItem(<OptionTitle title='Đơn Nghỉ Phép Nhân Viên'/>, 'don-nghi-phep-nhan-vien', <ExceptionOutlined />),
		getItem(<OptionTitle title='Đơn Nghỉ Phép Của Tôi'/>, 'don-nghi-phep-cua-toi', <ExceptionOutlined />),
	]),
	getItem(<GroupTitle title='ĐƠN KHÁC'/>, 'g4', null, [
		getItem(<OptionTitle title='Danh Sách Đơn Khác'/>, 'danh-sach-don-khac', <MailOutlined />),
		getItem(<OptionTitle title='Đơn Khác Của Tôi'/>, 'don-khac-cua-toi', <MailOutlined />),
	]),
	getItem(<GroupTitle title='QUẢN LÍ LƯƠNG'/>, 'g5', null, [
		getItem(<OptionTitle title='Lương Nhân Viên'/>, 'luong-nhan-vien', <DollarOutlined />),
		getItem(<OptionTitle title='Lương Của Tôi'/>, 'luong-cua-toi', <DollarOutlined />),
	]),
	getItem(<GroupTitle title='HỢP ĐỒNG'/>, 'g6', null, [
		getItem(<OptionTitle title='Hợp Đồng Nhân Viên'/>, 'hop-dong-nhan-vien', <SolutionOutlined />),
		getItem(<OptionTitle title='Hợp Đồng Của Tôi'/>, 'hop-dong-cua-toi', <SolutionOutlined />),
	]),
	getItem(<GroupTitle title='TUYỂN DỤNG'/>, 'g7', null, [
		getItem(<OptionTitle title='Danh Sách Ứng Tuyển'/>, 'danh-sach-ung-tuyen', <UsergroupAddOutlined />),
	]),
];
