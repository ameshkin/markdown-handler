/**
 * Vanilla Breadcrumbs Component (No MUI Required)
 */
import type { DocNode } from '../../types';
interface BreadcrumbsVanillaProps {
    tree: DocNode[];
    currentPath: string;
    onPathClick?: (path: string) => void;
}
export declare function BreadcrumbsVanilla({ tree, currentPath, onPathClick }: BreadcrumbsVanillaProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=BreadcrumbsVanilla.d.ts.map