/**
 * Vanilla Search Bar Component (No MUI Required)
 */
import type { DocNode } from '../../types';
interface SearchBarVanillaProps {
    tree: DocNode[];
    onFilterChange: (filteredTree: DocNode[]) => void;
}
export declare function SearchBarVanilla({ tree, onFilterChange }: SearchBarVanillaProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SearchBarVanilla.d.ts.map