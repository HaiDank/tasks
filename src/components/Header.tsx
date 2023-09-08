import { LogoutOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { logout } from '../states/User/UserSlice';
import { useNavigate } from 'react-router-dom';

const ContentHeader: React.FC<{ title: string }> = ({ title }) => {
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	function enterLoading() {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			dispatch(logout());
			navigate('/login', { replace: true });
		}, 500);
	}

	return (
		<Card
			className='pl-8 pr-4 py-2 rounded-none shadow-sm relative'
			bodyStyle={{
				padding: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'start',
			}}
		>
			<span className='font-bold text-base'>{title}</span>
			<div className='flex justify-end flex-1'>
				<Button
					type='default'
					size='large'
					icon={<LogoutOutlined />}
					loading={isLoading}
					onClick={enterLoading}
					className='text-blue-600'
				/>
			</div>
		</Card>

		// 	<div className='element-shadow element-border flex justify-between items-center px-8 py-3'>
		// </div>
	);
};

export default ContentHeader;
