import styles from "../styles/Paginapdvs.module.css"
import React, { useState, useMemo} from "react";
import Card from "../components/card";
import GraficoEntradaSaida from "../components/fluxoCaixa";
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

const dadosParaGrafico = [
  { hora: '08:00', range: [100, 160], totalFinal: 120 },
  { hora: '08:30', range: [140, 200], totalFinal: 180 },
  { hora: '09:00', range: [150, 210], totalFinal: 200 },
  { hora: '09:30', range: [170, 250], totalFinal: 230 },
  { hora: '10:00', range: [200, 350], totalFinal: 300 },
  { hora: '10:30', range: [150, 280], totalFinal: 260 },
  { hora: '11:00', range: [200, 310], totalFinal: 200 },
  { hora: '11:30', range: [220, 340], totalFinal: 280 },
  { hora: '12:00', range: [250, 380], totalFinal: 360 },
  { hora: '12:30', range: [180, 260], totalFinal: 340 },
  { hora: '13:00', range: [160, 240], totalFinal: 320 },
  { hora: '13:30', range: [170, 270], totalFinal: 300 },
  { hora: '14:00', range: [190, 310], totalFinal: 360 },
  { hora: '14:30', range: [230, 370], totalFinal: 420 },
  { hora: '15:00', range: [280, 420], totalFinal: 460 },
  { hora: '15:30', range: [150, 300], totalFinal: 410 },
  { hora: '16:00', range: [320, 480], totalFinal: 500 },
  { hora: '16:30', range: [200, 350], totalFinal: 520 },
  { hora: '17:00', range: [150, 280], totalFinal: 540 },
  { hora: '17:30', range: [100, 250], totalFinal: 460 },
  { hora: '18:00', range: [250, 400], totalFinal: 520 },
  { hora: '18:30', range: [180, 300], totalFinal: 510 },
  { hora: '19:00', range: [120, 240], totalFinal: 460 },
  { hora: '19:30', range: [200, 320], totalFinal: 510 },
  { hora: '20:00', range: [150, 260], totalFinal: 500 },
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

    return(
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_main}>
        <div className={styles.grid_main_left}>
          <div className={styles.grid_visuals}>
            <Card title="Tempo de atividade (geral e da semana)"></Card>
            <KpiCard metricaPrincipal={{ icon: TrendingUp, valor: 'R$ 1.234,56', rotulo: 'Lucro no Dia' }}
              metricaSecundaria={{icon: Calendar, valor: 'R$ 8.765,43', rotulo: 'Total na Semana'}}
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
                    <GraficoEntradaSaida data={dadosParaGrafico} />
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
