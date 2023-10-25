import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { OnChecking, onLogin, onLogout } from "../store/authSlice";
import { dbApi } from "../helpers/dbApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useAuthStore = () => {

    const navigate = useNavigate();

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startRegister = async(name, email, password) => {
        dispatch( OnChecking() );

        try {
            const { data } = await dbApi.post("/auth/register", {
                name: name,
                email: email,
                password: password
            })

            // localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin(data) );
            Swal.fire({
              icon: 'success',
              title: 'Welcome',
              text: user.name,
              timer: 1500
            })

            setTimeout( () => {
                navigate('/main', { replace: true });

              }, 1600 );


            
        } catch (error) {
            console.log(error.response.data);
            dispatch( onLogout( error.response.data ) );
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
              })
        }

    }
    

    return {
        // propiedades
        status,
        user,

        //funciones
        startRegister
    }

}