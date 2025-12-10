/**
 * Type definitions for Markdown Handler
 */

export interface DocNode {
  name: string;
  path: string;
  children?: DocNode[];
  isFile?: boolean;
}

export interface MarkdownDocsViewerProps {
  /**
   * Tree structure of documentation files
   */
  tree: DocNode[];
  
  /**
   * Current markdown content to display
   */
  content: string;
  
  /**
   * Current path (for highlighting active item)
   */
  currentPath?: string;
  
  /**
   * Callback when a doc item is clicked
   */
  onDocClick?: (path: string) => void;
  
  /**
   * Custom title for the sidebar
   */
  sidebarTitle?: string;
  
  /**
   * Width of the sidebar in pixels
   */
  sidebarWidth?: number;
}
