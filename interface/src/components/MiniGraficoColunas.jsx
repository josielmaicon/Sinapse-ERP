// src/components/MiniGraficoColunas.jsx

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

// Dados de exemplo para o gráfico
const data = [
  { name: 'S', uv: 40 },
  { name: 'T', uv: 30 },
  { name: 'Q', uv: 20 },
  { name: 'Q', uv: 27 },
  { name: 'S', uv: 18 },
  { name: 'S', uv: 23 },
  { name: 'D', uv: 34 },
];

export default function MiniGraficoColunas() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
        <Bar dataKey="uv" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}