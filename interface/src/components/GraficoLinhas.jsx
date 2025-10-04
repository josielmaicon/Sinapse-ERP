// src/components/GraficoDeLinhas.jsx

import React from 'react';
// 1. Importamos todos os "blocos de construção" que vamos usar da recharts
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

// 2. Dados de exemplo. No futuro, isso virá de uma API.
//    O formato é um array de objetos.
const data = [
  { mes: 'Jan', vendas_2024: 400, vendas_2025: 240 },
  { mes: 'Fev', vendas_2024: 300, vendas_2025: 139 },
  { mes: 'Mar', vendas_2024: 200, vendas_2025: 980 },
  { mes: 'Abr', vendas_2024: 278, vendas_2025: 390 },
  { mes: 'Mai', vendas_2024: 189, vendas_2025: 480 },
  { mes: 'Jun', vendas_2024: 239, vendas_2025: 380 },
  { mes: 'Jul', vendas_2024: 349, vendas_2025: 430 },
];

export default function GraficoDeLinhas() {
  return (
    // 3. ResponsiveContainer é o segredo para o gráfico se adaptar ao tamanho do Card.
    //    Ele faz o gráfico ocupar 100% da largura e altura do seu container pai.
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* Grade de fundo do gráfico */}
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* Eixo X (horizontal), usando a chave "mes" dos nossos dados */}
        <XAxis dataKey="mes" />
        
        {/* Eixo Y (vertical) */}
        <YAxis />
        
        {/* Tooltip é a caixinha que aparece ao passar o mouse */}
        <Tooltip />
        
        {/* Legenda que mostra o nome de cada linha */}
        <Legend />
        
        {/* A primeira linha, usando a chave "vendas_2024", com a cor azul */}
        <Line type="monotone" dataKey="vendas_2024" stroke="#8884d8" strokeWidth={2} />
        
        {/* A segunda linha, usando a chave "vendas_2025", com a cor verde */}
        <Line type="monotone" dataKey="vendas_2025" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}