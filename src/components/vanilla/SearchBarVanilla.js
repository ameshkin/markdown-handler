import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Vanilla Search Bar Component (No MUI Required)
 */
import { useState } from 'react';
function filterTree(nodes, searchTerm) {
    if (!searchTerm.trim()) {
        return nodes;
    }
    const term = searchTerm.toLowerCase();
    const filtered = [];
    for (const node of nodes) {
        const matchesName = node.name.toLowerCase().includes(term);
        const filteredChildren = node.children
            ? filterTree(node.children, searchTerm)
            : [];
        if (matchesName || filteredChildren.length > 0) {
            filtered.push({
                ...node,
                children: filteredChildren.length > 0 ? filteredChildren : node.children,
            });
        }
    }
    return filtered;
}
export function SearchBarVanilla({ tree, onFilterChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        const filtered = filterTree(tree, value);
        onFilterChange(filtered);
    };
    return (_jsx("div", { className: "mdh-search", children: _jsx("input", { type: "text", className: "mdh-search-input", placeholder: "Search documentation...", value: searchTerm, onChange: handleSearchChange }) }));
}
