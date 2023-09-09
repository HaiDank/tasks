import React from 'react';
import ContentHeader from '../../components/Header';
import { Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DepartmentListTable from './DepartmentListTable';

const DepartmentList: React.FC = () => {
	return (
		<>
			<ContentHeader title='Danh sách phòng ban' />
			<div className='content-wrapper'>
				<Card
					className='w-full rounded-lg shadow-md p-4'
					bodyStyle={{ padding: 0 }}
				>
					<div className='flex justify-end'>
						<Button
							type='primary'
							size='large'
							icon={<PlusOutlined />}
						>
							Thêm phòng ban
						</Button>
					</div>
				</Card>
				<DepartmentListTable/>
			</div>
		</>
	);
};

export default DepartmentList;
