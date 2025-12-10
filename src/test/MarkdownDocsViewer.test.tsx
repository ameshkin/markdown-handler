import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MarkdownDocsViewer } from '../components/MarkdownDocsViewer';
import type { DocNode } from '../types';

const mockTree: DocNode[] = [
  {
    name: 'Getting Started',
    path: 'getting-started',
    children: [
      {
        name: 'Installation',
        path: 'getting-started/installation',
        isFile: true,
      },
      {
        name: 'Quick Start',
        path: 'getting-started/quick-start',
        isFile: true,
      },
    ],
  },
  {
    name: 'API Reference',
    path: 'api',
    isFile: true,
  },
];

const mockContent = `# Getting Started

Welcome to the documentation!

## Installation

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`
`;

describe('MarkdownDocsViewer', () => {
  it('renders without crashing', () => {
    render(
      <MarkdownDocsViewer
        tree={mockTree}
        content={mockContent}
      />
    );
    
    expect(screen.getByText('Documentation')).toBeInTheDocument();
  });

  it('displays sidebar title', () => {
    render(
      <MarkdownDocsViewer
        tree={mockTree}
        content={mockContent}
        sidebarTitle="My Docs"
      />
    );
    
    expect(screen.getByText('My Docs')).toBeInTheDocument();
  });

  it('displays tree items in sidebar', () => {
    const { container } = render(
      <MarkdownDocsViewer
        tree={mockTree}
        content={mockContent}
      />
    );
    
    // Check sidebar items (they appear in ListItemText)
    const sidebarItems = container.querySelectorAll('[class*="MuiListItemText"]');
    const sidebarTexts = Array.from(sidebarItems).map(item => item.textContent);
    expect(sidebarTexts).toContain('Getting Started');
    expect(sidebarTexts).toContain('API Reference');
  });

  it('calls onDocClick when file is clicked', () => {
    const handleClick = vi.fn();
    const { container } = render(
      <MarkdownDocsViewer
        tree={mockTree}
        content={mockContent}
        onDocClick={handleClick}
      />
    );
    
    // Find the Installation item in the sidebar (not the h2 in content)
    const sidebarButtons = container.querySelectorAll('[role="button"]');
    const installationButton = Array.from(sidebarButtons).find(btn => 
      btn.textContent?.includes('Installation') && 
      btn.closest('[class*="MuiList"]')
    );
    
    expect(installationButton).toBeTruthy();
    if (installationButton) {
      installationButton.click();
      expect(handleClick).toHaveBeenCalledWith('getting-started/installation');
    }
  });

  it('displays markdown content', () => {
    render(
      <MarkdownDocsViewer
        tree={mockTree}
        content={mockContent}
      />
    );
    
    // Check content area (h1, not sidebar)
    const headings = screen.getAllByText('Getting Started');
    expect(headings.length).toBeGreaterThan(0);
    expect(screen.getByText('Welcome to the documentation!')).toBeInTheDocument();
  });

  it('highlights current path', () => {
    const { container } = render(
      <MarkdownDocsViewer
        tree={mockTree}
        content={mockContent}
        currentPath="getting-started/installation"
      />
    );
    
    // Find the selected button in sidebar
    const selectedButton = container.querySelector('[role="button"].Mui-selected');
    expect(selectedButton).toBeTruthy();
    expect(selectedButton?.textContent).toContain('Installation');
  });
});

