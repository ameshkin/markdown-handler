/**
 * Breadcrumbs component for navigation
 */
import type { DocNode } from '../types';
interface BreadcrumbsProps {
    tree: DocNode[];
    currentPath: string;
    onPathClick?: (path: string) => void;
}
export declare function Breadcrumbs({ tree, currentPath, onPathClick }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Breadcrumbs.d.ts.map