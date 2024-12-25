import  { useState, useEffect,useContext } from "react";
import React from "react";
import { setAuthToken } from "@/APIs/api";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        const storedToken = sessionStorage.getItem("accessToken");

        if (storedToken) {
            setAccessToken(storedToken);
            setAuthToken(storedToken); // Set token in API headers
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false); // Initialization complete
    }, []);

    const login = (user, accessToken) => {
        setUser(user);
        setAccessToken(accessToken);
        setAuthToken(accessToken);
        // storing in session
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('accessToken', accessToken);
    }

    const setAccess = (accessToken) => {
        setAccessToken(accessToken);
        setAuthToken(accessToken);
        sessionStorage.setItem('accessToken', accessToken);
    }

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setAuthToken(null);
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('accessToken');
    }

    return(
        <AuthContext.Provider value={{ user, accessToken, loading, setUser, login, logout, setAccess }}>
            {children}
        </AuthContext.Provider>
    )
}

