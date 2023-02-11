import {useEffect} from 'react';
import {useForm} from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm,username, email, password} = useForm({
            username: '',
            email: '',
            password: '',
    });

    return(
       <>
            <h1>Formulario Customhook Simple</h1>
            <hr />

            <input 
            type="text" 
            classNameName = "form-control"
            placeholder = "Username"
            name = "username"
            value= { username }
            onChange = { onInputChange }
            />

            <input 
            type="email" 
            classNameName = "form-control mt-2"
            placeholder = "correo@correo.com"
            name = "email"
            value = {email}
            onChange = { onInputChange }
            />

            <input 
            type="password" 
            classNameName = "form-control mt-2"
            placeholder = "Contraseña"
            name = "password"
            value = { password }
            onChange = { onInputChange }
            />

            <button classNameName='btn btn-primary mt-2' onClick={ () => onResetForm() }>Borrar</button>
       </> 
    )
}