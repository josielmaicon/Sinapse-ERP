import styles from '../styles/Card.module.css';

function Card({title, children, variant = 'default'}) {

  const variantClass = {
    default: '',
    white: styles.card_w,
    transparent: styles.card_t,
    transparent_ovf: styles.card_t_of_list
  }[variant];

  const cardClasses = `${styles.card} ${variantClass}`
  // `props.title` será o título do card
  // `props.children` será o conteúdo dentro dele
  return (
    <div className={cardClasses}>
      {title && <h3>{title}</h3>}
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}

export default Card;