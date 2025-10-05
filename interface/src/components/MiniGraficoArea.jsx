// src/components/MiniGraficoArea.jsx

import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// Dados de exemplo para a tendência de lucro da semana
const data = [
  { v: 240 },
  { v: 139 },
  { v: 980 },
  { v: 390 },
  { v: 480 },
  { v: 380 },
  { v: 430 },
];

export default function MiniGraficoArea() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke="#82ca9d" fillOpacity={1} fill="url(#colorLucro)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}