/**
 * Template Showcase Page
 * 
 * Displays all available templates with live previews
 */

import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Paper,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { MarkdownDocsViewer } from '../components/MarkdownDocsViewer';
import { getAllTemplates, getTemplate } from '../templates';
import type { DocNode, TemplateVariant } from '../types';

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
      {
        name: 'Configuration',
        path: 'getting-started/configuration',
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
      {
        name: 'Types',
        path: 'api/types',
        isFile: true,
      },
    ],
  },
  {
    name: 'Examples',
    path: 'examples',
    children: [
      {
        name: 'Basic Usage',
        path: 'examples/basic',
        isFile: true,
      },
      {
        name: 'With Themes',
        path: 'examples/themes',
        isFile: true,
      },
    ],
  },
  {
    name: 'Templates',
    path: 'templates',
    isFile: true,
  },
];

const sampleContent = `# Getting Started

Welcome to the Markdown Handler library!

## Installation

Install the package:

\`\`\`bash
npm install @ameshkin/markdown-handler react-syntax-highlighter
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
      template="modern"
    />
  );
}
\`\`\`

## Features

- 📄 **Markdown Rendering** - Full GitHub Flavored Markdown support
- 🎨 **Multiple Templates** - Choose from 7 pre-built templates
- 🔍 **Search** - Built-in search functionality
- 🧭 **Breadcrumbs** - Easy navigation
- 📊 **MUI Tables** - Beautiful table rendering
- 💻 **Code Highlighting** - Syntax highlighting with copy buttons

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

| Feature | Status | Notes |
|---------|--------|-------|
| Templates | ✅ | 7 pre-built options |
| Search | ✅ | Filter navigation |
| Breadcrumbs | ✅ | Navigation aid |
| Dark Mode | ✅ | Full theme support |

## Lists

- Item one with some text
- Item two with more details
- Item three with additional information

> This is a blockquote example showing how quotes are rendered.

Enjoy using the library! 🎉
`;

const docsContent: Record<string, string> = {
  'getting-started/installation': `# Installation

Install the Markdown Handler package to get started with beautiful documentation viewers.

## NPM Installation

\`\`\`bash
npm install @ameshkin/markdown-handler react-syntax-highlighter
\`\`\`

## Peer Dependencies

Make sure you have React installed:

\`\`\`bash
npm install react react-dom
\`\`\`

## Optional: MUI Dependencies

If you want to use the MUI version with templates:

\`\`\`bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
\`\`\`

## Verify Installation

After installation, you can import the components:

\`\`\`tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
// or
import { MarkdownDocsViewerVanilla } from '@ameshkin/markdown-handler';
\`\`\`
`,

  'getting-started/quick-start': `# Quick Start

Get up and running in minutes with this simple example.

## Basic Setup

\`\`\`tsx
import { useState, useMemo } from 'react';
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
    ],
  },
];

const content = \`# Getting Started

Welcome to the documentation!
\`;

function App() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
    />
  );
}
\`\`\`

## Next Steps

1. Set up your documentation tree structure
2. Load markdown content for each path
3. Handle navigation with \`onDocClick\`
4. Customize with templates and themes
`,

  'getting-started/configuration': `# Configuration

Learn how to configure and customize the Markdown Handler.

## Template Selection

Choose from 7 pre-built templates:

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  template="modern"  // minimal, modern, classic, dark, light, wide, centered, blocky
/>
\`\`\`

## Custom Styling

Use the \`sx\` prop for custom styling:

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  sx={{
    backgroundColor: 'background.paper',
    '& .MuiPaper-root': {
      borderRadius: 2,
    },
  }}
/>
\`\`\`

## Features Configuration

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  enableSearch={true}
  enableBreadcrumbs={true}
  sidebarTitle="My Docs"
  sidebarWidth={300}
/>
\`\`\`
`,

  'api/components': `# Components API

Complete API reference for all components.

## MarkdownDocsViewer

The main component for displaying documentation.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| tree | DocNode[] | Yes | Navigation tree structure |
| content | string | Yes | Markdown content to display |
| currentPath | string | No | Active path for highlighting |
| onDocClick | function | No | Callback when item is clicked |
| template | string \| TemplateConfig | No | Template variant or config |
| enableSearch | boolean | No | Enable search functionality |
| enableBreadcrumbs | boolean | No | Enable breadcrumbs |
| sx | SxProps | No | Custom MUI styling |

### Example

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  currentPath="getting-started"
      onDocClick={(path) => {
        // console.log('Clicked:', path);
        setCurrentPath(path);
      }}
  template="modern"
  enableSearch={true}
/>
\`\`\`
`,

  'api/utilities': `# Utilities API

Helper functions for building documentation trees.

## buildDocsTree

Build a documentation tree from a file system.

\`\`\`typescript
import { buildDocsTree } from '@ameshkin/markdown-handler/utils';

const tree = await buildDocsTree({
  baseDir: './docs',
  basePath: '',
  readdir: async (path) => {
    // Your readdir implementation
  },
  isDirectory: async (path) => {
    // Your isDirectory check
  },
});
\`\`\`

## getDocContent

Get markdown content for a specific path.

\`\`\`typescript
import { getDocContent } from '@ameshkin/markdown-handler/utils';

const content = await getDocContent({
  docsDir: './docs',
  slug: ['getting-started', 'installation'],
  readFile: async (path) => {
    // Your readFile implementation
  },
  join: (...paths) => {
    // Your path join implementation
  },
});
\`\`\`
`,

  'api/types': `# TypeScript Types

Complete type definitions for the library.

## DocNode

\`\`\`typescript
interface DocNode {
  name: string;           // Display name
  path: string;           // Unique path identifier
  children?: DocNode[];    // Child nodes (for folders)
  isFile?: boolean;       // Whether this is a file
}
\`\`\`

## MarkdownDocsViewerProps

\`\`\`typescript
interface MarkdownDocsViewerProps {
  tree: DocNode[];
  content: string;
  currentPath?: string;
  onDocClick?: (path: string) => void;
  sidebarTitle?: string;
  sidebarWidth?: number;
  template?: TemplateVariant | TemplateConfig;
  enableSearch?: boolean;
  enableBreadcrumbs?: boolean;
  sx?: SxProps<Theme>;
  onLinkClick?: (href: string, event: React.MouseEvent) => void;
}
\`\`\`

## TemplateConfig

\`\`\`typescript
interface TemplateConfig {
  name: string;
  description: string;
  variant: TemplateVariant;
  sidebarWidth?: number;
  showSearch?: boolean;
  showBreadcrumbs?: boolean;
  contentMaxWidth?: number | 'full';
  sidebarStyle?: 'elevated' | 'flat' | 'outlined';
  contentStyle?: 'elevated' | 'flat' | 'outlined';
}
\`\`\`
`,

  'examples/basic': `# Basic Usage Example

A simple example to get you started.

## Minimal Setup

\`\`\`tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function App() {
  const tree = [
    { name: 'Home', path: 'home', isFile: true },
  ];
  
  const content = \`# Home

Welcome to the documentation!
\`;

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
    />
  );
}
\`\`\`

## With Navigation

\`\`\`tsx
import { useState, useMemo } from 'react';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function App() {
  const [currentPath, setCurrentPath] = useState('home');
  const content = getContentForPath(currentPath);

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
    />
  );
}
\`\`\`
`,

  'examples/themes': `# Theme Examples

Learn how to customize themes and styling.

## Using MUI Theme

\`\`\`tsx
import { ThemeProvider, createTheme } from '@mui/material';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // Purple
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MarkdownDocsViewer
        tree={tree}
        content={content}
      />
    </ThemeProvider>
  );
}
\`\`\`

## Using Templates

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  template="dark"  // Pre-built dark theme
/>
\`\`\`

## Custom Template

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  template={{
    variant: 'modern',
    sidebarWidth: 350,
    showSearch: true,
    contentMaxWidth: 1200,
  }}
/>
\`\`\`
`,

  'templates': `# Templates Guide

Explore all available templates and their features.

## Available Templates

1. **Minimal** - Clean and simple design
2. **Modern** - Contemporary with shadows
3. **Classic** - Traditional documentation style
4. **Dark** - Dark theme optimized
5. **Light** - Light theme with easy-on-the-eyes grey background
6. **Wide** - Maximum width for large screens
7. **Centered** - Centered content with margins

## Template Comparison

| Template | Sidebar Width | Search | Breadcrumbs | Style |
|----------|---------------|--------|-------------|-------|
| Minimal | 260px | ❌ | ❌ | Flat |
| Modern | 300px | ✅ | ✅ | Elevated |
| Classic | 280px | ✅ | ✅ | Outlined |
| Dark | 300px | ✅ | ✅ | Elevated |
| Light | 240px | ✅ | ❌ | Flat |
| Wide | 320px | ✅ | ✅ | Elevated |
| Centered | 280px | ❌ | ✅ | Outlined |

## Usage

\`\`\`tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  template="modern"
/>
\`\`\`
`,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`template-tabpanel-${index}`}
      aria-labelledby={`template-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

interface TemplateShowcaseProps {
  selectedTemplate: TemplateVariant;
  setSelectedTemplate: (template: TemplateVariant) => void;
}

export function TemplateShowcase({ selectedTemplate, setSelectedTemplate }: TemplateShowcaseProps) {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');
  const [tabValue, setTabValue] = useState(0);
  
  const templates = getAllTemplates();
  // Get content for current path
  const content = docsContent[currentPath] || sampleContent;

  // Debug: Log when currentPath changes
  // useEffect(() => {
  //   console.log('currentPath changed to:', currentPath);
  //   console.log('Content exists:', !!docsContent[currentPath]);
  //   console.log('Content preview:', content.substring(0, 50) + '...');
  // }, [currentPath, content]);

  const handleDocClick = (path: string) => {
    // console.log('=== handleDocClick called ===');
    // console.log('Path received:', path);
    // console.log('Current path before update:', currentPath);
    // console.log('Has content for path:', !!docsContent[path]);
    // console.log('Available paths:', Object.keys(docsContent));
    // Always update the path - content will fallback to sampleContent if not found
    setCurrentPath(path);
    // console.log('setCurrentPath called with:', path);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            background: '#a855f7',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
          }}
        >
          Template Showcase
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Explore all available templates and choose the one that fits your needs.
        </Typography>

        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Templates" />
          <Tab label="Live Preview" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {templates.map((template) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={template.variant}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                    background: '#151b3d',
                    border: template.variant === selectedTemplate 
                      ? '2px solid #a855f7' 
                      : '1px solid rgba(168, 85, 247, 0.2)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      borderColor: '#a855f7',
                    },
                  }}
                  onClick={() => {
                    setSelectedTemplate(template.variant);
                    setTabValue(1);
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography 
                        variant="h5" 
                        component="h2"
                        sx={{
                          color: '#a855f7',
                          fontWeight: 600,
                        }}
                      >
                        {template.name}
                      </Typography>
                      {template.variant === selectedTemplate && (
                        <Chip
                          label="Selected"
                          size="small"
                          sx={{ 
                            ml: 2,
                            background: '#a855f7',
                            color: '#0a1929',
                            fontWeight: 600,
                          }}
                        />
                      )}
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {template.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      <Chip
                        label={`Width: ${template.sidebarWidth}px`}
                        size="small"
                        variant="outlined"
                      />
                      {template.showSearch && (
                        <Chip label="Search" size="small" variant="outlined" />
                      )}
                      {template.showBreadcrumbs && (
                        <Chip label="Breadcrumbs" size="small" variant="outlined" />
                      )}
                      <Chip
                        label={template.sidebarStyle || 'flat'}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTemplate(template.variant);
                        setTabValue(1);
                      }}
                    >
                      Preview
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Paper 
            sx={{ 
              p: 3, 
              mb: 3,
              background: '#151b3d',
              border: '1px solid rgba(168, 85, 247, 0.3)',
            }}
          >
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                color: '#a855f7',
                fontWeight: 600,
              }}
            >
              Live Preview: {templates.find(t => t.variant === selectedTemplate)?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Template: <Box
                component="code"
                sx={{
                  background: 'rgba(0, 217, 255, 0.2)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  color: '#00d9ff',
                  fontFamily: 'monospace',
                }}
              >
                {selectedTemplate}
              </Box>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              {templates.map((template) => (
                <Button
                  key={template.variant}
                  variant={selectedTemplate === template.variant ? 'contained' : 'outlined'}
                  size="small"
                  onClick={() => setSelectedTemplate(template.variant)}
                  sx={{
                    ...(selectedTemplate === template.variant && {
                      background: '#a855f7',
                      '&:hover': {
                        background: '#9333ea',
                      },
                    }),
                    ...(selectedTemplate !== template.variant && {
                      borderColor: 'rgba(0, 217, 255, 0.5)',
                      color: '#00d9ff',
                      '&:hover': {
                        borderColor: '#00d9ff',
                        background: 'rgba(0, 217, 255, 0.1)',
                      },
                    }),
                  }}
                >
                  {template.name}
                </Button>
              ))}
            </Box>
          </Paper>

          <Box
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              overflow: 'hidden',
            }}
          >
            <MarkdownDocsViewer
              key={selectedTemplate}
              tree={sampleTree}
              content={content}
              currentPath={currentPath}
              onDocClick={handleDocClick}
              template={selectedTemplate}
              sidebarTitle="Documentation"
            />
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}

// Standalone version with theme
export function TemplateShowcaseApp() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateVariant>('modern');
  
  // Get the selected template's theme for the entire page
  const pageTheme = useMemo(() => {
    const template = getTemplate(selectedTemplate);
    if (template?.theme && typeof template.theme === 'object') {
      return template.theme;
    }
    // Fallback to default dark theme
    return createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#a855f7',
        },
        secondary: {
          main: '#00d9ff',
        },
        background: {
          default: '#0a0e27',
          paper: '#151b3d',
        },
      },
    });
  }, [selectedTemplate]);

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      <TemplateShowcase 
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
    </ThemeProvider>
  );
}

