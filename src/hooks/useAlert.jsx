import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function useAlert() {
    
    const navigate = useNavigate();

    const show = ({ type = "info", title = "Aviso", text = "Mensaje" }) => {
        Swal.fire({ icon: type, title, text, confirmButtonText: "Ok" }).then((response) => {
            if (response.isConfirmed) {
                navigate("/dashboard")
            }
        });
    };

    return { show };
}