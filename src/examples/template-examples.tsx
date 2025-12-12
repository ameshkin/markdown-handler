/**
 * Complete Examples for All Templates
 * 
 * Copy and paste these examples to use different templates
 */

import { useState } from 'react';
import { MarkdownDocsViewer } from '../components/MarkdownDocsViewer';
import type { DocNode } from '../types';

// Sample tree structure
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

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`
`;

// ============================================
// Example 1: Minimal Template
// ============================================
export function MinimalExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="minimal"
    />
  );
}

// ============================================
// Example 2: Modern Template
// ============================================
export function ModernExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

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

// ============================================
// Example 3: Classic Template
// ============================================
export function ClassicExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="classic"
    />
  );
}

// ============================================
// Example 4: Dark Template
// ============================================
export function DarkExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="dark"
    />
  );
}

// ============================================
// Example 5: Light Template
// ============================================
export function LightExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="light"
    />
  );
}

// ============================================
// Example 6: Wide Template
// ============================================
export function WideExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="wide"
    />
  );
}

// ============================================
// Example 7: Spooky Template
// ============================================
export function SpookyExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="spooky"
    />
  );
}

// ============================================
// Example 8: Custom Template Configuration
// ============================================
export function CustomTemplateExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template={{
        name: 'Custom',
        description: 'My custom template',
        variant: 'modern',
        sidebarWidth: 350,
        showSearch: true,
        showBreadcrumbs: true,
        contentMaxWidth: 1200,
        sidebarStyle: 'elevated',
        contentStyle: 'elevated',
      }}
    />
  );
}

// ============================================
// Example 9: With Search and Breadcrumbs
// ============================================
export function WithFeaturesExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

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

// ============================================
// Example 10: With Custom Header and Footer
// ============================================
export function WithHeaderFooterExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={setCurrentPath}
      template="modern"
      header={
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <h2>Custom Header</h2>
          <p>This is a custom header component</p>
        </div>
      }
      footer={
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }}>
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      }
    />
  );
}

// ============================================
// Example 11: Complete Real-World Example
// ============================================
export function CompleteExample() {
  const [currentPath, setCurrentPath] = useState('getting-started/installation');

  // Load content based on path
  const docsContent: Record<string, string> = {
    'getting-started/installation': `# Installation

Install the package:

\`\`\`bash
npm install @ameshkin/markdown-handler
\`\`\`
`,
    'getting-started/quick-start': `# Quick Start

Get started in minutes!
`,
    'api': `# API Reference

Complete API documentation.
`,
  };

  const content = docsContent[currentPath] || '# Page Not Found';

  return (
    <MarkdownDocsViewer
      tree={tree}
      content={content}
      currentPath={currentPath}
      onDocClick={(path) => {
        setCurrentPath(path);
        // In a real app, you might fetch content here
      }}
      template="modern"
      enableSearch={true}
      enableBreadcrumbs={true}
      sidebarTitle="My Documentation"
    />
  );
}

