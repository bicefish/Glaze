export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  tags: string[];
  lastModified: number;
  bilingual: boolean;
  category: 'Coding' | 'Creative' | 'Business' | 'System' | 'Other';
}
