/**
 * Breadcrumbs component for navigation
 */

import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box, SxProps, Theme } from '@mui/material';
import { ChevronRightOutlined } from '@mui/icons-material';
import type { DocNode } from '../types';

interface BreadcrumbsProps {
  tree: DocNode[];
  currentPath: string;
  onPathClick?: (path: string) => void;
  sx?: SxProps<Theme>;
}

function findPathInTree(
  nodes: DocNode[],
  targetPath: string,
  currentPath: DocNode[] = []
): DocNode[] | null {
  for (const node of nodes) {
    const newPath = [...currentPath, node];
    
    if (node.path === targetPath) {
      return newPath;
    }
    
    if (node.children) {
      const found = findPathInTree(node.children, targetPath, newPath);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export function Breadcrumbs({ tree, currentPath, onPathClick, sx }: BreadcrumbsProps) {
  const pathNodes = findPathInTree(tree, currentPath) || [];

  if (pathNodes.length === 0) {
    return null;
  }

  return (
    <Box sx={[{ mb: 2 }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      <MuiBreadcrumbs
        separator={<ChevronRightOutlined fontSize="small" />}
        aria-label="breadcrumb"
      >
        {pathNodes.map((node, index) => {
          const isLast = index === pathNodes.length - 1;
          
          if (isLast) {
            return (
              <Typography key={node.path} color="text.primary" variant="body2">
                {node.name}
              </Typography>
            );
          }
          
          return (
            <Link
              key={node.path}
              component="button"
              variant="body2"
              onClick={() => onPathClick?.(node.path)}
              sx={{
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {node.name}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}

