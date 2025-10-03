import styles from '../styles/Card.module.css';

function Card(props) {
  // `props.title` será o título do card
  // `props.children` será o conteúdo dentro dele
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <div className={styles.cardContent}>
        {props.children}
      </div>
    </div>
  );
}

export default Card;