import React, { useState, useEffect } from 'react'
import FuncionFragment from './Fragments/FuncionFragment'
import { Link } from 'react-router-dom'

const Funcion = () => {
    const [nombre, setNombre] = useState("")

    const handleSaludo = (evento) => {
        alert("¿Hola que tal?")
    }

    const handleSaludoNombre = (evento) => {
        if (nombre === '') {
            alert('Por favor escriba un nombre para poder saludarlo')
        } else {
           alert(`Hola ${nombre}!`)
        }
    }

    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }

    return (
        <>
            <h1>Funciones ejemplo</h1>
            <Link to={`/equipo`}>Dirigirse a "Equipo"</Link>            

            <div className="row">
                <div className="col-12">
                    <FuncionFragment
                        titulo1="Función 1"
                        titulo2="Función saludar"
                        handleBoton={handleSaludo}
                    >
                        Aquí se presenta una breve descripción de lo que queremos
                        utilizar en React.
                    </FuncionFragment>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <FuncionFragment
                        titulo1="Función 2"
                        titulo2={`Función saludar con nombre`}
                        handleBoton={handleSaludoNombre}
                    >
                        <p>
                            Por favor escriba su nombre y salude en caso de que efectivamente
                            haya escrito uno
                        </p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text"
                            className="form-control mb-2"
                            value={nombre}
                            onChange={handleNombre}
                        />
                        {nombre === '' &&
                            <p className="text-sm text-danger">Por favor escriba un nombre</p>
                        }

                    </FuncionFragment>
                </div>
            </div>
        </>
    )
}

export default Funcion