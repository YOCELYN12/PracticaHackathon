import { useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "./ConfigTable";
import { customStyles } from "./ConfigTable";

function DataTablee({ data }) {
  
  //const customData = data.map(objeto => objeto.disponibilidad == 'ocupado' ? { ...objeto, status: true }: { ...objeto, status: false });

  const rowDisabledCriteria = (row) => row.disponibilidad == "ocupada" || row.disponibilidad == "mantenimiento";

  const [filter, setFilter] = useState(data);
  const [Pick, setPick] = useState(false);

  const handleClick = (status) => {
    const filtredRecords = data.filter((record) => {
      return record.disponibilidad.toLowerCase().includes(status);
    });
    setFilter(filtredRecords); //sete el estado del filtro
  };

  const handleChange = (datosSeleccionados) => {

    if (datosSeleccionados.selectedRows.length > 0) {
      setPick(true);
    } else{
      setPick(false);
    }
  };


  const handleChangeNames = (e) => {
    const filtrado = data.filter((dato) => {return dato.nombre.includes(e.target.value);});
    setFilter(filtrado);
  };


  const handleChangeTypes = (e) => {
    const filtrado = data.filter((dato) => {return dato.tipoHotel.includes(e.target.value);});
    setFilter(filtrado);
   
  };

  const handleReservation = () => {
    console.log("Reservar habitacion");
  };

  // Para obtener una columna específica del objeto data, sin mostrar repetidos
  const nombresHoteles = [...new Set(data.map(item => item.nombre))];
  const tipoHoteles = [...new Set(data.map(item => item.tipoHotel))];
  
  // O para obtener múltiples columnas como un nuevo objeto:
  // const columnasEspecificas = data.map(item => ({
  //   disponibilidad: item.disponibilidad,
  //   otraPropiedad: item.precio
  // }));
  

  return (
    <>
      <div>
        DataTable

        {/*Filtro por nombre de hoteles */}
        <p>Filtro por nombres de habitacion</p>
        <select
          onChange={handleChangeNames}
        >
          <option value="" disabled>
            Filtros de habitaciones
          </option>
          {nombresHoteles.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>

        {/* Filtros para tipo  de habitaciones */}
        <p>Filtro para tipo de hotel</p>
        <select
          onChange={handleChangeTypes}
        >
          <option value="" disabled>
            Filtros de habitaciones
          </option>
          {tipoHoteles.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>

        <DataTable
          title="Datos de los registros"
          columns={columns}
          // data={datos}
          data={filter}
          selectableRows
          paginationPerPage={5} //Son solo 5 por pagina
          fixedHeader
          onSelectedRowsChange={(data) => handleChange(data)} //Detecta la seleccio  de usuarios
          customStyles={customStyles}
          selectableRowDisabled={rowDisabledCriteria}
        />


        <button onClick={() => handleClick("disponible")}>
          Ver habitaciones diposinibles
        </button>
        <button onClick={() => handleClick("ocupada")}>
          Ver habitaciones ocupadas
        </button> 

        <button
          disabled={!Pick}
          className={`${
            Pick
              ? 'button_enabled'
              : 'button_disabled'
          }`}
          onClick={handleReservation}
        >
          {Pick == false ? 'Escoja una habitacion para reservar' : 'Recervar'}
        </button>


      </div>
    </>
  );
}

export default DataTablee;
