import React from 'react';
import { useEffect } from 'react';
import SideNav from '../components/SideNav/SideNav';
import { useAppSelector } from '../hooks/hooks';
import { Outlet } from 'react-router-dom';
import { Avatar, Typography } from 'antd';

const {Text} = Typography

const Workspace: React.FC = () => {
	const userData = useAppSelector((state) => state.user);

	useEffect(() => {
		if (typeof window !== 'undefined' && window.sessionStorage) {
			sessionStorage.setItem('loginStatus', JSON.stringify(userData.logged));
		}
	}, []);

	return (
		<>
			<div className='flex h-full w-full relative	'>
				
				<div className='md:w-[300px] flex flex-col h-full fixed overflow-hidden shadow-md element-border'>
					<div className='px-6 pt-1 pb-3 flex justify-start items-center'>
						<Avatar
							shape='square'
							src='./src/assets/admin-avatar.png'
						/>
						<Text strong className='p-3'>{userData.fullname}</Text>
					</div>
					<div className='h-screen overflow-y-scroll'>
						<SideNav />
					</div>
				</div>
				<div className='flex-1 md:ml-[300px]'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Workspace;
