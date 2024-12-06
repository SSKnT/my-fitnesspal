import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AuthForms from './pages/authentication'; {/* Contains signup/login form page */}
import Dashboard from './pages/dashboard';

export default function AppRoutes() {   
    return(
        <Router>
            <Routes>
                {/* Main Routes */}
                <Route path="/" element={<App />} >
                    {/* Nested Routes */}
                    <Route path="/dashboard" element={<Dashboard />} />

                </Route>

                {/* Authentication Routes */}
                <Route path="/auth" element={<AuthForms />} />
            </Routes>
        </Router>
    )
}