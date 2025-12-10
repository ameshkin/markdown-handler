/**
 * Markdown Docs Viewer Component
 * 
 * Displays markdown documentation with left navigation and right content panel
 */

'use client';

import { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
  Collapse,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Description,
  Folder,
  FolderOpen,
} from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { DocNode, MarkdownDocsViewerProps } from '../types';

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

  const handleClick = () => {
    if (node.isFile && onDocClick) {
      onDocClick(node.path);
    } else if (!node.isFile) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItem disablePadding sx={{ pl: level * 2 }}>
        <ListItemButton
          onClick={handleClick}
          selected={isSelected}
          sx={{
            py: 0.5,
            '&.Mui-selected': {
              bgcolor: 'action.selected',
              '&:hover': {
                bgcolor: 'action.selected',
              },
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
            {hasChildren ? (
              open ? <FolderOpen fontSize="small" /> : <Folder fontSize="small" />
            ) : (
              <Description fontSize="small" />
            )}
            <ListItemText
              primary={node.name}
              primaryTypographyProps={{
                fontSize: '0.875rem',
                fontWeight: isSelected ? 600 : 400,
              }}
            />
            {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
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

export function MarkdownDocsViewer({
  tree,
  content,
  currentPath = '',
  onDocClick,
  sidebarTitle = 'Documentation',
  sidebarWidth = 280,
}: MarkdownDocsViewerProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: `${sidebarWidth}px 1fr` },
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      {/* Sidebar */}
      <Paper
        sx={{
          p: 2,
          borderRadius: 0,
          borderRight: 1,
          borderColor: 'divider',
          overflow: 'auto',
          maxHeight: '100vh',
          position: 'sticky',
          top: 0,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {sidebarTitle}
        </Typography>
        <List dense>
          {tree.map((node) => (
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
          maxWidth: '900px',
          mx: 'auto',
          width: '100%',
        }}
      >
        <Paper
          sx={{
            p: 4,
            '& h1': {
              fontSize: '2.5rem',
              fontWeight: 700,
              mb: 2,
              borderBottom: 1,
              borderColor: 'divider',
              pb: 2,
            },
            '& h2': {
              fontSize: '2rem',
              fontWeight: 600,
              mt: 4,
              mb: 2,
            },
            '& h3': {
              fontSize: '1.5rem',
              fontWeight: 600,
              mt: 3,
              mb: 1.5,
            },
            '& code': {
              bgcolor: 'action.selected',
              px: 0.5,
              py: 0.25,
              borderRadius: 0.5,
              fontFamily: 'monospace',
              fontSize: '0.875em',
            },
            '& pre': {
              bgcolor: 'background.paper',
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              p: 2,
              overflow: 'auto',
              '& code': {
                bgcolor: 'transparent',
                p: 0,
              },
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
              borderColor: 'primary.main',
              pl: 2,
              ml: 0,
              fontStyle: 'italic',
              color: 'text.secondary',
            },
            '& table': {
              width: '100%',
              borderCollapse: 'collapse',
              mb: 2,
            },
            '& th, & td': {
              border: 1,
              borderColor: 'divider',
              p: 1,
            },
            '& th': {
              bgcolor: 'action.selected',
              fontWeight: 600,
            },
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </Paper>
      </Box>
    </Box>
  );
}
