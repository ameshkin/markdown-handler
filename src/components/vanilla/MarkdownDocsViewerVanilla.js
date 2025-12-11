/**
 * Vanilla Markdown Docs Viewer Component (No MUI Required)
 *
 * Displays markdown documentation with left navigation and right content panel
 * Uses plain React and CSS - no Material-UI dependencies
 */
'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SearchBarVanilla } from './SearchBarVanilla';
import { BreadcrumbsVanilla } from './BreadcrumbsVanilla';
import './vanilla-styles.css';
function DocTreeItem({ node, currentPath, level = 0, onDocClick }) {
    const [open, setOpen] = useState(level < 2);
    const isSelected = currentPath === node.path;
    const hasChildren = node.children && node.children.length > 0;
    const handleClick = (e) => {
        if (node.isFile) {
            if (onDocClick) {
                onDocClick(node.path);
            }
        }
        else if (hasChildren) {
            e.stopPropagation();
            setOpen(!open);
        }
        else if (!node.isFile && onDocClick) {
            onDocClick(node.path);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("li", { className: "mdh-tree-item", children: _jsxs("button", { className: `mdh-tree-button ${isSelected ? 'mdh-selected' : ''}`, onClick: handleClick, style: { paddingLeft: `${level * 16 + 16}px` }, children: [_jsx("span", { className: "mdh-tree-icon", children: hasChildren ? (open ? '📂' : '📁') : '📄' }), _jsx("span", { className: "mdh-tree-text", children: node.name }), hasChildren && (_jsx("span", { className: "mdh-tree-arrow", children: open ? '▼' : '▶' }))] }) }), hasChildren && (_jsx("ul", { className: `mdh-tree-children ${open ? 'mdh-open' : 'mdh-closed'}`, children: node.children.map((child) => (_jsx(DocTreeItem, { node: child, currentPath: currentPath, level: level + 1, onDocClick: onDocClick }, child.path))) }))] }));
}
// Code block component with copy button and language label
function CodeBlock({ children, className, ...props }) {
    const [copied, setCopied] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';
    const codeString = String(children).replace(/\n$/, '');
    // Detect dark mode from system preference
    useMemo(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDark(mediaQuery.matches);
            const handler = (e) => setIsDark(e.matches);
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        }
    }, []);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (err) {
            console.error('Failed to copy code:', err);
        }
    };
    const syntaxTheme = isDark ? vscDarkPlus : oneLight;
    return (_jsxs("div", { className: "mdh-code-block", children: [_jsxs("div", { className: "mdh-code-header", children: [_jsx("span", { className: "mdh-code-language", children: language.toUpperCase() }), _jsx("button", { className: "mdh-code-copy", onClick: handleCopy, title: copied ? 'Copied!' : 'Copy code', children: copied ? '✓' : '📋' })] }), _jsx(SyntaxHighlighter, { language: language, style: syntaxTheme, PreTag: "div", customStyle: {
                    margin: 0,
                    padding: '16px',
                    backgroundColor: 'transparent',
                    fontSize: '0.875rem',
                }, ...props, children: codeString })] }));
}
export function MarkdownDocsViewerVanilla({ tree, content, currentPath = '', onDocClick, sidebarTitle = 'Documentation', sidebarWidth = 280, enableSearch = false, enableBreadcrumbs = false, header, footer, }) {
    const [filteredTree, setFilteredTree] = useState(tree);
    useMemo(() => {
        setFilteredTree(tree);
    }, [tree]);
    // Custom components for react-markdown
    const markdownComponents = useMemo(() => ({
        code({ node, className, children, ...props }) {
            const isInline = !className || !className.includes('language-');
            if (isInline) {
                return (_jsx("code", { className: "mdh-inline-code", ...props, children: children }));
            }
            return (_jsx(CodeBlock, { className: className, ...props, children: children }));
        },
        a({ href, children, ...props }) {
            const handleClick = (e) => {
                // If it's an internal link, handle it
                if (href && (href.startsWith('#') || !href.startsWith('http'))) {
                    e.preventDefault();
                    if (onDocClick) {
                        const path = href.startsWith('#') ? href.slice(1) : href;
                        onDocClick(path);
                    }
                }
            };
            return (_jsx("a", { href: href, onClick: handleClick, className: "mdh-link", ...props, children: children }));
        },
        table({ children }) {
            return (_jsx("div", { className: "mdh-table-container", children: _jsx("table", { className: "mdh-table", children: children }) }));
        },
        thead({ children }) {
            return _jsx("thead", { children: children });
        },
        tbody({ children }) {
            return _jsx("tbody", { children: children });
        },
        tr({ children }) {
            return _jsx("tr", { children: children });
        },
        th({ children }) {
            return _jsx("th", { className: "mdh-table-header", children: children });
        },
        td({ children }) {
            return _jsx("td", { children: children });
        },
    }), []);
    return (_jsxs("div", { className: "mdh-container", style: { '--sidebar-width': `${sidebarWidth}px` }, children: [_jsxs("aside", { className: "mdh-sidebar", children: [_jsx("h2", { className: "mdh-sidebar-title", children: sidebarTitle }), enableSearch && (_jsx(SearchBarVanilla, { tree: tree, onFilterChange: setFilteredTree })), _jsx("ul", { className: "mdh-tree", children: filteredTree.map((node) => (_jsx(DocTreeItem, { node: node, currentPath: currentPath, onDocClick: onDocClick }, node.path))) })] }), _jsxs("main", { className: "mdh-content", children: [header && (_jsx("div", { className: "mdh-header", children: header })), enableBreadcrumbs && (_jsx(BreadcrumbsVanilla, { tree: tree, currentPath: currentPath, onPathClick: onDocClick })), _jsx("article", { className: "mdh-article", children: _jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], components: markdownComponents, children: content }) }), footer && (_jsx("div", { className: "mdh-footer", children: footer }))] })] }));
}
