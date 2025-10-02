import React from 'react';

export default function HomePage() {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: '0.6fr 0.4fr',
        gap: '16px',
        padding: '16px',
        height: '100hv'
      }}
    >
      {/* Coluna esquerda */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '0.7fr 0.3fr',
          gap: '16px'
        }}
      >
        <div style={{
          background: '#e9ecef',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px'
        }}>
          <h5>Módulo 1</h5>
        </div>

        {/* Linha inferior dividida verticalmente */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
          <div style={{
            background: '#e9ecef',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px'
          }}>
            <h5>Módulo 2</h5>
          </div>
          <div style={{
            background: '#e9ecef',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px'
          }}>
            <h5>Módulo 3</h5>
          </div>
        </div>
      </div>

      {/* Coluna direita */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          gap: '16px'
        }}
      >
        <div style={{
          background: '#e9ecef',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px'
        }}>
          <h5>Módulo 4</h5>
        </div>
        <div style={{
          background: '#e9ecef',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px'
        }}>
          <h5>Módulo 5</h5>
        </div>
      </div>
    </div>
  );
}
