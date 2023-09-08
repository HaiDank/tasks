import React from 'react';
import ContentHeader from '../../components/Header';
import { Button, Card, ConfigProvider, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EmployeeListTable from './EmployeeListTable';

const EmployeeList: React.FC = () => {
	return (
		<>
			<ContentHeader title='Danh sách nhân viên' />
			<div className='content-wrapper'>
				<Card
					className='w-full rounded-lg shadow-md p-4'
					bodyStyle={{ padding: 0 }}
				>
					<div className='w-full flex items-center'>
						<div className='flex-grow flex justify-between items-center mr-3'>
							<input
								type='text'
								placeholder='Tìm kiếm'
								className='simple-search-box '
							/>
							<Select
								defaultValue='Toàn bộ phòng ban'
								size='large'
								bordered={false}
							/>
						</div>
						<div className='flex w-1/2 justify-between'>
							<ConfigProvider
								theme={{
									token: {
										colorPrimary: '#00b96b',
									},
								}}
							>
								<Button
									type='default'
									size='large'
									className='border-[#00b96b] text-[#00b96b] hover:shadow-md'
								>
									Làm mới
								</Button>
							</ConfigProvider>

							<Button
								type='primary'
								size='large'
								icon={<PlusOutlined />}
							>
								Thêm nhân viên
							</Button>
						</div>
					</div>
				</Card>
				<EmployeeListTable />
			</div>
		</>
	);
};

export default EmployeeList;
