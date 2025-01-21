  import FilterReportC from './filterReportC';
  import FilterFechaC from './FilterFechaC';
  import React, { useState } from 'react';

  const ReportC = () => {
    const hoteles = [
      { nombre: 'Four Seasons', reservas: 35, habitaciones: ['Suite Presidencial', 'Habitación Deluxe', 'Suite Familiar'], fechaReserva: '15/01/2024' },
      { nombre: 'Sheraton Hotels', reservas: 42, habitaciones: ['Suite Ejecutiva', 'Habitación Doble', 'Suite Junior'], fechaReserva: '16/01/2024' },
      { nombre: 'Holiday Inn', reservas: 28, habitaciones: ['Habitación Estándar', 'Habitación Twin', 'Suite Business'], fechaReserva: '17/01/2024' },
      { nombre: 'Marriott International', reservas: 31, habitaciones: ['Suite Premium', 'Habitación King', 'Suite Ocean View'], fechaReserva: '18/01/2024' },
      { nombre: 'Hilton Garden', reservas: 20, habitaciones: ['Habitación Garden View', 'Suite Deluxe', 'Habitación Club'], fechaReserva: '19/01/2024' }
    ];

    const [filteredHoteles, setFilteredHoteles] = useState(hoteles);
    const [datosReporte] = useState({
      reservasRealizadas: 156,
      ingresosGenerados: 25000,
      cancelaciones: 12,
      ocupacionPromedio: 85
    });

    const handleFilterChange = ({ hotel, fecha }) => {
      let filtered = [...hoteles];
    
      if (hotel) {
        filtered = filtered.filter(h => {
          switch(hotel) {
            case 'hotel1': return h.nombre === 'Hilton Garden';
            case 'hotel2': return h.nombre === 'Marriott International';
            case 'hotel3': return h.nombre === 'Holiday Inn';
            case 'hotel4': return h.nombre === 'Sheraton Hotels';
            case 'hotel5': return h.nombre === 'Four Seasons';
            default: return true;
          }
        });
      }

      if (fecha) {
        filtered = filtered.filter(h => h.fechaReserva === fecha);
      }

      setFilteredHoteles(filtered);
    };

    return (
      <div>
        <h1>Reporte de Reservas</h1>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <FilterReportC onFilterChange={handleFilterChange} />
          <FilterFechaC onFilterChange={handleFilterChange} />
        </div>

        <div className="stats-container" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <div className="stat-box" style={{ flex: 1, padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3>Reservas Realizadas</h3>
              <div className="stat-value">
                <span className="icon">📅</span>
                <span>{datosReporte.reservasRealizadas}</span>
              </div>
            </div>
            <div className="stat-box" style={{ flex: 1, padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3>Ingresos Generados</h3>
              <div className="stat-value">
                <span className="icon">💰</span>
                <span>{datosReporte.ingresosGenerados}$</span>
              </div>
            </div>
            <div className="stat-box" style={{ flex: 1, padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3>Cancelaciones</h3>
              <div className="stat-value">
                <span className="icon">❌</span>
                <span>{datosReporte.cancelaciones}</span>
              </div>
            </div>
            <div className="stat-box" style={{ flex: 1, padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3>Ocupación Promedio</h3>
              <div className="stat-value">
                <span className="icon">👥</span>
                <span>{datosReporte.ocupacionPromedio}%</span>
              </div>
            </div>
          </div>
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Lista de Reservas</h2>
          <div className="hotel-list" style={{ 
            marginTop: '10px', 
            fontSize: '14px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px'
          }}>
                {filteredHoteles.map(hotel => (
                    <div key={hotel.nombre} style={{
                      padding: '10px',
                      margin: '5px 0',
                      borderBottom: '1px solid #eee',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{hotel.nombre}</span>
                        <div>
                          <span>{hotel.reservas} reservas | </span>
                          <span>Fecha: {hotel.fechaReserva}</span>
                        </div>
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        Tipos de habitaciones: {hotel.habitaciones.join(', ')}
                      </div>
                    </div>
                ))}
              </div>    </div>
    );
  };

  export default ReportC;