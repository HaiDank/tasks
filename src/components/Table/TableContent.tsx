import { Tag, Typography } from 'antd';
import React, { ReactNode } from 'react';

interface GenericTableContentType {
	content: string;
	icon?: ReactNode;
	underline?: boolean;
}

interface GenderTableContentType {
	content: string;
	bordered?: boolean;
}

const { Text } = Typography;

const GenericTableContent: React.FC<GenericTableContentType> = ({
	content,
	icon,
	underline,
}) => {
	return (
		<span className='flex gap-4 items-center'>
			{icon}
			<Text strong underline={underline}>
				{content}
			</Text>
		</span>
	);
};

const GenderTableContent: React.FC<GenderTableContentType> = ({
	content,
	bordered,
}) => {
	return (
		<>
			{content === 'Nam' ? (
				<Tag className='font-bold' color='blue' bordered={bordered}>
					{content}
				</Tag>
			) : (
				<Tag className='font-bold' color='volcano' bordered={bordered}>
					{content}
				</Tag>
			)}
		</>
	);
};

export default GenericTableContent;

export { GenderTableContent };
