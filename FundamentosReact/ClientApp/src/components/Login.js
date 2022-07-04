import React, { useEffect, useState } from 'react'

const Login = () => {
    // Escpacio para varialble de estados 
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [recordar, setRecordar] = useState (false)

    //Espacio de Funciones
    //function handClickLogin(evento { ... })
    const handleUsuario = (evento) => {
        //desde donde se saca el texto del input
        //evento,target.value
        setUsuario(evento.target.usuario)
    }

    const handlePassword = (evento) => {
        
        setPassword(evento.target.usuario)
    }

    const handleClickRecordarme = (evento) => {
        setRecordar(!recordar)
    }
    


    return(
    <>
            <div className="row">
                <div className="col-12">
                    {/* Input usuario */}
                    <label htmlFor="usuario">Usuario</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input id="usuario" value={usuario} onChange={handleUsuario} type="text" className="form-control" placeholder="Ingrese su usuario" />
                    </div>
                    {/* Input contraseña */}
                    <label htmlFor="contraseña">Contraseña</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">#</span>
                        <input id="password" value={password} onChange={handlePassword}type="password" className="form-control" placeholder="Ingrese su contraseña"  />
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="recordar" checked={recordar} onClick={handleClickRecordarme} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Recordarme
                        </label>
                    </div>
                    {/* Boton */}
                        <button type="button" className="btn btn-primary">
                            Iniciar sesión
                        </button>

                </div>
            </div>
        </>
        )
}

export default Login
