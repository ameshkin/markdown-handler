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
  readdir: (path: string) => Promise<Array<{ name: string; isFile: boolean }>>;
  
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
export async function buildDocsTree({
  baseDir,
  basePath = '',
  readdir,
  isDirectory,
}: BuildDocsTreeOptions): Promise<DocNode[]> {
  const entries = await readdir(baseDir);
  const nodes: DocNode[] = [];

  for (const entry of entries) {
    // Skip hidden files and non-markdown files
    if (entry.name.startsWith('.') || (entry.isFile && !entry.name.endsWith('.md'))) {
      continue;
    }

    const fullPath = `${baseDir}/${entry.name}`;
    const relativePath = entry.isFile
      ? `${basePath}/${entry.name.replace(/\.md$/, '')}`.replace(/^\//, '')
      : `${basePath}/${entry.name}`.replace(/^\//, '');

    if (!entry.isFile && (isDirectory ? await isDirectory(fullPath) : true)) {
      const children = await buildDocsTree({
        baseDir: fullPath,
        basePath: relativePath,
        readdir,
        isDirectory,
      });
      nodes.push({
        name: entry.name,
        path: relativePath,
        children,
      });
    } else if (entry.isFile) {
      nodes.push({
        name: entry.name.replace(/\.md$/, ''),
        path: relativePath,
        isFile: true,
      });
    }
  }

  return nodes.sort((a, b) => {
    // Directories first, then files
    if (a.isFile !== b.isFile) {
      return a.isFile ? 1 : -1;
    }
    return a.name.localeCompare(b.name);
  });
}
