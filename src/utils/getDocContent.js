/**
 * Utility to get markdown content from a file path
 */
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
export async function getDocContent({ docsDir, slug, readFile, join, }) {
    // If no slug, serve index.md
    if (slug.length === 0 || (slug.length === 1 && slug[0] === '')) {
        try {
            const content = await readFile(join(docsDir, 'index.md'));
            return content;
        }
        catch {
            return null;
        }
    }
    // Build file path
    const filePath = join(docsDir, ...slug) + '.md';
    try {
        const content = await readFile(filePath);
        return content;
    }
    catch {
        // Try index.md in the directory
        try {
            const dirPath = join(docsDir, ...slug);
            const content = await readFile(join(dirPath, 'index.md'));
            return content;
        }
        catch {
            return null;
        }
    }
}
