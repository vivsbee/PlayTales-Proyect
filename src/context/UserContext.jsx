import { createContext, useContext, useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers.jsx";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const { users } = useUsers();
    const [user, setUser] = useState(null);

    function login({ emailExt, passwordExt }) {
        console.log("Users disponibles:", users);

        if (!users || users.length === 0) {
            console.warn("Usuarios aún no cargados");
            return false;
        }

        const userFound = users.find((user) => user.email === emailExt && user.password === passwordExt);

        if (userFound) {
            localStorage.setItem('userLogged', JSON.stringify(userFound));
            setUser(userFound);
            return true;
        } else {
            return false;
        }
    }

    function logout() {
        localStorage.removeItem('userLogged');
        setUser(null)
        Swal.fire({
            icon: "success",
            title: "Goodbye, gamer! 🎮",
            text: "Your session has ended.",
            confirmButtonText: "Ok"
        }).then(() => {
           navigate("/");
        });
    }

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('userLogged'));
        setUser(stored);
    }, []
    );
    

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export function useAuth() {
    return useContext(UserContext);
}