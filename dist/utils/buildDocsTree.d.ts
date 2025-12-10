/**
 * Utility to build documentation tree from file system structure
 *
 * This can be used to scan a directory and build a DocNode tree
 */
import type { DocNode } from '../types';
export interface BuildDocsTreeOptions {
    /**
     * Base directory to scan
     */
    baseDir: string;
    /**
     * Base path prefix for all nodes
     */
    basePath?: string;
    /**
     * Function to read directory entries
     */
    readdir: (path: string) => Promise<Array<{
        name: string;
        isFile: boolean;
    }>>;
    /**
     * Function to check if path is a directory
     */
    isDirectory?: (path: string) => Promise<boolean>;
}
/**
 * Build a documentation tree from a directory structure
 *
 * @example
 * ```ts
 * const tree = await buildDocsTree({
 *   baseDir: './docs',
 *   readdir: async (path) => {
 *     const entries = await fs.readdir(path, { withFileTypes: true });
 *     return entries.map(e => ({ name: e.name, isFile: e.isFile() }));
 *   }
 * });
 * ```
 */
export declare function buildDocsTree({ baseDir, basePath, readdir, isDirectory, }: BuildDocsTreeOptions): Promise<DocNode[]>;
//# sourceMappingURL=buildDocsTree.d.ts.map