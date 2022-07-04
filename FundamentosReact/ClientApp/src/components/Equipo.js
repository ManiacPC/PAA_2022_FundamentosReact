import React, { useState, useEffect } from 'react'
import ImagenPerfil2 from '../assets/images/perfil2.jpg'
import ImagenPerfil3 from '../assets/images/perfil3.jpg'
import IntegranteFragment from './Fragments/IntegranteFragment'

const Equipo = () => {

    return (
        <>
            <h1>¿Quiénes somos?</h1>
            <div className="row">
                <div className="col-3">
                    <IntegranteFragment
                        imagen="https://source.unsplash.com/random/300x400"
                        titulo={`Enrique Palacios`}
                        descripcion="Docente de inacap, especialidad Área Tecnologías de Información y Ciberseguridad"
                    />
                </div>
                <div className="col-3">
                    <IntegranteFragment
                        imagen={ImagenPerfil2}
                        titulo={`Pepe Lota`}
                        descripcion="Jugador de fútbol semiprofesional"
                    />
                </div>
                <div className="col-3">
                    <IntegranteFragment
                        imagen={ImagenPerfil3}
                        titulo={`Tulio Triviño`}
                        descripcion="Presentador"
                    />
                </div>
            </div>
        </>
    )
}

export default Equipo