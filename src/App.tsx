import { Library, Edit3, Settings, Search } from 'lucide-react';

/**
 * App Component - Glaze Base Interface
 * 
 * Provides a foundational test of the Vitreous design tokens
 * and layout structure for Milestone 1.
 */
function App() {
  return (
    <div className="app-container">
      {/* Test Sidebar (Mock) */}
      <aside className="glass-panel" style={{ width: '280px', height: '100vh', padding: 'var(--space-md)' }}>
        <h1 className="neon-text" style={{ marginBottom: 'var(--space-lg)', fontSize: '1.5rem', fontWeight: 900 }}>GLAZE</h1>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          <div className="glass-panel" style={{ padding: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', background: 'rgba(129, 236, 255, 0.1)', border: 'var(--neon-cyan-border)' }}>
            <Library size={20} className="neon-text" />
            <span className="neon-text">Library</span>
          </div>
          
          <div className="glass-panel glass-panel-hover" style={{ padding: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-secondary)' }}>
            <Edit3 size={20} />
            <span>New Prompt</span>
          </div>
          
          <div className="glass-panel glass-panel-hover" style={{ padding: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-secondary)' }}>
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', padding: '0 var(--space-sm)', width: '400px' }}>
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search your prompt library..." 
              style={{ background: 'none', border: 'none', padding: 'var(--space-sm)', color: 'var(--text-primary)', flex: 1, outline: 'none' }}
            />
          </div>
          
          <div className="neon-text" style={{ fontSize: '0.9rem' }}>
            Bicefish / Glaze
          </div>
        </header>

        <section style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div className="glass-panel glass-panel-hover neonatal-glow" style={{ padding: 'var(--space-md)', width: '320px', minHeight: '180px' }}>
            <h3 style={{ marginBottom: 'var(--space-xs)' }}>Python Code Auditor</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Specialized prompt for deep auditing of Python backends for security leaks and smells.
            </p>
            <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-xs)' }}>
              <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>#Coding</span>
              <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>#Python</span>
            </div>
          </div>
        </section>
      </main>
      
      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
        }
        
        .neonatal-glow:hover {
          box-shadow: 0 0 20px rgba(129, 236, 255, 0.15);
        }
      `}</style>
    </div>
  );
}

export default App;
