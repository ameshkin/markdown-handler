# @ameshkin/markdown-handler

Simple React + MUI library for displaying markdown help files with left navigation and right content panel.

## Features

- 📄 **Markdown Rendering** - Uses `react-markdown` with GitHub Flavored Markdown support
- 🎨 **Material-UI** - Beautiful, responsive UI with MUI components
- 📑 **Tree Navigation** - Collapsible sidebar with file tree structure
- 📱 **Responsive** - Works on mobile and desktop
- 🎯 **Simple API** - Easy to integrate into any React app

## Installation

```bash
npm install @ameshkin/markdown-handler
```

## Usage

### Basic Example

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import type { DocNode } from '@ameshkin/markdown-handler';

const tree: DocNode[] = [
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

const content = `# Getting Started

Welcome to the documentation!

## Installation

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`
`;

function App() {
  const [currentPath, setCurrentPath] = React.useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={(path) => {
        setCurrentPath(path);
        // Load content for the selected path
      }}
    />
  );
}
```

### With File System Integration

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import { buildDocsTree, getDocContent } from '@ameshkin/markdown-handler/utils';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

async function loadDocs() {
  const docsDir = './docs';
  
  // Build tree structure
  const tree = await buildDocsTree({
    baseDir: docsDir,
    readdir: async (path) => {
      const entries = await readdir(path, { withFileTypes: true });
      return entries.map(e => ({ 
        name: e.name, 
        isFile: e.isFile() 
      }));
    },
    isDirectory: async (path) => {
      const stat = await import('fs/promises').then(fs => fs.stat(path));
      return stat.isDirectory();
    },
  });

  // Get content for current path
  const content = await getDocContent({
    docsDir,
    slug: ['getting-started', 'installation'],
    readFile: async (path) => await readFile(path, 'utf-8'),
    join,
  });

  return { tree, content };
}
```

## API

### `MarkdownDocsViewer`

Main component for displaying markdown documentation.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tree` | `DocNode[]` | required | Tree structure of documentation files |
| `content` | `string` | required | Markdown content to display |
| `currentPath` | `string` | `''` | Current path (for highlighting active item) |
| `onDocClick` | `(path: string) => void` | `undefined` | Callback when a doc item is clicked |
| `sidebarTitle` | `string` | `'Documentation'` | Title for the sidebar |
| `sidebarWidth` | `number` | `280` | Width of the sidebar in pixels |

### `DocNode`

```typescript
interface DocNode {
  name: string;           // Display name
  path: string;           // Unique path identifier
  children?: DocNode[];   // Child nodes (for directories)
  isFile?: boolean;      // Whether this is a file (vs directory)
}
```

## Styling

The component uses Material-UI's theme system. You can customize the appearance by wrapping it in a `ThemeProvider`:

```tsx
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your theme customization
});

<ThemeProvider theme={theme}>
  <MarkdownDocsViewer {...props} />
</ThemeProvider>
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build library
npm run build

# Type check
npm run typecheck
```

## License

MIT
