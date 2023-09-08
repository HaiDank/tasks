import React from 'react';
import ContentHeader from '../../components/Header';

const Dashboard: React.FC = () => {
	return (
		<main>
			<ContentHeader title='Dashboard' />
			<div className='content-wrapper'>Dashboard</div>
		</main>
	);
};

export default Dashboard;
