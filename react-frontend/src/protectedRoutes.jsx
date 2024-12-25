import { useAuth } from '@/context/AuthProvider';
import { Navigate } from 'react-router-dom';


const ProtectedRoutes = ({ children }) => {
    const { user, loading} = useAuth();

    if(loading) return <h1>Loading...</h1>;

    return user ? children : <Navigate to='/auth' />
};

export default ProtectedRoutes;