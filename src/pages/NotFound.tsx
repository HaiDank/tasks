import React from 'react';
import ContentHeader from '../components/Header';

const NotFound: React.FC = () => {
	return (
		<>
            <ContentHeader title='Page not found' />
			<div className='content-wrapper'>NotFound</div>
		</>
	);
};

export default NotFound;
