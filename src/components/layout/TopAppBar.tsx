import React from 'react';
import { Search } from 'lucide-react';

/**
 * TopAppBar Component
 * 
 * Main utility bar for searching and global metadata.
 * Utilizes the Vitreous design tokens.
 */
const TopAppBar: React.FC = () => {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: 'var(--space-lg)',
      width: '100%' 
    }}>
      {/* Search Bar */}
      <div className="glass-panel" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 var(--space-sm)', 
        width: '450px',
        background: 'rgba(255, 255, 255, 0.03)'
      }}>
        <Search size={18} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Search your prompt library..." 
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: 'var(--space-sm)', 
            color: 'var(--text-primary)', 
            flex: 1, 
            outline: 'none',
            fontSize: '0.9rem'
          }}
        />
      </div>
      
      {/* User / Meta Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        <div className="glass-panel" style={{ padding: '4px 12px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          BETA 1.0
        </div>
        <div className="neon-text" style={{ fontSize: '0.85rem', fontWeight: 500, opacity: 0.8 }}>
          bicefish / Glaze
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
