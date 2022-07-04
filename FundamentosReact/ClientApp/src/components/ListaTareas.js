import React, { useState, useEffect } from 'react'

const ListaTareas = () => {
    const [listadoTareas, setListadoTareas] = useState(["Revisar correo", "Pedir delivery"])
    const [nuevaTarea, setNuevaTarea] = useState("")

    const handleAgregarTarea = (evento) => { // evento boton
        let tareasActualizadas = [...listadoTareas] // crear copia del arreglo actual de tareas
        tareasActualizadas.push(nuevaTarea) // añadir nueva tarea (string) capturada desde el input

        setListadoTareas(tareasActualizadas) // actualizar el arreglo de tareas (estado)
    }

    const handleEscribirTarea = (evento) => { // evento cada vez que se escribe en input
        setNuevaTarea(evento.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h2>Añadir nueva tarea</h2>

                    <label htmlFor="nuevaTarea" className="form-label">Descripción tarea</label>
                    <input type="text"
                        className="form-control"
                        id="nuevaTarea"
                        value={nuevaTarea}
                        onChange={handleEscribirTarea}
                    />

                    <button type="button"
                        id="btnAgregarTarea"
                        onClick={handleAgregarTarea}
                        className="btn btn-primary mt-3">
                        Agregar nueva tarea
                    </button>
                </div>

                <div className="col-6">
                    <h2>Tareas registradas</h2>

                    {`El listado de tareas posee: ${listadoTareas.length} elementos`}

                    <ul className="list-group mt-3">
                        {listadoTareas.map((tarea) => {
                            return <li className="list-group-item">{tarea}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ListaTareas