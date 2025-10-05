import React from 'react';
import clsx from 'clsx';
import styles from '../styles/FiltroSimples.module.css'; // Usaremos um CSS dedicado

// Recebemos 3 props:
// 1. options: O array com os botões a serem mostrados.
// 2. activeFilter: A string que diz qual filtro está ativo (controlado pelo pai).
// 3. onFilterChange: A FUNÇÃO que o pai nos deu para avisá-lo quando um filtro for clicado.
export default function FiltroSimples({ options, activeFilter, onFilterChange }) {
  return (
    <div className={styles.filterGroup}>
      {options.map((option) => (
        <button
          key={option.id}
          className={clsx(styles.filterButton, { 
            [styles.active]: activeFilter === option.id 
          })}
          // Ao clicar, chamamos a função que recebemos do pai (onFilterChange)
          // e passamos o ID da opção clicada.
          onClick={() => onFilterChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}