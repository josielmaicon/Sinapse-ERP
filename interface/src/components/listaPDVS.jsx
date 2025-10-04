import React from 'react';
import styles from '../styles/listapdvs.module.css';

// Dados de exemplo. No futuro, virão de uma API.
const atividades = [
  { id: 1, pdv: 'PDV_01', operador:'Ana Paula', em_caixa: '20,42', hr_abertura: '08:00'},
  { id: 2, pdv: 'PDV_02', operador: 'Carlos Souza', em_caixa: '9,32', hr_abertura: '08:15'},
  { id: 3, pdv: 'PDV_03', operador: 'Mariana Lima', em_caixa: '120,50', hr_abertura: '08:30'},
  { id: 4, pdv: 'PDV_04', operador: 'Ricardo Borges', em_caixa: '200,30', hr_abertura: '08:45'},
  { id: 5, pdv: 'PDV_05', operador: 'Juliana Costa', em_caixa: '150,14', hr_abertura: '09:00'},
  { id: 6, pdv: 'PDV_06', operador: 'Fernando Dias', em_caixa: '613,14', hr_abertura: '09:15'},
  { id: 7, pdv: 'PDV_07', operador: 'Beatriz Martins', em_caixa: '162,55', hr_abertura: '09:30'},
  { id: 8, pdv: 'PDV_08', operador: 'Lucas Ferreira', em_caixa: '713,13', hr_abertura: '09:45'}
];

export default function ListaPDVS() {
  return (
    <ul className={styles.listaContainer}>
      {atividades.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <div className={styles.avatar}></div>

          <div className={styles.itemContent}>

            <span className={styles.pdv}><strong>{item.pdv}</strong></span>
            <span className={styles.operador}>{item.operador}</span>
            <span className={styles.em_caixa}>{item.pdem_caixav}</span>
            <span className={styles.hr_abertura}>{item.hr_abertura}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

