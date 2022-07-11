// Importaciones base
import React, { useState, useEffect } from 'react'

const usuariosPorDefecto = [
    { nombres: "Patana", apellidos: "Triviño", habilitado: true },
    { nombres: "Juan Carlos", apellidos: "Bodoque", habilitado: false }
]

// Componente vista
const Usuarios = () => {
    // Estados
    const [usuarios, setUsuarios] = useState(usuariosPorDefecto)
    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [habilitado, setHabilitado] = useState(false)

    
    // useEffect => []
    // useEffect( fn(), [] )
    // [] en useEffect significa: 
    // Ejecuta esto una vez, pero inmediatamente 
    // después de renderizar correctamente la página
    // plantilla vacia useEffect: useEffect(() => {}, [])
    useEffect(() => {
        let copiaUsuarios = [...usuarios] // spread - desestructuración de arreglos y objetos
        const nuevoUsuario = {
            nombres: "Juanin Juan",
            apellidos: "Harry",
            habilitado: true
        }
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }, [])

    // Funciones de eventos
    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleApellidos = (evento) => {
        setApellidos(evento.target.value)
    }

    const handleHabilitado = (evento) => {
        setHabilitado(!habilitado)
    }

    const handleIngresoUsuario = (evento) => {
        console.log("Botón presionado") // testing
        const nuevoUsuario = {
            nombres: nombres, 
            apellidos: apellidos,
            habilitado: habilitado
        }

        let copiaUsuarios = [...usuarios]
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }

    // Retorno GUI
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Ingreso de usuarios</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="nombres">Nombres</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleNombres}
                        value={nombres}
                        name="nombres"
                        id="nombres"
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleApellidos}
                        value={apellidos}
                        name="apellidos"
                        id="apellidos"
                    />
                </div>
                <div className="col-4">
                    <br /> {/* ToDo: Todavía falta ajustar el checkbox por estilo  */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={habilitado}
                            onChange={handleHabilitado}
                            name="habilitado"
                            id="habilitado" />
                        <label
                            className="form-check-label"
                            htmlFor="habilitado">
                            Habilitado
                        </label>
                    </div>
                </div>
                <div className="col-12 justify-content-start mt-3">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleIngresoUsuario}
                    >
                        Ingresar usuario
                    </button>
                </div>
            </div>
            <hr />
            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre(s)</th>
                                <th>Apellido(s)</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => {
                                return (
                                    <tr>
                                        <td>{usuario.nombres}</td>
                                        <td>{usuario.apellidos}</td>
                                        <td>
                                            {usuario.habilitado ?
                                                "Habilitado" :
                                                "No habilitado"
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

// Visibilidad de componente en proyecto
export default Usuarios