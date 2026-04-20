import SideNavBar from './components/layout/SideNavBar';
import TopAppBar from './components/layout/TopAppBar';

/**
 * App Component - Glaze Base Interface
 * 
 * Provides a foundational test of the Vitreous design tokens
 * and layout structure for Milestone 1.
 */
function App() {
  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <SideNavBar />

      {/* Main Content Area */}
      <div style={{ flex: 1, height: '100vh', overflowY: 'auto' }}>
        <main style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
          <TopAppBar />

          {/* Library Mock View */}
          <section style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <TemplateCard 
              title="Python Code Auditor" 
              description="Specialized prompt for deep auditing of Python backends for security leaks and smells." 
              tags={['#Coding', '#Python']}
            />
            <TemplateCard 
              title="Market copy: Tech" 
              description="Convert technical features into compelling, benefit-focused marketing copy." 
              tags={['#Copywriting', '#Sales']}
            />
          </section>
        </main>
      </div>
      
      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

interface TemplateCardProps {
  title: string;
  description: string;
  tags: string[];
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, tags }) => {
  return (
    <div className="glass-panel glass-panel-hover" style={{ padding: 'var(--space-md)', width: '320px', minHeight: '180px' }}>
      <h3 style={{ marginBottom: 'var(--space-xs)', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
        {description}
      </p>
      <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-xs)' }}>
        {tags.map(tag => (
          <span key={tag} style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
