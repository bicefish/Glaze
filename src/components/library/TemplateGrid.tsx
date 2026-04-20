import React from 'react';
import type { PromptTemplate } from '../../types/prompt';
import { TemplateCard } from './TemplateCard';
import './TemplateGrid.css';

interface TemplateGridProps {
  templates: PromptTemplate[];
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({ templates }) => {
  const handleEdit = (id: string) => {
    console.log('Editing template:', id);
    // TODO: Navigate to editor or open modal
  };

  const handleCopy = (id: string) => {
    console.log('Copying template:', id);
    const template = templates.find(t => t.id === id);
    if (template) {
      // In a real app, this would copy template.description or a specific prompt field
      navigator.clipboard.writeText(template.description);
    }
  };

  return (
    <div className="template-grid-container">
      <div className="template-grid">
        {templates.map((template) => (
          <div key={template.id} className="grid-item">
            <TemplateCard 
              template={template} 
              onEdit={handleEdit}
              onCopy={handleCopy}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
