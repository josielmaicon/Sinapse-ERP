import Card from "../components/card";
import styles from "../styles/Dashboard.inicial.module.css"
import GraficoDeLinhas from "../components/GraficoLinhas";
import ListaPDVS from "../components/listaPDVS"

export default function HomePage() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_0}>
        <div className={styles.grid_1}>
          <Card title="Faturamento">
            <div className={styles.grid_dash_1}>
              <GraficoDeLinhas />
            <div className={styles.grid_dash_2}>
              <Card variant="white">
                <p>teste</p>
              </Card>
              <Card variant="white">
                <p>teste</p>
              </Card>
            </div>
            </div>
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
            <Card variant="transparent" title="PDV's">
              <div className={styles.grid_pdv_table}>
                <Card variant="transparent_ovf">
                  <ListaPDVS />
                </Card>
              </div>
            </Card>
            <Card title="Primeira Compra Hoje">
              <p>15</p>
            </Card>
        </div>
      </div>
    </div>
  );
}
