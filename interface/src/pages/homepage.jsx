import Card from "../components/card";
import styles from "../styles/Dashboard.inicial.module.css"
import GraficoDeLinhas from "../components/GraficoLinhas";
import ListaSimples from "../components/listaSimples"

export default function HomePage() {

const dadosPDV = [
  { id: 1, pdv: 'PDV_01', operador:'Ana Paula', em_caixa: '20,42', hr_abertura: '08:00'},
  { id: 2, pdv: 'PDV_02', operador: 'Carlos Souza', em_caixa: '9,32', hr_abertura: '08:15'},
  { id: 3, pdv: 'PDV_03', operador: 'Mariana Lima', em_caixa: '120,50', hr_abertura: '08:30'},
  { id: 4, pdv: 'PDV_04', operador: 'Ricardo Borges', em_caixa: '200,30', hr_abertura: '08:45'},
  { id: 5, pdv: 'PDV_05', operador: 'Juliana Costa', em_caixa: '150,14', hr_abertura: '09:00'},
  { id: 6, pdv: 'PDV_06', operador: 'Fernando Dias', em_caixa: '613,14', hr_abertura: '09:15'},
  { id: 7, pdv: 'PDV_07', operador: 'Beatriz Martins', em_caixa: '162,55', hr_abertura: '09:30'},
  { id: 8, pdv: 'PDV_08', operador: 'Lucas Ferreira', em_caixa: '713,13', hr_abertura: '09:45'}
];

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
                  <ListaSimples data={dadosPDV} viewMode="pdv" />
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
