import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
    
export default function PrivateRoute() {
    const location = useLocation();
    const isLogged = useSelector(authSelectors.getIsLoggedIn);

    return isLogged? <Outlet/>: <Navigate to='/' state={{ from: location }} replace/>
}