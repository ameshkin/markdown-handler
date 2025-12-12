/**
 * Search bar component for filtering documentation tree
 */

import { useState } from 'react';
import { TextField, InputAdornment, Box, SxProps, Theme } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import type { DocNode } from '../types';

interface SearchBarProps {
  tree: DocNode[];
  onFilterChange: (filteredTree: DocNode[]) => void;
  sx?: SxProps<Theme>;
}

function filterTree(nodes: DocNode[], searchTerm: string): DocNode[] {
  if (!searchTerm.trim()) {
    return nodes;
  }

  const term = searchTerm.toLowerCase();

  const filtered: DocNode[] = [];
  
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

export function SearchBar({ tree, onFilterChange, sx }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = filterTree(tree, value);
    onFilterChange(filtered);
  };

  return (
    <Box sx={[{ mb: 2 }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search documentation..."
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

