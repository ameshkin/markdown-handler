/**
 * Markdown Docs Viewer Component
 *
 * Displays markdown documentation with left navigation and right content panel
 */
'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography, Paper, Collapse, ThemeProvider, useTheme, createTheme, IconButton, Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, } from '@mui/material';
// All icons use Outlined variants for consistency
import { ExpandLessOutlined, ExpandMoreOutlined, DescriptionOutlined, FolderOutlined, FolderOpenOutlined, ContentCopyOutlined, CheckOutlined, } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getTemplate } from '../templates';
import { SearchBar } from './SearchBar';
import { Breadcrumbs } from './Breadcrumbs';
function DocTreeItem({ node, currentPath, level = 0, onDocClick }) {
    const [open, setOpen] = useState(level < 2); // Auto-expand first 2 levels
    const isSelected = currentPath === node.path;
    const hasChildren = node.children && node.children.length > 0;
    const handleClick = (e) => {
        // console.log('DocTreeItem clicked:', node.name, node.path, 'isFile:', node.isFile, 'hasChildren:', hasChildren);
        // If it's a file, always navigate
        if (node.isFile) {
            e.preventDefault();
            e.stopPropagation();
            // console.log('Calling onDocClick for file:', node.path);
            if (onDocClick) {
                onDocClick(node.path);
            }
            // else {
            //   console.warn('onDocClick is not defined!');
            // }
            return;
        }
        // For folders with children, toggle open state only
        if (hasChildren) {
            e.preventDefault();
            e.stopPropagation();
            // console.log('Toggling folder:', node.path, 'from', open, 'to', !open);
            setOpen(!open);
            return;
        }
        // Allow folders without children to be clickable
        if (onDocClick && !node.isFile && !hasChildren) {
            e.preventDefault();
            e.stopPropagation();
            // console.log('Calling onDocClick for folder without children:', node.path);
            onDocClick(node.path);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(ListItem, { disablePadding: true, children: _jsx(ListItemButton, { onClick: handleClick, selected: isSelected, component: "div", sx: {
                        pl: level * 2 + 2,
                        py: 0.5,
                        cursor: 'pointer',
                    }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, width: '100%' }, children: [hasChildren ? (open ? _jsx(FolderOpenOutlined, { fontSize: "small" }) : _jsx(FolderOutlined, { fontSize: "small" })) : (_jsx(DescriptionOutlined, { fontSize: "small" })), _jsx(ListItemText, { primary: node.name, primaryTypographyProps: {
                                    fontSize: '0.875rem',
                                } }), hasChildren && (open ? _jsx(ExpandLessOutlined, { fontSize: "small" }) : _jsx(ExpandMoreOutlined, { fontSize: "small" }))] }) }) }), hasChildren && (_jsx(Collapse, { in: open, timeout: "auto", unmountOnExit: true, children: _jsx(List, { component: "div", disablePadding: true, children: node.children.map((child) => (_jsx(DocTreeItem, { node: child, currentPath: currentPath, level: level + 1, onDocClick: onDocClick }, child.path))) }) }))] }));
}
// Code block component with copy button and language label
function CodeBlock({ children, className, ...props }) {
    const theme = useTheme();
    const [copied, setCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';
    const codeString = String(children).replace(/\n$/, '');
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
    // Determine syntax highlighter theme based on MUI theme mode
    const isDark = theme.palette.mode === 'dark';
    const syntaxTheme = isDark ? vscDarkPlus : oneLight;
    return (_jsxs(Box, { sx: {
            position: 'relative',
            mb: 2,
            borderRadius: 1,
            overflow: 'hidden',
            border: 1,
        }, children: [_jsxs(Box, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 1.5,
                    py: 0.5,
                    borderBottom: 1,
                    bgcolor: 'action.hover',
                }, children: [_jsx(Chip, { label: language, size: "small", sx: {
                            height: 20,
                            fontSize: '0.75rem',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                        } }), _jsx(Tooltip, { title: copied ? 'Copied!' : 'Copy code', children: _jsx(IconButton, { size: "small", onClick: handleCopy, sx: {
                                width: 28,
                                height: 28,
                            }, children: copied ? (_jsx(CheckOutlined, { sx: { fontSize: 16, color: 'success.main' } })) : (_jsx(ContentCopyOutlined, { sx: { fontSize: 16 } })) }) })] }), _jsx(SyntaxHighlighter, { language: language, style: syntaxTheme, PreTag: "div", customStyle: {
                    margin: 0,
                    padding: theme.spacing(2),
                    backgroundColor: 'transparent',
                    fontSize: '0.875rem',
                }, ...props, children: codeString })] }));
}
export function MarkdownDocsViewer({ tree, content, currentPath = '', onDocClick, sidebarTitle = 'Documentation', sidebarWidth, theme: themeProp, template, enableSearch, enableBreadcrumbs, header, footer, sx, onLinkClick, }) {
    // Get theme from context (will use default if no ThemeProvider exists)
    const contextTheme = useTheme();
    // Resolve template configuration
    const templateConfig = useMemo(() => {
        if (!template)
            return null;
        if (typeof template === 'string') {
            return getTemplate(template) || null;
        }
        return template;
    }, [template]);
    // Determine which theme to use
    const activeTheme = useMemo(() => {
        // Template theme takes precedence
        if (templateConfig?.theme) {
            if (templateConfig.theme === 'default') {
                return createTheme();
            }
            return templateConfig.theme;
        }
        if (themeProp === 'default') {
            return createTheme();
        }
        if (themeProp) {
            return themeProp;
        }
        // If no theme prop, use context theme (assumes parent has ThemeProvider)
        return contextTheme;
    }, [themeProp, contextTheme, templateConfig]);
    // Apply template settings
    const finalSidebarWidth = sidebarWidth ?? templateConfig?.sidebarWidth ?? 280;
    const showSearch = enableSearch ?? templateConfig?.showSearch ?? false;
    const showBreadcrumbs = enableBreadcrumbs ?? templateConfig?.showBreadcrumbs ?? false;
    const sidebarStyle = templateConfig?.sidebarStyle ?? 'flat';
    const contentStyle = templateConfig?.contentStyle ?? 'flat';
    const contentMaxWidth = templateConfig?.contentMaxWidth ?? 900;
    // Filtered tree for search
    const [filteredTree, setFilteredTree] = useState(tree);
    // Update filtered tree when tree changes
    useMemo(() => {
        setFilteredTree(tree);
    }, [tree]);
    // Custom components for react-markdown
    const markdownComponents = useMemo(() => ({
        code({ node, className, children, ...props }) {
            const isInline = !className || !className.includes('language-');
            if (isInline) {
                return (_jsx(Box, { component: "code", sx: {
                        px: 0.5,
                        py: 0.25,
                        borderRadius: 0.5,
                        fontFamily: 'monospace',
                        fontSize: '0.875em',
                        bgcolor: 'action.selected',
                    }, children: children }));
            }
            return (_jsx(CodeBlock, { className: className, ...props, children: children }));
        },
        a({ href, children, ...props }) {
            const handleClick = (e) => {
                // If it's an internal link (starts with # or relative path), handle it
                if (href && (href.startsWith('#') || !href.startsWith('http'))) {
                    e.preventDefault();
                    // Try to find the path in the tree
                    if (onDocClick) {
                        const path = href.startsWith('#') ? href.slice(1) : href;
                        onDocClick(path);
                    }
                }
                // Call custom link handler if provided
                if (onLinkClick && href) {
                    onLinkClick(href, e);
                }
            };
            return (_jsx(Box, { component: "a", href: href, onClick: handleClick, sx: {
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                }, ...props, children: children }));
        },
        table({ children }) {
            return (_jsx(TableContainer, { sx: { mb: 2, overflowX: 'auto' }, children: _jsx(Table, { size: "small", sx: { minWidth: 650 }, children: children }) }));
        },
        thead({ children }) {
            return _jsx(TableHead, { children: children });
        },
        tbody({ children }) {
            return _jsx(TableBody, { children: children });
        },
        tr({ children }) {
            return _jsx(TableRow, { children: children });
        },
        th({ children }) {
            return (_jsx(TableCell, { component: "th", sx: { fontWeight: 600 }, children: children }));
        },
        td({ children }) {
            return _jsx(TableCell, { children: children });
        },
    }), [onDocClick, onLinkClick]);
    // Determine Paper elevation based on style
    const getElevation = (style) => {
        if (style === 'elevated')
            return 2;
        if (style === 'outlined')
            return 0;
        return 0;
    };
    // Determine border style
    const getBorderStyle = (style) => {
        if (style === 'outlined')
            return 1;
        return 0;
    };
    const contentComponent = (_jsxs(Box, { sx: [
            {
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: `${finalSidebarWidth}px 1fr` },
                minHeight: '100vh',
            },
            ...(Array.isArray(sx) ? sx : [sx]),
        ], children: [_jsxs(Paper, { elevation: getElevation(sidebarStyle), sx: {
                    p: 2,
                    borderRadius: sidebarStyle === 'elevated' ? 1 : 0,
                    borderRight: getBorderStyle(sidebarStyle),
                    overflow: 'auto',
                    maxHeight: '100vh',
                    position: 'sticky',
                    top: 0,
                }, children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: sidebarTitle }), showSearch && (_jsx(SearchBar, { tree: tree, onFilterChange: setFilteredTree })), _jsx(List, { dense: true, children: filteredTree.map((node) => (_jsx(DocTreeItem, { node: node, currentPath: currentPath, onDocClick: onDocClick }, node.path))) })] }), _jsxs(Box, { sx: {
                    p: 4,
                    maxWidth: contentMaxWidth === 'full' ? '100%' : contentMaxWidth,
                    mx: contentMaxWidth === 'full' ? 0 : 'auto',
                    width: '100%',
                }, children: [header && (_jsx(Box, { sx: { mb: 2 }, children: header })), showBreadcrumbs && (_jsx(Breadcrumbs, { tree: tree, currentPath: currentPath, onPathClick: onDocClick })), _jsx(Paper, { elevation: getElevation(contentStyle), sx: {
                            p: 4,
                            border: getBorderStyle(contentStyle),
                            borderRadius: contentStyle === 'elevated' ? 1 : 0,
                            '& h1': {
                                mb: 2,
                                borderBottom: 1,
                                pb: 2,
                            },
                            '& h2': {
                                mt: 4,
                                mb: 2,
                            },
                            '& h3': {
                                mt: 3,
                                mb: 1.5,
                            },
                            '& ul, & ol': {
                                pl: 3,
                                mb: 2,
                            },
                            '& li': {
                                mb: 0.5,
                            },
                            '& p': {
                                mb: 2,
                                lineHeight: 1.7,
                            },
                            '& blockquote': {
                                borderLeft: 3,
                                pl: 2,
                                ml: 0,
                                fontStyle: 'italic',
                            },
                        }, children: _jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], components: markdownComponents, children: content }) }), footer && (_jsx(Box, { sx: { mt: 2 }, children: footer }))] })] }));
    // If a theme prop is provided (including 'default'), wrap in ThemeProvider
    // Otherwise, use the context theme directly (or default if no context)
    if (themeProp) {
        return _jsx(ThemeProvider, { theme: activeTheme, children: contentComponent });
    }
    return contentComponent;
}
