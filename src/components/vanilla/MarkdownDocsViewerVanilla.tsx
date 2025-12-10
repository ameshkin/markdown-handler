/**
 * Vanilla Markdown Docs Viewer Component (No MUI Required)
 * 
 * Displays markdown documentation with left navigation and right content panel
 * Uses plain React and CSS - no Material-UI dependencies
 */

'use client';

import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { DocNode, MarkdownDocsViewerProps } from '../../types';
import type { Components } from 'react-markdown';
import { SearchBarVanilla } from './SearchBarVanilla';
import { BreadcrumbsVanilla } from './BreadcrumbsVanilla';
import './vanilla-styles.css';

interface DocTreeItemProps {
  node: DocNode;
  currentPath?: string;
  level?: number;
  onDocClick?: (path: string) => void;
}

function DocTreeItem({ node, currentPath, level = 0, onDocClick }: DocTreeItemProps) {
  const [open, setOpen] = useState(level < 2);
  const isSelected = currentPath === node.path;
  const hasChildren = node.children && node.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (node.isFile) {
      if (onDocClick) {
        onDocClick(node.path);
      }
    } else if (hasChildren) {
      e.stopPropagation();
      setOpen(!open);
    } else if (!node.isFile && onDocClick) {
      onDocClick(node.path);
    }
  };

  return (
    <>
      <li className="mdh-tree-item">
        <button
          className={`mdh-tree-button ${isSelected ? 'mdh-selected' : ''}`}
          onClick={handleClick}
          style={{ paddingLeft: `${level * 16 + 16}px` }}
        >
          <span className="mdh-tree-icon">
            {hasChildren ? (open ? '📂' : '📁') : '📄'}
          </span>
          <span className="mdh-tree-text">{node.name}</span>
          {hasChildren && (
            <span className="mdh-tree-arrow">{open ? '▼' : '▶'}</span>
          )}
        </button>
      </li>
      {hasChildren && (
        <ul className={`mdh-tree-children ${open ? 'mdh-open' : 'mdh-closed'}`}>
          {node.children!.map((child) => (
            <DocTreeItem
              key={child.path}
              node={child}
              currentPath={currentPath}
              level={level + 1}
              onDocClick={onDocClick}
            />
          ))}
        </ul>
      )}
    </>
  );
}

// Code block component with copy button and language label
function CodeBlock({ 
  children, 
  className, 
  ...props 
}: { 
  children?: React.ReactNode; 
  className?: string;
  [key: string]: unknown;
}) {
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
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const syntaxTheme = isDark ? vscDarkPlus : oneLight;

  return (
    <div className="mdh-code-block">
      <div className="mdh-code-header">
        <span className="mdh-code-language">{language.toUpperCase()}</span>
        <button
          className="mdh-code-copy"
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? '✓' : '📋'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={syntaxTheme}
        PreTag="div"
        customStyle={{
          margin: 0,
          padding: '16px',
          backgroundColor: 'transparent',
          fontSize: '0.875rem',
        }}
        {...props}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export function MarkdownDocsViewerVanilla({
  tree,
  content,
  currentPath = '',
  onDocClick,
  sidebarTitle = 'Documentation',
  sidebarWidth = 280,
  enableSearch = false,
  enableBreadcrumbs = false,
  header,
  footer,
}: MarkdownDocsViewerProps) {
  const [filteredTree, setFilteredTree] = useState<DocNode[]>(tree);

  useMemo(() => {
    setFilteredTree(tree);
  }, [tree]);

  // Custom components for react-markdown
  const markdownComponents: Components = useMemo(() => ({
    code({ node, className, children, ...props }) {
      const isInline = !className || !className.includes('language-');
      if (isInline) {
        return (
          <code className="mdh-inline-code" {...props}>
            {children}
          </code>
        );
      }
      return (
        <CodeBlock className={className} {...props}>
          {children}
        </CodeBlock>
      );
    },
    a({ href, children, ...props }) {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // If it's an internal link, handle it
        if (href && (href.startsWith('#') || !href.startsWith('http'))) {
          e.preventDefault();
          if (onDocClick) {
            const path = href.startsWith('#') ? href.slice(1) : href;
            onDocClick(path);
          }
        }
      };
      
      return (
        <a
          href={href}
          onClick={handleClick}
          className="mdh-link"
          {...props}
        >
          {children}
        </a>
      );
    },
    table({ children }) {
      return (
        <div className="mdh-table-container">
          <table className="mdh-table">{children}</table>
        </div>
      );
    },
    thead({ children }) {
      return <thead>{children}</thead>;
    },
    tbody({ children }) {
      return <tbody>{children}</tbody>;
    },
    tr({ children }) {
      return <tr>{children}</tr>;
    },
    th({ children }) {
      return <th className="mdh-table-header">{children}</th>;
    },
    td({ children }) {
      return <td>{children}</td>;
    },
  }), []);

  return (
    <div className="mdh-container" style={{ '--sidebar-width': `${sidebarWidth}px` } as React.CSSProperties}>
      {/* Sidebar */}
      <aside className="mdh-sidebar">
        <h2 className="mdh-sidebar-title">{sidebarTitle}</h2>
        
        {enableSearch && (
          <SearchBarVanilla tree={tree} onFilterChange={setFilteredTree} />
        )}
        
        <ul className="mdh-tree">
          {filteredTree.map((node) => (
            <DocTreeItem
              key={node.path}
              node={node}
              currentPath={currentPath}
              onDocClick={onDocClick}
            />
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="mdh-content">
        {header && (
          <div className="mdh-header">
            {header}
          </div>
        )}
        
        {enableBreadcrumbs && (
          <BreadcrumbsVanilla
            tree={tree}
            currentPath={currentPath}
            onPathClick={onDocClick}
          />
        )}
        
        <article className="mdh-article">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {content}
          </ReactMarkdown>
        </article>
        
        {footer && (
          <div className="mdh-footer">
            {footer}
          </div>
        )}
      </main>
    </div>
  );
}

