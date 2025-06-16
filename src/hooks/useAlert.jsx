import React from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function useAlert() {
  const navigate = useNavigate();

  const show = async ({ type = "info", title = "Aviso", text = "Mensaje", redirect = null }) => {
    const response = await Swal.fire({ icon: type, title, text, confirmButtonText: "Ok" });
    if (response.isConfirmed && redirect) {
      navigate(redirect);
    }
  };

  return { show };
}
