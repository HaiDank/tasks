import {
	BorderlessTableOutlined,
	EllipsisOutlined,
	MailOutlined,
	PhoneOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Avatar, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { departmentListData } from '../../dummyData';
import TableTitle from '../../components/Table/TableTitle';
import GenericTableContent from '../../components/Table/TableContent';
import DepartmentBadge from '../../components/DepartmentBadge';

interface DepartmentDataType {
	id: number;
	deName: string;
	manager: string;
	noEmployee: number;
	managerEmail: string;
	phoneNumber: string;
}

const columns: ColumnsType<DepartmentDataType> = [
	{
		key: 'ellipsis',
		render: () => {
			return <EllipsisOutlined style={{ fontSize: 20 }} />;
		},
		width: 40,
	},
	{
		title: () => <TableTitle title='ID' icon='' />,
		dataIndex: 'id',
		key: 'id',
		width: 40,
		render: (index) => {
			return <GenericTableContent content={index} />;
		},
	},
	{
		title: () => (
			<TableTitle title='Tên Phòng Ban' icon={<TeamOutlined />} />
		),
		dataIndex: 'deName',
		key: 'deName',
		width: 180,
		render: (value) => {
			return (
				<GenericTableContent
					content={value}
					underline={true}
					icon={<DepartmentBadge department={value} />}
				/>
			);
		},
	},
	{
		title: () => <TableTitle title='Quản Lý' icon={<UserOutlined />} />,
		dataIndex: 'manager',
		key: 'manager',
		width: 180,
		render: (value) => {
			return (
				value && (
					<GenericTableContent
						content={value}
						icon={
							<Avatar className='bg-[#683ab7] font-semibold'>
								{value.charAt(0)}
							</Avatar>
						}
					/>
				)
			);
		},
	},
	{
		title: () => (
			<TableTitle
				title='Số Nhân Viên'
				icon={<BorderlessTableOutlined />}
			/>
		),
		dataIndex: 'noEmployee',
		key: 'noEmployee',
		width: 130,
		render: (value) => {
			return <GenericTableContent content={value} />;
		},
	},
	{
		title: () => (
			<TableTitle title='Email Quản Lý' icon={<MailOutlined />} />
		),
		dataIndex: 'managerEmail',
		key: 'managerEmail',
		width: 150,
		render: (value) => {
			return <GenericTableContent content={value} />;
		},
	},
	{
		title: () => (
			<TableTitle title='Số Điện Thoại' icon={<PhoneOutlined />} />
		),
		dataIndex: 'phoneNumber',
		key: 'phoneNumber',
		width: 150,
		render: (value) => {
			return <GenericTableContent content={value} />;
		},
	},
];

const dataSize = departmentListData.length;

const DepartmentListTable: React.FC = () => {
	return (
		<Content className='w-full pb-4 rounded-lg shadow-md mt-4 '>
			<Table
				columns={columns}
				dataSource={departmentListData}
				scroll={{ x: '100vw', y: 400 }}
				pagination={false}
			/>
			<span className='font-semibold m-4 mr-16 float-right'>
				1 - {dataSize} of {dataSize}
			</span>
		</Content>
	);
};

export default DepartmentListTable;
