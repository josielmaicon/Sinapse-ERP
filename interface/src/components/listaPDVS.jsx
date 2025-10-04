import React from 'react';
import styles from '../styles/ListaDeAtividades.module.css';

// Dados de exemplo. No futuro, virão de uma API.
const atividades = [
  { id: 1, pdv: 'PDV_01', operador:'Ana Paula', em_caixa: '20,42'},
  { id: 2, pdv: 'PDV_02', operador: 'Carlos Souza', em_caixa: '9,32'},
  { id: 3, pdv: 'PDV_03', operador: 'Mariana Lima', em_caixa: '120,50'},
  { id: 4, pdv: 'PDV_04', operador: 'Ricardo Borges', em_caixa: '200,30'},
  { id: 5, pdv: 'PDV_05', operador: 'Juliana Costa', em_caixa: '150,14'},
  { id: 6, pdv: 'PDV_06', operador: 'Fernando Dias', em_caixa: '613,14'},
  { id: 7, pdv: 'PDV_07', operador: 'Beatriz Martins', em_caixa: '162,55'},
  { id: 8, pdv: 'PDV_08', operador: 'Lucas Ferreira', em_caixa: '713,13'}
];

export default function ListaDeAtividades() {
  return (
    <ul className={styles.listaContainer}>
      {atividades.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <div className={styles.avatar}></div>
          <div className={styles.itemContent}>
            <p className={styles.itemText}>
              <strong>{item.usuario}</strong> {item.acao}
            </p>
            <span className={styles.itemTempo}>{item.tempo}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

