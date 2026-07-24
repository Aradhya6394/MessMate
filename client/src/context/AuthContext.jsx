import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem("token")
    );

    useEffect(() => {

        if (token) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsAuthenticated(false);
            setUser(null);
        }

    }, [token]);

    const login = (jwtToken, loggedInUser) => {
        setToken(jwtToken);
        setUser(loggedInUser);

        localStorage.setItem("user", JSON.stringify(loggedInUser));
    };

    const logout = () => {
        setToken("");
        setUser(null);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}