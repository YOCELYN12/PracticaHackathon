import React from 'react';
import FilterReportC from './filterReportC';

const ReportC = () => {
  const datosReporte = {
    reservasRealizadas: 156,
    ingresosGenerados: 25800,
    cancelaciones: 12,
    ocupacionPromedio: 85
  };

  return (
    <div>
      <h1>Reporte de Reservas</h1>

      <FilterReportC />
      

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
    </div>
  );
};

export default ReportC;