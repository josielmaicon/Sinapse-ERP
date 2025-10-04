import Card from "../components/card";
import styles from "../styles/Produtosgrid.module.css"

export default function ProdutosPage() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_main}>
        <div className={styles.grid_top}>
          <Card title="Em estoque">teste</Card>
          <Card title="Em estoque">teste</Card>
          <Card title="Em estoque">teste</Card>
          <Card title="Em estoque">teste</Card>
        </div>
        <div className={styles.grid_bottom}>
          <Card title="Tabela de produtos">teste</Card>
          <div className={styles.grid_bottom_right}>
          <Card title="Tabela de produtos">teste</Card>
          <Card title="Tabela de produtos">teste</Card>
          </div>
        </div>
      </div>

    </div>

  );
}
