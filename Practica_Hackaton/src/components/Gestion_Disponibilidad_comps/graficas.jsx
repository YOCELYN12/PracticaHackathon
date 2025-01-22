import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const PieChartComponent = ({ data, colors = ['#00C49F', '#FF8042', '#F0F0DC'],}) => {
 
  // Inicializamos el objeto con las tres categorías
  const objeto = [{ ocupada: 0, disponible: 0, mantenimiento: 0 }];
  
  // Contamos las ocurrencias de cada estado
  const filter = data.map(item => item.disponibilidad);
  
  for (const element of filter) {
    if (element === 'ocupada') {
      objeto[0].ocupada += 1;
    } else if(element === 'disponible') {
      objeto[0].disponible += 1;
    } else {
      objeto[0].mantenimiento += 1;
    }
  }

  // Transformamos el objeto en un array de datos para el gráfico
  const chartData = [
    { name: 'Ocupada', value: objeto[0].ocupada },
    { name: 'Disponible', value: objeto[0].disponible },
    { name: 'Mantenimiento', value: objeto[0].mantenimiento }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          // Propiedades de animación
          animationDuration={2400}
          animationEasing="ease-out"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};




// PropTypes para validación de props
PieChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      disponibilidad: PropTypes.oneOf(['ocupada', 'disponible', 'mantenimiento']).isRequired
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default PieChartComponent;