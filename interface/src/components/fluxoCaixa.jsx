// src/components/GraficoEntradaSaida.jsx

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

// Componente customizado para o Tooltip, imitando o estilo do exemplo
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold', marginBottom: '5px' }}>{`Hora: ${label}`}</p>
        <p style={{ margin: 0, color: '#22c55e' }}>{`Entrada: R$ ${payload[0].value}`}</p>
        <p style={{ margin: 0, color: '#ef4444' }}>{`Saída: R$ ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function GraficoEntradaSaida({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        
        <XAxis
          dataKey="hora"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tick={{ fontSize: 12, fill: '#6c757d' }}
        />
        
        {/* Escondemos o Eixo Y para um visual mais limpo */}
        <YAxis hide={true} />
        
        {/* Usamos nosso Tooltip customizado */}
        <Tooltip cursor={{ fill: 'rgba(230, 230, 230, 0.5)' }} content={<CustomTooltip />} />

        {/* BARRA DE ENTRADAS */}
        <Bar dataKey="entrada" fill="#22c55e" radius={[4, 4, 0, 0]}>
          <LabelList
            dataKey="entrada"
            position="top"
            offset={8}
            fontSize={12}
            fill="#333"
            formatter={(value) => (value > 0 ? value : '')} // Só mostra o label se o valor for > 0
          />
        </Bar>

        {/* BARRA DE SAÍDAS */}
        <Bar dataKey="saida" fill="#ef4444" radius={[4, 4, 0, 0]}>
          <LabelList
            dataKey="saida"
            position="top"
            offset={8}
            fontSize={12}
            fill="#333"
            formatter={(value) => (value > 0 ? value : '')} // Só mostra o label se o valor for > 0
          />
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
}