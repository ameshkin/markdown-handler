# @ameshkin/markdown-handler

Simple React library for displaying markdown help files with left navigation and right content panel.

**Works with or without MUI!** Choose the vanilla version for zero UI dependencies, or use the MUI version for Material Design components.

## Features

- 📄 **Markdown Rendering** - Uses `react-markdown` with GitHub Flavored Markdown support
- 🎨 **Material-UI** - Beautiful, responsive UI with MUI components
- 📑 **Tree Navigation** - Collapsible sidebar with file tree structure
- 📱 **Responsive** - Works on mobile and desktop
- 🎯 **Simple API** - Easy to integrate into any React app
- 🎨 **Syntax Highlighting** - Code blocks with syntax highlighting and copy buttons
- 📊 **MUI Tables** - Markdown tables rendered as proper MUI Table components
- 🌈 **Theme Support** - Full MUI theme integration with dark/light mode
- 🎨 **7 Pre-built Templates** - Choose from minimal, modern, classic, dark, compact, wide, and centered
- 🔍 **Search Functionality** - Built-in search to filter navigation tree
- 🧭 **Breadcrumbs** - Easy navigation with breadcrumb trails
- 🎛️ **Customizable** - Header, footer, and full template customization

## Installation

### Vanilla Version (No MUI Required)

```bash
npm install @ameshkin/markdown-handler react-syntax-highlighter
```

**No additional dependencies needed!** The vanilla version uses plain CSS and React.

### MUI Version (Optional)

If you want to use the MUI version with Material Design components:

```bash
npm install @ameshkin/markdown-handler react-syntax-highlighter @mui/material @mui/icons-material @emotion/react @emotion/styled
```

**Note:** `react-syntax-highlighter` is required for code highlighting in both versions.

## Quick Start

### Choose Your Version

- **Vanilla Version** - No MUI required, uses plain CSS. Perfect for projects without Material-UI.
- **MUI Version** - Full Material Design components with themes and templates.

### Vanilla Version (No Dependencies)

```tsx
import { MarkdownDocsViewerVanilla } from '@ameshkin/markdown-handler';
import '@ameshkin/markdown-handler/dist/style.css'; // Import CSS

function App() {
  return (
    <MarkdownDocsViewerVanilla
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      enableSearch={true}
      enableBreadcrumbs={true}
    />
  );
}
```

### MUI Version

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function App() {
  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="modern"
    />
  );
}
```

### 1. Understanding the Data Structure

The component requires two main pieces of data:

#### Tree Structure (`DocNode[]`)

The tree defines your documentation navigation structure. Each node can be:
- **A folder** (has `children` array)
- **A file** (has `isFile: true`)

```typescript
import type { DocNode } from '@ameshkin/markdown-handler';

const tree: DocNode[] = [
  {
    name: 'Getting Started',        // Display name in sidebar
    path: 'getting-started',        // Unique identifier (used for highlighting/clicking)
    children: [                     // This is a folder
      {
        name: 'Installation',
        path: 'getting-started/installation',
        isFile: true,              // This is a file
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
    isFile: true,                  // Can also be a file at root level
  },
];
```

#### Markdown Content (`string`)

The content is just a markdown string that gets rendered:

```typescript
const content = `# Getting Started

Welcome to the documentation!

## Installation

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`

## Features

- 📄 Markdown rendering
- 🎨 Beautiful UI
- 📑 Tree navigation

## Code Example

\`\`\`typescript
interface DocNode {
  name: string;
  path: string;
  children?: DocNode[];
  isFile?: boolean;
}
\`\`\`

## Table Example

| Feature | Status |
|---------|--------|
| Markdown | ✅ |
| Navigation | ✅ |
| Responsive | ✅ |
`;
```

### 2. Basic Usage

#### Vanilla Version

```tsx
import { useState } from 'react';
import { MarkdownDocsViewerVanilla } from '@ameshkin/markdown-handler';
import '@ameshkin/markdown-handler/dist/style.css';
import type { DocNode } from '@ameshkin/markdown-handler';

function App() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');
  
  return (
    <MarkdownDocsViewerVanilla
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
    />
  );
}
```

#### MUI Version

```tsx
import { useState } from 'react';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import type { DocNode } from '@ameshkin/markdown-handler';

function App() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');
  
  // Your tree structure
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
  ];

  // Your markdown content (load this based on currentPath)
  const content = `# Installation

Install the package:

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`
`;

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={(path) => {
        setCurrentPath(path);
        // Load content for the selected path here
        console.log('User clicked:', path);
      }}
    />
  );
}
```

### 3. Complete Example with Content Loading

Here's a full example showing how to load different content based on the selected path:

```tsx
import { useState, useMemo } from 'react';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import type { DocNode } from '@ameshkin/markdown-handler';

// Define your documentation content
const docsContent: Record<string, string> = {
  'getting-started/installation': `# Installation

Install the package:

\`\`\`bash
npm install @ameshkin/markdown-handler react-syntax-highlighter
\`\`\`

## Peer Dependencies

Make sure you have React and MUI installed:

\`\`\`bash
npm install react react-dom @mui/material @mui/icons-material
\`\`\`
`,

  'getting-started/quick-start': `# Quick Start

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

## Next Steps

1. Set up your tree structure
2. Load your markdown content
3. Handle the \`onDocClick\` callback
`,

  'api/components': `# Components

## MarkdownDocsViewer

The main component for displaying documentation.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| tree | DocNode[] | Yes | Navigation tree structure |
| content | string | Yes | Markdown content to display |
| currentPath | string | No | Active path for highlighting |
| onDocClick | function | No | Callback when item is clicked |
| theme | Theme \| 'default' | No | MUI theme override |
`,

  'api/utilities': `# Utilities

Helper functions for building documentation trees.

\`\`\`typescript
import { buildDocsTree, getDocContent } from '@ameshkin/markdown-handler/utils';
\`\`\`
`,
};

// Define your tree structure
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
];

function App() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  // Get content for current path
  const content = useMemo(() => {
    return docsContent[currentPath] || '# Page Not Found\n\nThis page does not exist.';
  }, [currentPath]);

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={(path) => {
        setCurrentPath(path);
      }}
    />
  );
}
```

### 4. With MUI Theme

The component integrates with MUI's theme system. You can:

#### Option A: Use Parent ThemeProvider (Recommended)

```tsx
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

const theme = createTheme({
  palette: {
    mode: 'dark',  // or 'light'
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MarkdownDocsViewer
        tree={tree}
        content={content}
        currentPath={currentPath}
        onDocClick={handleClick}
      />
    </ThemeProvider>
  );
}
```

#### Option B: Use Default Theme

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function App() {
  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={handleClick}
      theme="default"  // Uses MUI's default theme
    />
  );
}
```

#### Option C: Pass Custom Theme

```tsx
import { createTheme } from '@mui/material';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6b6b',
    },
  },
});

function App() {
  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={handleClick}
      theme={customTheme}  // Uses your custom theme
    />
  );
}
```

## Vanilla vs MUI Version

### When to Use Vanilla Version

- ✅ You don't want to install MUI dependencies
- ✅ You want a smaller bundle size
- ✅ You prefer plain CSS styling
- ✅ You want full control over styling
- ✅ You're building a lightweight application

### When to Use MUI Version

- ✅ You're already using Material-UI in your project
- ✅ You want pre-built templates and themes
- ✅ You want Material Design components
- ✅ You need advanced theming capabilities

### Feature Comparison

| Feature | Vanilla | MUI |
|---------|---------|-----|
| Zero UI Dependencies | ✅ | ❌ |
| Search | ✅ | ✅ |
| Breadcrumbs | ✅ | ✅ |
| Syntax Highlighting | ✅ | ✅ |
| Code Copy Buttons | ✅ | ✅ |
| Responsive | ✅ | ✅ |
| Dark Mode | ✅ (System) | ✅ (Full Control) |
| Templates | ❌ | ✅ (7 templates) |
| Custom Themes | ❌ | ✅ |
| Custom Header/Footer | ✅ | ✅ |

## Templates (MUI Version Only)

The MUI version includes 7 pre-built templates that you can use out of the box:

### Available Templates

1. **Minimal** - Clean and simple design with minimal styling
2. **Modern** - Contemporary design with subtle shadows and rounded corners
3. **Classic** - Traditional documentation style with clear hierarchy
4. **Dark** - Dark theme optimized for low-light environments
5. **Compact** - Space-efficient layout for dense documentation
6. **Wide** - Maximum width layout for large screens
7. **Centered** - Centered content with generous margins

### Using Templates

#### Simple Template Usage

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function App() {
  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      template="modern"  // Use a pre-built template
    />
  );
}
```

#### Custom Template Configuration

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import type { TemplateConfig } from '@ameshkin/markdown-handler';

const customTemplate: TemplateConfig = {
  name: 'Custom',
  description: 'My custom template',
  variant: 'modern',
  sidebarWidth: 350,
  showSearch: true,
  showBreadcrumbs: true,
  contentMaxWidth: 1200,
  sidebarStyle: 'elevated',
  contentStyle: 'elevated',
};

function App() {
  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      template={customTemplate}  // Use custom template
    />
  );
}
```

#### Template Features

Each template can include:
- **Search** - Filter navigation tree by name
- **Breadcrumbs** - Show navigation path
- **Custom Styles** - Elevated, flat, or outlined
- **Custom Widths** - Sidebar and content widths
- **Theme** - Built-in light/dark themes

### Template Showcase

To see all templates in action, check out the template showcase:

```tsx
import { TemplateShowcaseApp } from '@ameshkin/markdown-handler/pages/TemplateShowcase';

function App() {
  return <TemplateShowcaseApp />;
}
```

Or run the demo:

```bash
npm run dev
```

## Search and Breadcrumbs

### Enable Search

```tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  enableSearch={true}  // Enable search functionality
/>
```

### Enable Breadcrumbs

```tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  enableBreadcrumbs={true}  // Enable breadcrumb navigation
/>
```

### Both Features

```tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  template="modern"  // Templates can include these features
  enableSearch={true}
  enableBreadcrumbs={true}
/>
```

## Custom Header and Footer

You can add custom header and footer components:

```tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  header={
    <div style={{ padding: '16px', background: '#f5f5f5' }}>
      <h2>Custom Header</h2>
    </div>
  }
  footer={
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <p>© 2024 Your Company</p>
    </div>
  }
/>
```

## API Reference

### `MarkdownDocsViewer`

Main component for displaying markdown documentation.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tree` | `DocNode[]` | **required** | Tree structure of documentation files |
| `content` | `string` | **required** | Markdown content to display |
| `currentPath` | `string` | `''` | Current path (for highlighting active item) |
| `onDocClick` | `(path: string) => void` | `undefined` | Callback when a doc item is clicked |
| `sidebarTitle` | `string` | `'Documentation'` | Title for the sidebar |
| `sidebarWidth` | `number` | `280` | Width of the sidebar in pixels |
| `theme` | `Theme \| 'default'` | `undefined` | MUI theme override. If not provided, uses parent ThemeProvider or default |
| `template` | `TemplateVariant \| TemplateConfig` | `undefined` | Template variant or custom template configuration |
| `enableSearch` | `boolean` | `false` | Enable search functionality in sidebar |
| `enableBreadcrumbs` | `boolean` | `false` | Enable breadcrumbs navigation |
| `header` | `React.ReactNode` | `undefined` | Custom header component |
| `footer` | `React.ReactNode` | `undefined` | Custom footer component |

### `DocNode`

```typescript
interface DocNode {
  name: string;           // Display name in sidebar
  path: string;           // Unique path identifier (used for highlighting/clicking)
  children?: DocNode[];   // Child nodes (for directories/folders)
  isFile?: boolean;       // Whether this is a file (vs directory)
}
```

### `TemplateConfig`

```typescript
interface TemplateConfig {
  name: string;
  description: string;
  variant: TemplateVariant;
  theme?: Theme | 'default';
  sidebarWidth?: number;
  sidebarPosition?: 'left' | 'right';
  showSearch?: boolean;
  showBreadcrumbs?: boolean;
  headerHeight?: number;
  contentMaxWidth?: number | 'full';
  sidebarStyle?: 'elevated' | 'flat' | 'outlined';
  contentStyle?: 'elevated' | 'flat' | 'outlined';
}

type TemplateVariant = 
  | 'minimal'
  | 'modern'
  | 'classic'
  | 'dark'
  | 'compact'
  | 'wide'
  | 'centered';
```

### Template Utilities

```typescript
import { templates, getTemplate, getAllTemplates } from '@ameshkin/markdown-handler';

// Get all available templates
const allTemplates = getAllTemplates();

// Get a specific template
const modernTemplate = getTemplate('modern');
```

**Important Notes:**
- `path` should be unique across all nodes
- If a node has `children`, it's treated as a folder (can be expanded/collapsed)
- If `isFile: true`, clicking it will call `onDocClick` with the path
- Folders without `isFile: true` can also be clickable if they represent a page

## Markdown Features

The component supports all standard markdown features plus:

### Code Blocks with Syntax Highlighting

Code blocks automatically get:
- Syntax highlighting (based on language)
- Copy button
- Language label

\`\`\`typescript
// Example TypeScript code
interface User {
  name: string;
  age: number;
}
\`\`\`

Supported languages: TypeScript, JavaScript, Python, Bash, JSON, CSS, HTML, and many more.

### Tables

Tables are rendered as proper MUI Table components:

| Feature | Status | Notes |
|---------|--------|-------|
| Syntax Highlighting | ✅ | With copy button |
| MUI Tables | ✅ | Responsive |
| Theme Support | ✅ | Dark/Light mode |

### Inline Code

Inline code uses \`backticks\` and gets styled automatically.

### Other Features

- Headings (H1-H6)
- Lists (ordered and unordered)
- Blockquotes
- Links
- Images
- GitHub Flavored Markdown (GFM) features

## Data Structure Examples

### Simple Flat Structure

```typescript
const tree: DocNode[] = [
  { name: 'Home', path: 'home', isFile: true },
  { name: 'About', path: 'about', isFile: true },
  { name: 'Contact', path: 'contact', isFile: true },
];
```

### Nested Structure

```typescript
const tree: DocNode[] = [
  {
    name: 'Documentation',
    path: 'docs',
    children: [
      {
        name: 'Guides',
        path: 'docs/guides',
        children: [
          { name: 'Getting Started', path: 'docs/guides/getting-started', isFile: true },
          { name: 'Advanced', path: 'docs/guides/advanced', isFile: true },
        ],
      },
      {
        name: 'API',
        path: 'docs/api',
        children: [
          { name: 'Components', path: 'docs/api/components', isFile: true },
          { name: 'Hooks', path: 'docs/api/hooks', isFile: true },
        ],
      },
    ],
  },
];
```

### Mixed Structure

```typescript
const tree: DocNode[] = [
  {
    name: 'Introduction',
    path: 'intro',
    isFile: true,  // Can be a file
  },
  {
    name: 'Tutorials',
    path: 'tutorials',
    children: [    // Or a folder
      { name: 'Part 1', path: 'tutorials/part-1', isFile: true },
      { name: 'Part 2', path: 'tutorials/part-2', isFile: true },
    ],
  },
];
```

## Styling

All styles use MUI's theme system - no hardcoded colors or values. The component automatically adapts to:
- Dark/Light mode
- Custom theme colors
- Custom typography
- Custom spacing

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
