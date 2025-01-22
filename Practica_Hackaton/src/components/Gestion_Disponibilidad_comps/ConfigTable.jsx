

export const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        background: "#48e",
        color: "white",
        fontSize: "16px",
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
        },
      },
    },
  };



  export const columns = [
    {
      name: "Nombre de habitacion", //Nombre de la columna
      selector: (row) => row.nombre, //Se define que espacio del objeto se muestra
      sortable: true, //Ordenado alfabeticamente
    },
    {
      name: "Tipo de hotel", //Nombre de la columna
      selector: (row) => row.tipoHotel, //Se define que espacio del objeto se muestra
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
    },
    {
      name: "Disponibilidad",
      selector: (row) => row.disponibilidad,
    },
  ];