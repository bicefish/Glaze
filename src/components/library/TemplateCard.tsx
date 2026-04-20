import React from 'react';
import { Copy, Edit3, Globe } from 'lucide-react';
import type { PromptTemplate } from '../../types/prompt';
import './TemplateCard.css';

interface TemplateCardProps {
  template: PromptTemplate;
  onEdit?: (id: string) => void;
  onCopy?: (id: string) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ 
  template, 
  onEdit, 
  onCopy 
}) => {
  const { title, description, tags, category, bilingual } = template;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy?.(template.id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(template.id);
  };

  return (
    <article 
      className="template-card"
      aria-labelledby={`title-${template.id}`}
    >
      <div className="card-header">
        <span className="card-category">{category}</span>
        <div className="card-actions">
          <button 
            className="action-btn" 
            onClick={handleCopy}
            title="Copy to clipboard"
            aria-label="Copy prompt"
          >
            <Copy size={16} />
          </button>
          <button 
            className="action-btn" 
            onClick={handleEdit}
            title="Open in editor"
            aria-label="Edit prompt"
          >
            <Edit3 size={16} />
          </button>
        </div>
      </div>

      <h3 id={`title-${template.id}`} className="card-title">
        {title}
      </h3>

      <p className="card-description">
        {description}
      </p>

      <div className="card-footer">
        {tags.map((tag) => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>

      {bilingual && (
        <div className="bilingual-indicator" title="Bilingual template (DE/EN)">
          <Globe size={12} style={{ marginRight: '4px' }} />
          DE/EN
        </div>
      )}
    </article>
  );
};
