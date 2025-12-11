import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Search bar component for filtering documentation tree
 */
import { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
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
        // Include node if it matches or has matching children
        if (matchesName || filteredChildren.length > 0) {
            filtered.push({
                ...node,
                children: filteredChildren.length > 0 ? filteredChildren : node.children,
            });
        }
    }
    return filtered;
}
export function SearchBar({ tree, onFilterChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        const filtered = filterTree(tree, value);
        onFilterChange(filtered);
    };
    return (_jsx(Box, { sx: { mb: 2 }, children: _jsx(TextField, { fullWidth: true, size: "small", placeholder: "Search documentation...", value: searchTerm, onChange: handleSearchChange, InputProps: {
                startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchOutlined, { fontSize: "small" }) })),
            } }) }));
}
