// Importaciones base
import React, { useState, useEffect } from 'react'

// Componente vista
const Usuarios = () => {
    // Estados
    const [usuarios, setUsuarios] = useState([])
    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [habilitado, setHabilitado] = useState(false)

    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleApellidos = (evento) => {
        setApellidos(evento.target.value)
    }

    const handleHabilitado = (evento) => {
        setHabilitado(!habilitado)
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
                    <br /> {/* ToDo: Para arreglar salto a través de CSS en vez de HTML */}
                    <input
                        type="checkbox"
                        checked={habilitado}
                        onChange={handleHabilitado}
                        name="habilitado"
                        id="habilitado"
                    />
                    <label htmlFor="habilitado">Habilitado</label>
                </div>
            </div>
            <div className="row">
                <div className="col-12"></div>
            </div>
        </>
    )
}

// Visibilidad de componente en proyecto
export default Usuarios