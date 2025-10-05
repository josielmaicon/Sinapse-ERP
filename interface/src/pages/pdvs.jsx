import styles from "../styles/Paginapdvs.module.css"
import React, { useState, useMemo} from "react";
import Card from "../components/card";
import GraficoFluxoDetalhado from "../components/fluxoCaixa";
import FiltroSimples from "../components/filtroSimples"
import ListaSimples from "../components/listaSimples";
import KpiCard from "../components/KPICard";
import MiniGraficoColunas from "../components/MiniGraficoColunas"
import MiniGraficoArea from '../components/MiniGraficoArea'

import { Clock, TrendingUp, Store, ArrowUp, Calendar } from 'lucide-react';

const todosOsPdvs = [
  { id: 1, nome: 'PDV_01', status: 'aberto' },
  { id: 2, nome: 'PDV_02', status: 'aberto' },
  { id: 3, nome: 'PDV_03', status: 'fechado' },
  { id: 4, nome: 'PDV_04', status: 'offline' },
  { id: 5, nome: 'PDV_05', status: 'aberto' },
];

const transacoesBrutas = [
  { hora: 8,  tipo: 'entrada', valor: 120.50 }, { hora: 8,  tipo: 'saida',   valor: 15.20 },
  { hora: 9,  tipo: 'entrada', valor: 200.20 }, { hora: 9,  tipo: 'saida',   valor: 15.50 },
  { hora: 10, tipo: 'entrada', valor: 150.40 },  { hora: 10, tipo: 'saida',   valor: 50.10 },
  { hora: 11, tipo: 'entrada', valor: 130.90 },  { hora: 11, tipo: 'saida',   valor: 100.75 },
  { hora: 12, tipo: 'entrada', valor: 75.00 },   { hora: 12, tipo: 'saida',   valor: 90.10 },
  { hora: 13, tipo: 'entrada', valor: 95.75 },   { hora: 13, tipo: 'saida',   valor: 80.90 },
  { hora: 14, tipo: 'entrada', valor: 180.00 },  { hora: 14, tipo: 'saida',   valor: 50.35 },
  { hora: 15, tipo: 'entrada', valor: 130.00 },  { hora: 15, tipo: 'saida',   valor: 90.50 },
  { hora: 16, tipo: 'entrada', valor: 200.80 },  { hora: 16, tipo: 'saida',   valor: 150.75 },
  { hora: 17, tipo: 'entrada', valor: 110.40 },  { hora: 17, tipo: 'saida',   valor: 95.25 },
  { hora: 18, tipo: 'entrada', valor: 200.15 },  { hora: 18, tipo: 'saida',   valor: 75.25 },
  { hora: 19, tipo: 'entrada', valor: 150.20 },  { hora: 19, tipo: 'saida',   valor: 110.50 },
  { hora: 20, tipo: 'entrada', valor: 60.50 },   { hora: 20, tipo: 'saida',   valor: 45.30 },
];


const dadosOperadores = [
  { id: 1, nome: 'Ana Paula', status: 'Ativo', turno: 'Manhã' },
  { id: 2, nome: 'Carlos Souza', status: 'Ativo', turno: 'Manhã' },
  { id: 3, nome: 'Mariana Lima', status: 'Férias', turno: 'Tarde' },
  { id: 4, nome: 'João Pereira', status: 'Ativo', turno: 'Tarde' },
  { id: 5, nome: 'Fernanda Alves', status: 'Ativo', turno: 'Noite' },
  { id: 6, nome: 'Rafael Martins', status: 'Afastado', turno: 'Manhã' },
  { id: 7, nome: 'Beatriz Nogueira', status: 'Ativo', turno: 'Tarde' },
  { id: 8, nome: 'Lucas Oliveira', status: 'Ativo', turno: 'Noite' },
  { id: 9, nome: 'Patrícia Gomes', status: 'Férias', turno: 'Manhã' },
  { id: 10, nome: 'Eduardo Silva', status: 'Ativo', turno: 'Tarde' }
];

const opcoesFiltro = [
  { id: 'todos', label: 'Todos' },
  { id: 'abertos', label: 'Abertos' },
  { id: 'fechados', label: 'Fechados' },
  { id: 'offline', label: 'Offline' },
];

  // Função para processar os dados
  const processarDados = (dados) => {
    const dadosPorHora = {};
    let totalAcumulado = 0;

    // Assume que o dia vai das 8h às 18h
    for (let i = 8; i <= 20; i++) {
      const horaFormatada = `${String(i).padStart(2, '0')}:00`;
      dadosPorHora[i] = { hora: horaFormatada, entrada: 0, saida: 0 };
    }

    dados.forEach(transacao => {
      if (transacao.tipo === 'entrada') {
        dadosPorHora[transacao.hora].entrada += transacao.valor;
      } else {
        dadosPorHora[transacao.hora].saida -= transacao.valor; // Armazena como negativo
      }
    });

    return Object.values(dadosPorHora).map(horaData => {
      totalAcumulado += horaData.entrada + horaData.saida;
      return { ...horaData, totalEmCaixa: totalAcumulado };
    });
  };

export default function PdvsPage() {

  const [ filtroAtivo, setFiltroAtivo] = useState('todos');
  const [viewMode, setViewMode] = useState('pdv');

  const opcoesView = [
    { id: 'pdv', label: 'PDV' },
    { id: 'operador', label: 'Opr' }
  ];

  const pdvsFiltrados = useMemo(() => {
    if (filtroAtivo === 'todos') {
      return todosOsPdvs;
    }
    // No id 'abertos', o status é 'aberto' (singular)
    if (filtroAtivo === 'abertos') {
      return todosOsPdvs.filter(pdv => pdv.status === 'aberto');
    }
    // No id 'fechados', o status é 'fechado' (singular)
    if (filtroAtivo === 'fechados') {
        return todosOsPdvs.filter(pdv => pdv.status === 'fechado');
    }

    return todosOsPdvs.filter(pdv => pdv.status === filtroAtivo);
  }, [filtroAtivo, todosOsPdvs]);

    const dadosParaGrafico = useMemo(() => processarDados(transacoesBrutas), [transacoesBrutas]);

    return(
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_main}>
        <div className={styles.grid_main_left}>
          <div className={styles.grid_visuals}>
            <Card title="Tempo de atividade (geral e da semana)"></Card>
            <KpiCard 
              metricaPrincipal={{ 
                icon: TrendingUp, 
                valor: 'R$ 1.234,56',
                rotulo: 'Lucro no Dia'
              }}
              metricaSecundaria={{
                icon: Calendar,
                valor: 'R$ 8.765,43',
                rotulo: 'Total na Semana'
              }}
            >
              <MiniGraficoArea />
            </KpiCard>
            
          </div>
          <div className={styles.grid_body}>
            <Card title="Lista de PDVs (com botões, switch e filtro)">
              <div className={styles.containerVertical}>
                
                {/* ---- ÁREA 1: FILTROS ---- */}
                <div className={styles.areaFiltros}>
                  <FiltroSimples options={opcoesFiltro} activeFilter={filtroAtivo} onFilterChange={setFiltroAtivo} />
                  <FiltroSimples options={opcoesView} activeFilter={viewMode} onFilterChange={setViewMode} />
                </div>

                <div className={styles.areaLista}>
                  <ListaSimples data={viewMode === 'pdv' ? todosOsPdvs : dadosOperadores} viewMode={viewMode} />
                </div>

                <div className={styles.areaBotoes}>
                  <button>Ação 1</button>
                  <button>Ação 2</button>
                </div>
              </div>
            </Card>
            <Card title="Performance do pdv selecionado">
              <div className={styles.grid_center}>
                <div className={styles.grid_center_visuals}>
                  <Card variant="white">ioba</Card>
                  <Card variant="white"></Card>
                  <Card variant="white"></Card>
                </div>
                  <GraficoFluxoDetalhado data={dadosParaGrafico} />
              </div>
            </Card>
          </div>
        </div>
          <div className={styles.grid_main_right}>
            <KpiCard 
              metricaPrincipal={{ 
                icon: Clock, 
                valor: '8h 32m', 
                rotulo: 'Tempo no Dia' 
              }}
              metricaSecundaria={{ 
                icon: Calendar, 
                valor: '42h 15m', 
                rotulo: 'Total na Semana' 
              }}
            >
              <MiniGraficoColunas />
            </KpiCard>
            <Card title="Histórico de mov (com seletor de data)"></Card>
          </div>
      </div>
    </div>
  );
}
