import React from 'react';
import { Library, Edit3, Settings } from 'lucide-react';

/**
 * SideNavBar Component
 * 
 * Static navigation for the Glaze application.
 * Utilizes the Vitreous glass-panel style.
 */
const SideNavBar: React.FC = () => {
  return (
    <aside className="glass-panel" style={{ width: '280px', height: '100vh', padding: 'var(--space-md)', flexShrink: 0 }}>
      <h1 className="neon-text" style={{ marginBottom: 'var(--space-lg)', fontSize: '1.5rem', fontWeight: 900, tracking: '0.05em' }}>GLAZE</h1>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        <NavItem 
          icon={<Library size={20} />} 
          label="Library" 
          isActive={true} 
        />
        <NavItem 
          icon={<Edit3 size={20} />} 
          label="New Prompt" 
        />
        <NavItem 
          icon={<Settings size={20} />} 
          label="Settings" 
        />
      </nav>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div 
      className={`glass-panel ${!isActive ? 'glass-panel-hover' : ''}`} 
      style={{ 
        padding: 'var(--space-sm)', 
        display: 'flex', 
        alignItems: 'center', 
        gap: 'var(--space-sm)', 
        background: isActive ? 'rgba(129, 236, 255, 0.1)' : 'transparent', 
        border: isActive ? 'var(--neon-cyan-border)' : 'var(--glass-border)',
        color: isActive ? 'var(--neon-cyan)' : 'var(--text-secondary)',
        cursor: 'pointer'
      }}
    >
      {icon}
      <span style={{ fontSize: '0.95rem', fontWeight: isActive ? 600 : 400 }}>{label}</span>
    </div>
  );
};

export default SideNavBar;
