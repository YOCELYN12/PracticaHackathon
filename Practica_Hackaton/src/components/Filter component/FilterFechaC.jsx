
import React from 'react';

const FilterFechaC = ({ onFilterChange }) => {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    // Convertir el formato de fecha YYYY-MM-DD a DD/MM/YYYY
    if (selectedDate) {
      const [year, month, day] = selectedDate.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      onFilterChange({ fecha: formattedDate });
    } else {
      onFilterChange({ fecha: null });
    }
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <label htmlFor="dateFilter" style={{ marginRight: '10px' }}>
        Filtrar por fecha:
      </label>
      <input
        type="date"
        id="dateFilter"
        onChange={handleDateChange}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          fontSize: '14px'
        }}
      />
    </div>
  );
};

export default FilterFechaC;
