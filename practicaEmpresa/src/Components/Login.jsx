import React from 'react'


function Login(){
    return (
        <div>
            <h3>Login</h3>
            <p>Nombre</p>
            <input type="text" />


            <p>Contraseña</p>
            <input type="password" />
            <button>Login</button>

            <p>No tienes una cuenta? <a href="">Registrate aquí</a></p>

        </div>
    )
}