import { useState } from 'react'
import { UserContext } from './UserContext'

// let user = {
//     name: 'Francisco',
//     apellido: 'Rodriguez',
//     correo: 'correo@correo.com'
// }

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState();

    return(
        // <UserContext.Provider value = {{hola: 'Mundo', user}}></UserContext.Provider>
        <UserContext.Provider value = {{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
} 