import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

const RequireAuth: React.FC = () => {
	const loggedInStatus = useAppSelector((state) => state.user.logged);
	const location = useLocation();

	return loggedInStatus ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
};

export default RequireAuth;
