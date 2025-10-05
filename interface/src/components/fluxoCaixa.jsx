// src/components/GraficoFluxoCaixa.jsx

import React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer,
    ReferenceLine, // <-- 1. Importamos a ReferenceLine
    Cell          // <-- 2. Importamos a Cell para as cores
} from 'recharts';

// 3. Nossos dados agora incluem valores positivos (entradas) e negativos (saídas)
const data = [
  { name: 'Seg', valor: 400 },
  { name: 'Ter', valor: -300 }, // Saída
  { name: 'Qua', valor: 600 },
  { name: 'Qui', valor: -250 }, // Saída
  { name: 'Sex', valor: 700 },
  { name: 'Sáb', valor: 150 },
  { name: 'Dom', valor: -400 }, // Saída
];

export default function GraficoFluxoCaixa() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        {/* 4. AQUI ESTÁ A LINHA DE BASE ZERO! */}
        {/* Ela desenha uma linha preta na posição Y = 0 do gráfico. */}
        <ReferenceLine y={0} stroke="#000" strokeWidth={2} />
        
        <Bar dataKey="valor">
          {/* 5. A MÁGICA DAS CORES: */}
          {/* Mapeamos nossos dados e para cada item, criamos uma <Cell> */}
          {/* com uma cor baseada no valor (se é > 0 ou < 0). */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.valor > 0 ? '#82ca9d' : '#ff7300'} />
          ))}
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
}