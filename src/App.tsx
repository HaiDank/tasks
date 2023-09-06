import './App.css';
import { useEffect } from 'react';
import Home from './pages/Homepage/Home';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './pages/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import Workspace from './pages/Workspace';
import { useAppDispatch } from './hooks/hooks';
import { login } from './states/User/UserSlice';

const App: React.FC = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		let user = sessionStorage.getItem('loginStatus');
		if (user == 'true') {
			dispatch(login())
		}
	}, []);

	return (
		<>
			<Routes>
				<Route path='/login' element={<Home />} />
				<Route element={<RequireAuth />}>
					<Route path='/' element={<Workspace />}>
						<Route path='/dashboard' element={<Dashboard />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
