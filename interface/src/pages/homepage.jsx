export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%", // ocupa todo o espaço do main
        gap: "16px",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Coluna da esquerda */}
      <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Linha de cima (maior, ocupa 70% da altura da coluna) */}
        <div style={{ flex: 0.7, background: "#e2e8f0", borderRadius: "12px", padding: "12px" }}>
          <h5>Módulo Esquerda - Topo (70%)</h5>
        </div>
        {/* Linha de baixo (dividida em 2 verticalmente) */}
        <div style={{ flex: 0.3, display: "flex", gap: "16px" }}>
          <div style={{ flex: 1, background: "#edf2f7", borderRadius: "12px", padding: "12px" }}>
            <h5>Esquerda - Baixo - Esquerda</h5>
          </div>
          <div style={{ flex: 1, background: "#edf2f7", borderRadius: "12px", padding: "12px" }}>
            <h5>Esquerda - Baixo - Direita</h5>
          </div>
        </div>
      </div>

      {/* Coluna da direita (dividida em 2 horizontalmente iguais) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ flex: 1, background: "#f7fafc", borderRadius: "12px", padding: "12px" }}>
          <h5>Direita - Topo</h5>
        </div>
        <div style={{ flex: 1, background: "#f7fafc", borderRadius: "12px", padding: "12px" }}>
          <h5>Direita - Baixo</h5>
        </div>
      </div>
    </div>
  );
}
