/**
 * Demo/Preview page for development
 */

import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { MarkdownDocsViewer } from './components/MarkdownDocsViewer';
import type { DocNode } from './types';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const sampleTree: DocNode[] = [
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
    children: [
      {
        name: 'Components',
        path: 'api/components',
        isFile: true,
      },
      {
        name: 'Utilities',
        path: 'api/utilities',
        isFile: true,
      },
    ],
  },
  {
    name: 'Examples',
    path: 'examples',
    isFile: true,
  },
];

const sampleContent = `# Getting Started

Welcome to the Markdown Handler library!

## Installation

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`

## Quick Start

Here's a simple example:

\`\`\`tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function App() {
  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath="getting-started"
    />
  );
}
\`\`\`

## Features

- 📄 Markdown rendering with GitHub Flavored Markdown
- 🎨 Beautiful Material-UI components
- 📑 Collapsible navigation tree
- 📱 Fully responsive

## Code Blocks

You can include code blocks with syntax highlighting:

\`\`\`typescript
interface DocNode {
  name: string;
  path: string;
  children?: DocNode[];
  isFile?: boolean;
}
\`\`\`

## Lists

- Item one
- Item two
- Item three

## Tables

| Feature | Status |
|---------|--------|
| Markdown | ✅ |
| Navigation | ✅ |
| Responsive | ✅ |

> This is a blockquote example.

Enjoy using the library! 🎉
`;

function Demo() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MarkdownDocsViewer
        tree={sampleTree}
        content={sampleContent}
        currentPath={currentPath}
        onDocClick={(path) => {
          setCurrentPath(path);
          console.log('Clicked:', path);
        }}
      />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Demo />);
}
