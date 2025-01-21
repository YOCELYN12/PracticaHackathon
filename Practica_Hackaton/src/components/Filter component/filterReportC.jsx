  // Importación de las dependencias necesarias
  import React, { useState } from 'react';
  import { Select, Space } from 'antd';

  // Componente principal de filtrado
  const FilterReportC = ({ onFilterChange }) => {
    // Estados para manejar los filtros
    const [hotel, setHotel] = useState('hotel1');

    // Opciones para el selector de hoteles
    const hotelOptions = [
      { value: 'hotel1', label: 'Hilton Garden' },
      { value: 'hotel2', label: 'Marriott International' },
      { value: 'hotel3', label: 'Holiday Inn' },
      { value: 'hotel4', label: 'Sheraton Hotels' },
      { value: 'hotel5', label: 'Four Seasons' }
    ];

    // Manejador de cambio para el hotel
    const handleHotelChange = (value) => {
      setHotel(value);
      onFilterChange({ hotel: value });
    };

    // Renderizado del componente
    return (
      <div className="filter-container">
        <Space direction="horizontal" size={12}>
          {/* Selector de hotel */}
          <Select
            placeholder="Seleccionar hotel"
            options={hotelOptions}
            onChange={handleHotelChange}
            defaultValue="hotel1"
            style={{ width: 200 }}
          />
        </Space>
      </div>
    );
  };

  export default FilterReportC;