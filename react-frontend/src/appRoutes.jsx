import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '@/App';
import AuthForms from '@/pages/authentication'; {/* Contains signup/login form page */}
import Dashboard from '@/pages/dashboard';
import Workout from '@/pages/Workouts';
import Community from '@/pages/community';
import Profile from '@/pages/profile';
import Settings from '@/pages/settings';

export default function AppRoutes() {   
    return(
        <Router>
            <Routes>
                {/* Main Routes */}
                <Route path="/" element={<App />} >
                    {/* Nested Routes */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/workouts" element={<Workout />} />
                    <Route path='/community' element={<Community />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/settings' element={<Settings />} />
                </Route>
                {/* Authentication Route */}
                <Route path="/auth" element={<AuthForms />} />
            </Routes>
        </Router>
    )
}