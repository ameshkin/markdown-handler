/**
 * Utility to get markdown content from a file path
 */
export interface GetDocContentOptions {
    /**
     * Base directory for documentation files
     */
    docsDir: string;
    /**
     * Slug array (path segments)
     */
    slug: string[];
    /**
     * Function to read file content
     */
    readFile: (path: string) => Promise<string>;
    /**
     * Path join function
     */
    join: (...paths: string[]) => string;
}
/**
 * Get markdown content for a given slug path
 *
 * @example
 * ```ts
 * const content = await getDocContent({
 *   docsDir: './docs',
 *   slug: ['getting-started', 'installation'],
 *   readFile: async (path) => await fs.readFile(path, 'utf-8'),
 *   join: path.join,
 * });
 * ```
 */
export declare function getDocContent({ docsDir, slug, readFile, join, }: GetDocContentOptions): Promise<string | null>;
//# sourceMappingURL=getDocContent.d.ts.map