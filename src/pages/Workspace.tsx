import React from 'react';
import { useEffect } from 'react'
import SideNav from '../components/SideNav/SideNav';
import { useAppSelector } from '../hooks/hooks';

const Workspace: React.FC = () => {

    const userData = useAppSelector(state => state.user.logged);

    useEffect(()=>{
        
		if (typeof window !== 'undefined' && window.sessionStorage) {
			sessionStorage.setItem('loginStatus', JSON.stringify(userData));
		}
    },[])

	return (
		<>
			<div>
				<SideNav />
			</div>
		</>
	);
};

export default Workspace;
