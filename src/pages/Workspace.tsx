import React from 'react';
import SideNav from '../components/SideNav/SideNav';
import { useAppSelector } from '../hooks/hooks';
import { Outlet } from 'react-router-dom';
import { Avatar, Typography } from 'antd';

const { Text } = Typography;

const Workspace: React.FC = () => {
	const userData = useAppSelector((state) => state.user);

	return (
		<>
			<div className='h-full w-full relative'>
				<div className='md:w-[300px] flex flex-col h-full fixed z-40 overflow-hidden element-border bg-white'>
					<div className='px-6 pt-1 pb-3 flex justify-start items-center'>
						<Avatar
							shape='square'
							src='./src/assets/admin-avatar.png'
						/>
						<Text strong className='p-3'>
							{userData.fullname}
						</Text>
					</div>
					<div className='h-screen overflow-auto'>
						<SideNav />
					</div>
				</div>
				<div className='flex flex-col h-full md:ml-[300px]'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Workspace;
