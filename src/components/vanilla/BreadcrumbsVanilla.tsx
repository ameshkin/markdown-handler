/**
 * Vanilla Breadcrumbs Component (No MUI Required)
 */

import type { DocNode } from '../../types';

interface BreadcrumbsVanillaProps {
  tree: DocNode[];
  currentPath: string;
  onPathClick?: (path: string) => void;
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

export function BreadcrumbsVanilla({ tree, currentPath, onPathClick }: BreadcrumbsVanillaProps) {
  const pathNodes = findPathInTree(tree, currentPath) || [];

  if (pathNodes.length === 0) {
    return null;
  }

  return (
    <nav className="mdh-breadcrumbs" aria-label="breadcrumb">
      {pathNodes.map((node, index) => {
        const isLast = index === pathNodes.length - 1;
        
        if (isLast) {
          return (
            <span key={node.path} className="mdh-breadcrumb-current">
              {node.name}
            </span>
          );
        }
        
        return (
          <span key={node.path} className="mdh-breadcrumb-item">
            <button
              className="mdh-breadcrumb-link"
              onClick={() => onPathClick?.(node.path)}
            >
              {node.name}
            </button>
            <span className="mdh-breadcrumb-separator">/</span>
          </span>
        );
      })}
    </nav>
  );
}

