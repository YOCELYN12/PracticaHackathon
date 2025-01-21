import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PieChartComponent = () => {
  // Datos de ejemplo
  const data = [
    { name: 'Grupo A', value: 400 },
    { name: 'Grupo B', value: 300 },
    { name: 'Grupo C', value: 300 },
    { name: 'Grupo D', value: 200 },
  ];

  // Colores para cada sección del pastel
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Función para formatear el valor en el tooltip
  const renderTooltipContent = (value) => {
    return `${value.value} unidades`;
  };

  return (
    <div className="w-full h-96 p-4">
      <h2 className="text-xl font-bold text-center mb-4">Gráfico de Distribución</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={renderTooltipContent} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;