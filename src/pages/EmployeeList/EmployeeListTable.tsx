import { Avatar, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { employeeDataList } from '../../dummyData';
import { Content } from 'antd/es/layout/layout';
import {
	BankOutlined,
	CalendarOutlined,
	EllipsisOutlined,
	EnvironmentOutlined,
	GlobalOutlined,
	MailOutlined,
	MenuOutlined,
	PhoneOutlined,
	UnorderedListOutlined,
	UserOutlined,
	WalletOutlined,
} from '@ant-design/icons';
import TableTitle from '../../components/Table/TableTitle';
import GenericTableContent, {
	GenderTableContent,
} from '../../components/Table/TableContent';
import DepartmentBadge from '../../components/DepartmentBadge';

interface EmployeeDataType {
	id: number;
	name: string;
	department: string;
	phoneNumber: string;
	gender: string;
	email: string;
	bank: string;
	birthday: string;
	address: string;
	nationality: string;
	bankAccount: string;
}

// <TableTitle title= icon=''/>
const columns: ColumnsType<EmployeeDataType> = [
	{
		key: 'ellipsis',
		render: () => {
			return <EllipsisOutlined style={{ fontSize: 20 }} />;
		},
		width: 50,
	},
	{
		dataIndex: 'online',
		key: 'online',
		render: (value) => {
			return (
				<>
					{!value ? (
						<Avatar size='small' icon={<UserOutlined />} />
					) : (
						<Avatar
							style={{ backgroundColor: '#0096FF' }}
							size='small'
							icon={<UserOutlined />}
						/>
					)}
				</>
			);
		},
		width: 60,
	},
	{
		title: () => <TableTitle title='ID' icon='' />,
		dataIndex: 'id',
		key: 'id',
		width: 100,
		render: (index) => {
			return <GenericTableContent content={index} />;
		},
	},
	{
		title: <TableTitle title='Tên Nhân Viên' icon={<MenuOutlined />} />,
		dataIndex: 'name',
		key: 'name',
		width: 300,
		render: (value) => {
			return (
				<GenericTableContent
					content={value}
					icon={
						<Avatar className='bg-[#683ab7] font-semibold'>
							{value.charAt(0)}
						</Avatar>
					}
				/>
			);
		},
	},
	{
		title: (
			<TableTitle title='Phòng Ban' icon={<UnorderedListOutlined />} />
		),
		dataIndex: 'department',
		key: 'department',
		width: 250,
		render: (value) => {
			return (
				<GenericTableContent
					underline={true}
					content={value}
					icon={<DepartmentBadge department={value} />}
				/>
			);
		},
	},
	{
		title: <TableTitle title='Số Điện Thoại' icon={<PhoneOutlined />} />,
		dataIndex: 'phoneNumber',
		key: 'phoneNumber',
		width: 180,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
	{
		title: (
			<TableTitle title='Giới Tính' icon={<UnorderedListOutlined />} />
		),
		dataIndex: 'gender',
		key: 'gender',
		width: 130,
		render: (value) => {
			return <GenderTableContent bordered={false} content={value} />;
		},
	},
	{
		title: <TableTitle title='Email' icon={<MailOutlined />} />,
		dataIndex: 'email',
		key: 'email',
		width: 200,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
	{
		title: <TableTitle title='Ngân hàng' icon={<BankOutlined />} />,
		dataIndex: 'bank',
		key: 'bank',
		width: 180,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
	{
		title: <TableTitle title='Ngày sinh' icon={<CalendarOutlined />} />,
		dataIndex: 'birthday',
		key: 'birthday',
		width: 200,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
	{
		title: <TableTitle title='Địa chỉ' icon={<EnvironmentOutlined />} />,
		dataIndex: 'address',
		key: 'address',
		width: 180,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
	{
		title: <TableTitle title='Quốc gia' icon={<GlobalOutlined />} />,
		dataIndex: 'nationality',
		key: 'nationality',
		width: 180,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
	{
		title: <TableTitle title='Tk Ngân hàng' icon={<WalletOutlined />} />,
		dataIndex: 'bankAccount',
		key: 'bankAccount',
		width: 200,
		render: (text) => {
			return <GenericTableContent content={text} />;
		},
	},
];

const dataSize = employeeDataList.length;

const EmployeeListTable: React.FC<{ data: EmployeeDataType[] }> = ({
	data,
}) => {
	return (
		<Content className='w-full pb-4 rounded-lg shadow-md mt-4 '>
			<Table
				columns={columns}
				dataSource={data}
				scroll={{ x: '100vw', y: 400 }}
				pagination={false}
			/>
			<span className='font-semibold m-4 mr-16 float-right'>
				1 - {dataSize} of {dataSize}
			</span>
		</Content>
	);
};

export default EmployeeListTable;
