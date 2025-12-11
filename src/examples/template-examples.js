import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Complete Examples for All Templates
 *
 * Copy and paste these examples to use different templates
 */
import { useState } from 'react';
import { MarkdownDocsViewer } from '../components/MarkdownDocsViewer';
// Sample tree structure
const tree = [
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
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "minimal" }));
}
// ============================================
// Example 2: Modern Template
// ============================================
export function ModernExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "modern" }));
}
// ============================================
// Example 3: Classic Template
// ============================================
export function ClassicExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "classic" }));
}
// ============================================
// Example 4: Dark Template
// ============================================
export function DarkExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "dark" }));
}
// ============================================
// Example 5: Compact Template
// ============================================
export function CompactExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "compact" }));
}
// ============================================
// Example 6: Wide Template
// ============================================
export function WideExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "wide" }));
}
// ============================================
// Example 7: Centered Template
// ============================================
export function CenteredExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "centered" }));
}
// ============================================
// Example 8: Custom Template Configuration
// ============================================
export function CustomTemplateExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: {
            name: 'Custom',
            description: 'My custom template',
            variant: 'modern',
            sidebarWidth: 350,
            showSearch: true,
            showBreadcrumbs: true,
            contentMaxWidth: 1200,
            sidebarStyle: 'elevated',
            contentStyle: 'elevated',
        } }));
}
// ============================================
// Example 9: With Search and Breadcrumbs
// ============================================
export function WithFeaturesExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "modern", enableSearch: true, enableBreadcrumbs: true }));
}
// ============================================
// Example 10: With Custom Header and Footer
// ============================================
export function WithHeaderFooterExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: setCurrentPath, template: "modern", header: _jsxs("div", { style: { padding: '16px', background: '#f5f5f5', borderRadius: '8px' }, children: [_jsx("h2", { children: "Custom Header" }), _jsx("p", { children: "This is a custom header component" })] }), footer: _jsx("div", { style: { padding: '16px', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }, children: _jsx("p", { children: "\u00A9 2024 Your Company. All rights reserved." }) }) }));
}
// ============================================
// Example 11: Complete Real-World Example
// ============================================
export function CompleteExample() {
    const [currentPath, setCurrentPath] = useState('getting-started/installation');
    // Load content based on path
    const docsContent = {
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
    return (_jsx(MarkdownDocsViewer, { tree: tree, content: content, currentPath: currentPath, onDocClick: (path) => {
            setCurrentPath(path);
            // In a real app, you might fetch content here
        }, template: "modern", enableSearch: true, enableBreadcrumbs: true, sidebarTitle: "My Documentation" }));
}
