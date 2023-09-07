import React from 'react';


const Header: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div className='element-shadow element-border flex items-center px-8 py-3'>
			<span className='font-bold text-base'>{title}</span>
		</div>
	);
};

export default Header;
