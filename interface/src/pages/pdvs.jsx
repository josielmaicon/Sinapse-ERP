import styles from "../styles/Paginapdvs.module.css"
import Card from "../components/card";

export default function PdvsPage() {
  return(
    <div className={styles.dashboardContainer}>
      <div className={styles.grid_main}>
        <div className={styles.grid_main_left}>
          <div className={styles.grid_visuals}>
            <Card title="Tempo de atividade (geral e da semana)"></Card>
            <Card title="Lucro geral do dia e da semana"></Card>
          </div>
          <div className={styles.grid_body}>
            <Card title="Lista de PDVs (com botões, switch e filtro)"></Card>
            <Card title="Performance do pdv selecionado">
              <div className={styles.grid_center}>
                <div className={styles.grid_center_visuals}>
                  <Card variant="white">ioba</Card>
                  <Card variant="white"></Card>
                  <Card variant="white"></Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
          <div className={styles.grid_main_right}>
            <Card title="PDVs abertos e total em caixa no momento"></Card>
            <Card title="Histórico de mov (com seletor de data)"></Card>
          </div>
      </div>
    </div>
  );
}
