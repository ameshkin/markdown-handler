/**
 * Search bar component for filtering documentation tree
 */
import type { DocNode } from '../types';
interface SearchBarProps {
    tree: DocNode[];
    onFilterChange: (filteredTree: DocNode[]) => void;
}
export declare function SearchBar({ tree, onFilterChange }: SearchBarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SearchBar.d.ts.map