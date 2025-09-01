import './App.css';
import FamilyTree from './components/FamilyTree';

function App() {
  return (
    <div className="App" style={{ 
      width: '100vw', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      position: 'relative'
    }}>
      <header style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
        backdropFilter: 'blur(8px)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1f2937',
          letterSpacing: '-0.025em'
        }}>
          🇩🇪 Árvore Genealógica - Cidadania Alemã
        </h1>
        <p style={{
          margin: '4px 0 0 0',
          fontSize: '14px',
          color: '#6b7280',
          fontWeight: '400'
        }}>
          Clique nos nomes para ver detalhes • 
          <span style={{color: '#eab308'}}> ■ </span>Cidadania Convencional • 
          <span style={{color: '#0ea5e9'}}> ■ </span>Por Declaração • 
          <span style={{color: '#6b7280'}}> ■ </span>Sem Cidadania
        </p>
      </header>
      <div style={{ 
        position: 'absolute',
        top: '80px', 
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 'calc(100vh - 80px)'
      }}>
        <FamilyTree />
      </div>
    </div>
  );
}

export default App;
