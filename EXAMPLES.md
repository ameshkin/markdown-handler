# Usage Examples

Complete examples for integrating `@ameshkin/markdown-handler` into your website.

## Example 1: Next.js App Router

```tsx
// app/docs/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import type { DocNode } from '@ameshkin/markdown-handler';

const tree: DocNode[] = [
  {
    name: 'Getting Started',
    path: 'getting-started',
    children: [
      { name: 'Installation', path: 'getting-started/installation', isFile: true },
      { name: 'Quick Start', path: 'getting-started/quick-start', isFile: true },
    ],
  },
];

const docs: Record<string, string> = {
  'getting-started/installation': `# Installation

Install the package:

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`
`,
  'getting-started/quick-start': `# Quick Start

Get started in minutes!
`,
};

export default function DocsPage() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');
  const content = useMemo(() => docs[currentPath] || '', [currentPath]);

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="modern"
      enableSearch={true}
      enableBreadcrumbs={true}
    />
  );
}
```

## Example 2: React with React Router

```tsx
// components/DocsViewer.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';
import type { DocNode } from '@ameshkin/markdown-handler';

const tree: DocNode[] = [
  { name: 'Home', path: 'home', isFile: true },
  { name: 'About', path: 'about', isFile: true },
];

export function DocsViewer() {
  const { path } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Load content based on path
    fetch(`/docs/${path}.md`)
      .then(res => res.text())
      .then(setContent);
  }, [path]);

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={path || 'home'}
      onDocClick={(newPath) => {
        // Navigate using React Router
        window.location.href = `/docs/${newPath}`;
      }}
      template="dark"
    />
  );
}
```

## Example 3: Vanilla Version (No MUI)

```tsx
// components/DocsViewerVanilla.tsx
import { MarkdownDocsViewerVanilla } from '@ameshkin/markdown-handler';
import '@ameshkin/markdown-handler/dist/style.css';

export function DocsViewerVanilla() {
  return (
    <MarkdownDocsViewerVanilla
      tree={tree}
      content={content}
      enableSearch={true}
      enableBreadcrumbs={true}
    />
  );
}
```

## Example 4: With Custom Styling (sx prop)

```tsx
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

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
```

## Example 5: With Custom Link Handling

```tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  onLinkClick={(href, event) => {
    // Handle internal links
    if (href.startsWith('#')) {
      event.preventDefault();
      const path = href.slice(1);
      setCurrentPath(path);
    }
    // Handle external links
    else if (href.startsWith('http')) {
      window.open(href, '_blank');
    }
  }}
/>
```

## Example 6: Loading Content Dynamically

```tsx
import { useState, useEffect } from 'react';
import { MarkdownDocsViewer } from '@ameshkin/markdown-handler';

function DynamicDocsViewer() {
  const [currentPath, setCurrentPath] = useState('intro');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Load markdown from API or file system
    fetch(`/api/docs/${currentPath}`)
      .then(res => res.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setContent('# Not Found\n\nThis page does not exist.');
        setLoading(false);
      });
  }, [currentPath]);

  if (loading) return <div>Loading...</div>;

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
    />
  );
}
```

## Example 7: With Custom Header/Footer

```tsx
<MarkdownDocsViewer
  tree={tree}
  content={content}
  header={
    <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="h4">My Documentation</Typography>
    </Box>
  }
  footer={
    <Box sx={{ p: 2, textAlign: 'center', borderTop: 1 }}>
      <Typography variant="body2">
        © 2024 My Company. All rights reserved.
      </Typography>
    </Box>
  }
/>
```

## Example 8: Full Integration with State Management

```tsx
// hooks/useDocs.ts
import { useState, useCallback } from 'react';
import type { DocNode } from '@ameshkin/markdown-handler';

export function useDocs(initialTree: DocNode[]) {
  const [tree] = useState(initialTree);
  const [currentPath, setCurrentPath] = useState(initialTree[0]?.path || '');
  const [content, setContent] = useState('');

  const loadContent = useCallback(async (path: string) => {
    try {
      const response = await fetch(`/docs/${path}.md`);
      const text = await response.text();
      setContent(text);
      setCurrentPath(path);
    } catch (error) {
      setContent(`# Error\n\nFailed to load: ${path}`);
    }
  }, []);

  return { tree, currentPath, content, loadContent };
}

// Usage
function DocsApp() {
  const { tree, currentPath, content, loadContent } = useDocs(myTree);

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={loadContent}
      template="modern"
    />
  );
}
```

