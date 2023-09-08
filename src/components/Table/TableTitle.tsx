import React, { ReactNode } from "react";

interface TableTitlePropsType {
	title: string;
	icon: ReactNode | '';
}

const TableTitle: React.FC<TableTitlePropsType> = ({ title, icon }) => {
	return (
		<span className='font-semibold text-gray-500 flex gap-2'>
			{icon} {title}
		</span>
	);
};

export default TableTitle