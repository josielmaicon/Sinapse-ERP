import styles from "../styles/Estoquegrid.module.css"
import Card from "../components/card"

export default function EstoquePage() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_main}>
        <Card title="Cadastro de novo Produto"></Card>
        <Card title="Resumo do cadastro"></Card>
      </div>
    </div>
  );
}
  