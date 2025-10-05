import styles from "../styles/Paginapdvs.module.css"
import React, { useState, useMemo} from "react";
import Card from "../components/card";
import GraficoFluxoCaixa from "../components/fluxoCaixa";

const todosOsPdvs = [
  { id: 1, nome: 'PDV_01', status: 'aberto' },
  { id: 2, nome: 'PDV_02', status: 'aberto' },
  { id: 3, nome: 'PDV_03', status: 'fechado' },
  { id: 4, nome: 'PDV_04', status: 'offline' },
  { id: 5, nome: 'PDV_05', status: 'aberto' },
];

const opcoesFiltro = [
  { id: 'todos', label: 'Todos' },
  { id: 'abertos', label: 'Abertos' },
  { id: 'fechados', label: 'Fechados' },
  { id: 'offline', label: 'Offline' },
];

export default function PdvsPage() {

  const [ filtroAtivo, setFiltroAtivo] = useState('todos');

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
            <Card title="Lucro geral do dia e da semana"></Card>
          </div>
          <div className={styles.grid_body}>
            <Card title="Lista de PDVs (com botões, switch e filtro)">
              <div className="btn-group-f">
                {opcoesFiltro.map((filtro) => (
                  <button
                    key={filtro.id}
                    className={`nav-btn-f ${filtroAtivo === filtro.id ? "nav-btn-f.active" : ''}`}
                    onClick={() => setFiltroAtivo(filtro.id)}
                  >
                    {filtro.label}
                  </button>
                ))}
              </div>
            </Card>
            <Card title="Performance do pdv selecionado">
              <div className={styles.grid_center}>
                <div className={styles.grid_center_visuals}>
                  <Card variant="white">ioba</Card>
                  <Card variant="white"></Card>
                  <Card variant="white"></Card>
                </div>
                    <GraficoFluxoCaixa />
              </div>
            </Card>
          </div>
        </div>
          <div className={styles.grid_main_right}>
            <Card title="PDVs abertos e total em caixa no momento"></Card>
            <Card title="Histórico de mov (com seletor de data)"></Card>
          </div>
      </div>
    </div>
  );
}
