import React from 'react';
import styles from '../styles/listapdvs.module.css';

export default function ListaSimples({ data, viewMode }) {
  
  return (
    <ul className={styles.listaContainer}>
      {data.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <div className={styles.avatar}></div>
          <div className={styles.itemContent}>

            {viewMode === 'pdv' ? (
              <>
                <span className={styles.pdv}><strong>{item.pdv}</strong></span>
                <span className={styles.operador}>{item.operador}</span>
                <span className={styles.caixa}>R$ {item.em_caixa}</span>
                <span className={styles.horario}>{item.hr_abertura}</span>
              </>
            ) : (
              <>
                <span className={styles.pdv}><strong>{item.nome}</strong></span>
                <span className={styles.operador}>{item.turno}</span>
                <span className={styles.caixa} style={{ color: item.status === 'Ativo' ? 'green' : 'orange' }}>
                  {item.status}
                </span>
              </>
            )}
            
          </div>
        </li>
      ))}
    </ul>
  );
}