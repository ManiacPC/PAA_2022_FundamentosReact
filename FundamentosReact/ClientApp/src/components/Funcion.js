import React, { useState, useEffect } from 'react'

const Funcion = () => {

    const handleSaludo = (evento) => {
        alert("Hola que tal?")
    }

    return (
        <>
            <h1>Funciones ejemplo</h1>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            Función 1
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Función saludar</h5>
                            <p className="card-text">
                                Aquí se presenta una breve descripción de lo que queremos
                                utilizar en React.
                            </p>
                            <a href="#" className="btn btn-primary" onClick={handleSaludo}>Saludar</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            Función 1
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Función saludar</h5>
                            <p className="card-text">
                                Aquí se presenta una breve descripción de lo que queremos
                                utilizar en React.
                            </p>
                            <a href="#" className="btn btn-primary" onClick={handleSaludo}>Saludar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Funcion