import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function BreadcrumbsVanilla({ tree, currentPath, onPathClick }) {
    const pathNodes = findPathInTree(tree, currentPath) || [];
    if (pathNodes.length === 0) {
        return null;
    }
    return (_jsx("nav", { className: "mdh-breadcrumbs", "aria-label": "breadcrumb", children: pathNodes.map((node, index) => {
            const isLast = index === pathNodes.length - 1;
            if (isLast) {
                return (_jsx("span", { className: "mdh-breadcrumb-current", children: node.name }, node.path));
            }
            return (_jsxs("span", { className: "mdh-breadcrumb-item", children: [_jsx("button", { className: "mdh-breadcrumb-link", onClick: () => onPathClick?.(node.path), children: node.name }), _jsx("span", { className: "mdh-breadcrumb-separator", children: "/" })] }, node.path));
        }) }));
}
