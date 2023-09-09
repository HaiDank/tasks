import React, { ChangeEvent, useEffect, useState } from 'react';
import ContentHeader from '../../components/Header';
import { Button, Card, ConfigProvider, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EmployeeListTable from './EmployeeListTable';
import { employeeDataList } from '../../dummyData';

const EmployeeList: React.FC = () => {
	const [employeeList, setEmployeeList] = useState(employeeDataList);
	const [filteredEmployeeList, setFilteredEmployeeList] = useState(employeeDataList);
	const [filter, setFilter] = useState('all');
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		if (filter == 'all') {
			setEmployeeList(employeeDataList)
		} else {
			let data = employeeDataList.filter(
				(employee) => employee.department === filter
			);
			setEmployeeList(data);
			setFilteredEmployeeList(data);
		}
	}, [filter]);

	useEffect(() => {
		if (searchInput === ''){
			setEmployeeList(filteredEmployeeList)
		} else {
			let data = filteredEmployeeList.filter(
				(employee) => employee.name.toLowerCase().includes(searchInput)
				
			);
			setEmployeeList(data);	
		}
		
	}, [searchInput]);

	const onDepartmentSelect = (value: string) => {
		setFilter(value);
	};

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value)
		
	}

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
								onChange={(e) => onSearchChange(e)}
							/>
							<Select
								defaultValue='Toàn bộ phòng ban'
								options={[
									{
										value: 'all',
										label: 'Toàn bộ phòng ban',
									},
									{ value: 'Sales', label: 'Sales' },
									{
										value: 'Chăm sóc khách hàng',
										label: 'Chăm sóc khách hàng',
									},
								]}
								onChange={(value) => onDepartmentSelect(value)}
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
									onClick={() => window.location.reload()}
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
				<EmployeeListTable data={employeeList} />
			</div>
		</>
	);
};

export default EmployeeList;
