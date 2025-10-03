import Card from "../components/card";
import styles from "../styles/Dashboard.inicial.module.css"

export default function HomePage() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_0}>
        <div className={styles.grid_1}>
          <Card title="Vendas do Mês">
            <p>R$ 15.780,50</p>
            <span>+5% em relação ao mês anterior</span>
          </Card>

        <div className={styles.grid_1_1}>
          <Card title="Novos Usuários">
            <p>321</p>
            <span>+12% em relação ao mês anterior</span>
          </Card>

          <Card title="Taxa de Rejeição">
            <p>23.4%</p>
            <span style={{ color: 'red' }}>-1.5% em relação ao mês anterior</span>
          </Card>
        </div>
      </div>

          <div className={styles.grid_2}>
            <Card title="Satisfação do Cliente">
              <p>9.2 / 10</p>
            </Card>

            <Card title="Primeira Compra Hoje">
              <p>15</p>
            </Card>
        </div>
      </div>
    </div>
  );
}
