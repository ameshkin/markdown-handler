/**
 * Vanilla Search Bar Component (No MUI Required)
 */

import { useState } from 'react';
import type { DocNode } from '../../types';

interface SearchBarVanillaProps {
  tree: DocNode[];
  onFilterChange: (filteredTree: DocNode[]) => void;
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

    if (matchesName || filteredChildren.length > 0) {
      filtered.push({
        ...node,
        children: filteredChildren.length > 0 ? filteredChildren : node.children,
      });
    }
  }
  
  return filtered;
}

export function SearchBarVanilla({ tree, onFilterChange }: SearchBarVanillaProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = filterTree(tree, value);
    onFilterChange(filtered);
  };

  return (
    <div className="mdh-search">
      <input
        type="text"
        className="mdh-search-input"
        placeholder="Search documentation..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

