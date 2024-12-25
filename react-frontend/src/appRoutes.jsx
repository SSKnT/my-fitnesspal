import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '@/App';
import AuthForms from '@/pages/authentication'; {/* Contains signup/login form page */}
import Dashboard from '@/pages/dashboard';
import Workout from '@/pages/Workouts';
import Community from '@/pages/community';
import Profile from '@/pages/profile';
import Settings from '@/pages/settings';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoutes from './protectedRoutes';

export default function AppRoutes() {   
    return(
        <AuthProvider>        
            <Router>
                <Routes>    
                    {/* Authentication Route */}
                    <Route path="/auth" element={<AuthForms />} />
                    {/* Main Routes */}
                    <Route path="/" element={
                            <ProtectedRoutes>
                              <App />
                            </ProtectedRoutes>
                        } >
                        {/* Nested Routes */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/workouts" element={<Workout />} />
                        <Route path='/community' element={<Community />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/settings' element={<Settings />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}