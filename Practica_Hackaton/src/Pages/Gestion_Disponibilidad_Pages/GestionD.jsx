import React from 'react'
import '../../css/interfaz_disponibilidad.css'
import DataTablee from '../../components/Gestion_Disponibilidad_comps/lista_habitaciones'
import { habitaciones } from '../../components/Gestion_Disponibilidad_comps/backend/server'
import PieChartComponent from '../../components/Gestion_Disponibilidad_comps/graficas'

function GestionD() {
  return (
    <>
    <h3>Disponibilidad de habitaciones</h3>

    <div className='div_disponibilidad'>
        <div>
            <DataTablee data={habitaciones}/>
        </div>
        <div>
            <PieChartComponent data={habitaciones}/>   
        </div>
    </div>
    </>
  )
}

export default GestionD