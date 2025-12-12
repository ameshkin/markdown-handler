/**
 * Markdown Docs Viewer Component
 * 
 * Displays markdown documentation with left navigation and right content panel
 */

'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
  Collapse,
  ThemeProvider,
  useTheme,
  createTheme,
  IconButton,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
// All icons use Outlined variants for consistency
import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  DescriptionOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  ContentCopyOutlined,
  CheckOutlined,
} from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { DocNode, MarkdownDocsViewerProps, TemplateConfig } from '../types';
import type { Components } from 'react-markdown';
import { getTemplate } from '../templates';
import { SearchBar } from './SearchBar';
import { Breadcrumbs } from './Breadcrumbs';

interface DocTreeItemProps {
  node: DocNode;
  currentPath?: string;
  level?: number;
  onDocClick?: (path: string) => void;
}

function DocTreeItem({ node, currentPath, level = 0, onDocClick }: DocTreeItemProps) {
  const [open, setOpen] = useState(level < 2); // Auto-expand first 2 levels
  const isSelected = currentPath === node.path;
  const hasChildren = node.children && node.children.length > 0;

  const handleClick = (e: React.MouseEvent) => {
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

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleClick}
          selected={isSelected}
          component="div"
          sx={{
            pl: level * 2 + 2,
            py: 0.5,
            cursor: 'pointer',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
            {hasChildren ? (
              open ? <FolderOpenOutlined fontSize="small" /> : <FolderOutlined fontSize="small" />
            ) : (
              <DescriptionOutlined fontSize="small" />
            )}
            <ListItemText
              primary={node.name}
              primaryTypographyProps={{
                fontSize: '0.875rem',
              }}
            />
            {hasChildren && (open ? <ExpandLessOutlined fontSize="small" /> : <ExpandMoreOutlined fontSize="small" />)}
          </Box>
        </ListItemButton>
      </ListItem>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children!.map((child) => (
              <DocTreeItem
                key={child.path}
                node={child}
                currentPath={currentPath}
                level={level + 1}
                onDocClick={onDocClick}
              />
            ))}
          </List>
        </Collapse>
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
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Determine syntax highlighter theme based on MUI theme mode
  const isDark = theme.palette.mode === 'dark';
  const syntaxTheme = isDark ? vscDarkPlus : oneLight;

  return (
    <Box
      sx={{
        position: 'relative',
        mb: 2,
        borderRadius: 1,
        overflow: 'hidden',
        border: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.5,
          py: 0.5,
          borderBottom: 1,
          bgcolor: 'action.hover',
        }}
      >
        <Chip
          label={language}
          size="small"
          sx={{
            height: 20,
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        />
        <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              width: 28,
              height: 28,
            }}
          >
            {copied ? (
              <CheckOutlined sx={{ fontSize: 16, color: 'success.main' }} />
            ) : (
              <ContentCopyOutlined sx={{ fontSize: 16 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <SyntaxHighlighter
        language={language}
        style={syntaxTheme}
        PreTag="div"
        customStyle={{
          margin: 0,
          padding: theme.spacing(2),
          backgroundColor: 'transparent',
          fontSize: '0.875rem',
        }}
        {...props}
      >
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
}

export function MarkdownDocsViewer({
  tree,
  content,
  currentPath = '',
  onDocClick,
  sidebarTitle = 'Documentation',
  sidebarWidth,
  theme: themeProp,
  template,
  enableSearch,
  enableBreadcrumbs,
  header,
  footer,
  sx,
  sidebarSx,
  contentSx,
  onLinkClick,
}: MarkdownDocsViewerProps) {
  // Get theme from context (will use default if no ThemeProvider exists)
  const contextTheme = useTheme();
  
  // Resolve template configuration
  const templateConfig = useMemo<TemplateConfig | null>(() => {
    if (!template) return null;
    
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
  const [filteredTree, setFilteredTree] = useState<DocNode[]>(tree);
  
  // Update filtered tree when tree changes
  useMemo(() => {
    setFilteredTree(tree);
  }, [tree]);

  // Custom components for react-markdown
  const markdownComponents: Components = useMemo(() => ({
    code({ node, className, children, ...props }) {
      const isInline = !className || !className.includes('language-');
      if (isInline) {
        return (
          <Box
            component="code"
            sx={{
              px: 0.5,
              py: 0.25,
              borderRadius: 0.5,
              fontFamily: 'monospace',
              fontSize: '0.875em',
              bgcolor: 'action.selected',
            }}
          >
            {children}
          </Box>
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
      
      return (
        <Box
          component="a"
          href={href}
          onClick={handleClick}
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
          {...(props as any)}
        >
          {children}
        </Box>
      );
    },
    table({ children }) {
      return (
        <TableContainer sx={{ mb: 2, overflowX: 'auto' }}>
          <Table size="small" sx={{ minWidth: 650 }}>
            {children}
          </Table>
        </TableContainer>
      );
    },
    thead({ children }) {
      return <TableHead>{children}</TableHead>;
    },
    tbody({ children }) {
      return <TableBody>{children}</TableBody>;
    },
    tr({ children }) {
      return <TableRow>{children}</TableRow>;
    },
    th({ children }) {
      return (
        <TableCell component="th" sx={{ fontWeight: 600 }}>
          {children}
        </TableCell>
      );
    },
    td({ children }) {
      return <TableCell>{children}</TableCell>;
    },
  }), [onDocClick, onLinkClick]);

  // Determine Paper elevation based on style
  const getElevation = (style: string) => {
    if (style === 'elevated') return 2;
    if (style === 'outlined') return 0;
    return 0;
  };
  
  // Determine border style
  const getBorderStyle = (style: string) => {
    if (style === 'outlined') return 1;
    return 0;
  };

  const contentComponent = (
    <Box
      sx={[
        {
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: `${finalSidebarWidth}px 1fr` },
          minHeight: '100vh',
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {/* Sidebar */}
      <Paper
        elevation={getElevation(sidebarStyle)}
        sx={[
          {
            p: 2,
            borderRadius: sidebarStyle === 'elevated' ? 1 : 0,
            borderRight: getBorderStyle(sidebarStyle),
            overflow: 'auto',
            maxHeight: '100vh',
            position: 'sticky',
            top: 0,
          },
          ...(Array.isArray(sidebarSx) ? sidebarSx : sidebarSx ? [sidebarSx] : []),
        ]}
      >
        <Typography variant="h6" gutterBottom>
          {sidebarTitle}
        </Typography>
        
        {showSearch && (
          <SearchBar 
            tree={tree} 
            onFilterChange={setFilteredTree}
          />
        )}
        
        <List dense>
          {filteredTree.map((node) => (
            <DocTreeItem
              key={node.path}
              node={node}
              currentPath={currentPath}
              onDocClick={onDocClick}
            />
          ))}
        </List>
      </Paper>

      {/* Content */}
      <Box
        sx={{
          p: 4,
          maxWidth: contentMaxWidth === 'full' ? '100%' : contentMaxWidth,
          mx: contentMaxWidth === 'full' ? 0 : 'auto',
          width: '100%',
        }}
      >
        {header && (
          <Box sx={{ mb: 2 }}>
            {header}
          </Box>
        )}
        
        {showBreadcrumbs && (
          <Breadcrumbs
            tree={tree}
            currentPath={currentPath}
            onPathClick={onDocClick}
          />
        )}
        
        <Paper
          elevation={getElevation(contentStyle)}
          sx={[
            {
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
            },
            ...(Array.isArray(contentSx) ? contentSx : contentSx ? [contentSx] : []),
          ]}
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {content}
          </ReactMarkdown>
        </Paper>
        
        {footer && (
          <Box sx={{ mt: 2 }}>
            {footer}
          </Box>
        )}
      </Box>
    </Box>
  );

  // If a theme prop is provided (including 'default'), wrap in ThemeProvider
  // Otherwise, use the context theme directly (or default if no context)
  if (themeProp) {
    return <ThemeProvider theme={activeTheme}>{contentComponent}</ThemeProvider>;
  }

  return contentComponent;
}
