import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Breadcrumbs component for navigation
 */
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography, Box } from '@mui/material';
import { ChevronRightOutlined } from '@mui/icons-material';
function findPathInTree(nodes, targetPath, currentPath = []) {
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
export function Breadcrumbs({ tree, currentPath, onPathClick }) {
    const pathNodes = findPathInTree(tree, currentPath) || [];
    if (pathNodes.length === 0) {
        return null;
    }
    return (_jsx(Box, { sx: { mb: 2 }, children: _jsx(MuiBreadcrumbs, { separator: _jsx(ChevronRightOutlined, { fontSize: "small" }), "aria-label": "breadcrumb", children: pathNodes.map((node, index) => {
                const isLast = index === pathNodes.length - 1;
                if (isLast) {
                    return (_jsx(Typography, { color: "text.primary", variant: "body2", children: node.name }, node.path));
                }
                return (_jsx(Link, { component: "button", variant: "body2", onClick: () => onPathClick?.(node.path), sx: {
                        cursor: 'pointer',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }, children: node.name }, node.path));
            }) }) }));
}
