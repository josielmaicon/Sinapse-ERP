// src/components/GraficoFluxoDetalhado.jsx

import React from 'react';
import {
  ComposedChart, // <-- O componente principal para misturar gráficos
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

// Os dados que o componente vai receber já devem estar processados
export default function GraficoFluxoDetalhado({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="hora" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        {/* A linha de base zero ainda é útil para referência visual */}
        <ReferenceLine y={0} stroke="#000" />
        
        {/* BARRAS DE ENTRADA (positivas) */}
        <Bar dataKey="entrada" barSize={20} fill="#82ca9d" />
        
        {/* BARRAS DE SAÍDA (negativas) */}
        <Bar dataKey="saida" barSize={20} fill="#ff7300" />
        
        {/* A LINHA DO TOTAL (o "eixo" dinâmico) */}
        <Line 
          type="monotone" 
          dataKey="totalEmCaixa" 
          stroke="#004f76" // Uma cor de destaque
          strokeWidth={3}
          dot={{ r: 5 }}
        />
        
      </ComposedChart>
    </ResponsiveContainer>
  );
}