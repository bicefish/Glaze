import SideNavBar from './components/layout/SideNavBar';
import TopAppBar from './components/layout/TopAppBar';
import { TemplateGrid } from './components/library/TemplateGrid';
import { mockTemplates } from './lib/mockData';

/**
 * App Component - Glaze Base Interface
 * 
 * Provides a foundational interface for Milestone 2,
 * displaying the primary template library.
 */
function App() {
  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <SideNavBar />

      {/* Main Content Area */}
      <div className="main-viewport">
        <main className="content-container">
          <TopAppBar />

          {/* Library View */}
          <TemplateGrid templates={mockTemplates} />
        </main>
      </div>
      
      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .main-viewport {
          flex: 1;
          height: 100vh;
          overflow-y: auto;
          background: radial-gradient(circle at 50% -20%, #2a2d35 0%, #17191e 100%);
        }

        .content-container {
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default App;
