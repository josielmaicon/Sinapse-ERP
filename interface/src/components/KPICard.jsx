// src/components/KpiCard.jsx

import React from 'react';
import styles from '../styles/KPICard.module.css';
import Card from './card';

// As props mudaram! Agora temos props específicas para cada métrica
// e a prop 'children' para receber o gráfico.
export default function KpiCard({ metricaPrincipal, metricaSecundaria, children }) {
  const { icon: IconPrincipal, valor: valorPrincipal, rotulo: rotuloPrincipal } = metricaPrincipal || {};
  const { icon: IconSecundario, valor: valorSecundario, rotulo: rotuloSecundario } = metricaSecundaria || {};

  return (
    <Card>
      <div className={styles.kpiContainer}>
        {/* Coluna da Esquerda: Métricas Empilhadas */}
        <div className={styles.colunaMetricas}>
          {metricaPrincipal && (
            <div className={styles.blocoMetrica}>
              <div className={styles.linhaValor}>
                {IconPrincipal && <IconPrincipal size={20} className={styles.iconeMetrica} />}
                <span className={styles.valorMetrica}>{valorPrincipal}</span>
              </div>
              <span className={styles.rotuloMetrica}>{rotuloPrincipal}</span>
            </div>
          )}
          {metricaSecundaria && (
            <div className={styles.blocoMetrica}>
              <div className={styles.linhaValor}>
                {IconSecundario && <IconSecundario size={18} className={styles.iconeMetrica} />}
                <span className={`${styles.valorMetrica} ${styles.valorSecundario}`}>{valorSecundario}</span>
              </div>
              <span className={styles.rotuloMetrica}>{rotuloSecundario}</span>
            </div>
          )}
        </div>

        {/* Coluna da Direita: O Gráfico (passado como 'children') */}
        <div className={styles.colunaGrafico}>
          {children}
        </div>
      </div>
    </Card>
  );
}