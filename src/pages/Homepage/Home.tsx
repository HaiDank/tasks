import { Form, Input, Checkbox, Button, Card, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch} from '../../hooks/hooks';
import { login } from '../../states/User/UserSlice';

type InputType = {
	username?: string;
	password?: string;
	remember?: boolean;
};

const { Meta } = Card;
const { Title } = Typography;

const Home: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	function onFinish() {
		dispatch(login());
		navigate('/dashboard');
	}

	function onFinishFailed() {
		console.log('onfinishfailed');
	}

	return (
		<>
			<div className='flex h-full justify-center items-center gradient-bg-peachy'>
				<Card className='shadow-lg h-fit'>
					<Meta
						title={
							<Title level={1} className='text-center pb-5'>
								Login
							</Title>
						}
					/>
					<Form
						name='basic'
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 16 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete='off'
					>
						<Form.Item<InputType>
							label='Username'
							name='username'
							rules={[
								{
									required: true,
									message: 'Please enter your username!',
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item<InputType>
							label='Password'
							name='password'
							rules={[
								{
									required: true,
									message: 'Please enter your password!',
								},
							]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item<InputType>
							name='remember'
							valuePropName='checked'
							wrapperCol={{ offset: 2, span: 16 }}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 0 }}>
							<Button type='primary' htmlType='submit' block>
								Sign in
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</>
	);
};

export default Home;
