/**
 * Type definitions for Markdown Handler
 */

export interface DocNode {
  name: string;
  path: string;
  children?: DocNode[];
  isFile?: boolean;
}

import type { Theme, SxProps } from '@mui/material/styles';

export type TemplateVariant = 
  | 'minimal'
  | 'modern'
  | 'classic'
  | 'dark'
  | 'compact'
  | 'wide'
  | 'centered';

export interface TemplateConfig {
  name: string;
  description: string;
  variant: TemplateVariant;
  theme?: Theme | 'default';
  sidebarWidth?: number;
  sidebarPosition?: 'left' | 'right';
  showSearch?: boolean;
  showBreadcrumbs?: boolean;
  headerHeight?: number;
  contentMaxWidth?: number | 'full';
  sidebarStyle?: 'elevated' | 'flat' | 'outlined';
  contentStyle?: 'elevated' | 'flat' | 'outlined';
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
  
  /**
   * Optional MUI theme. If not provided, will use the theme from ThemeProvider context or default theme.
   * Pass 'default' to use MUI's default theme, or provide a custom theme object.
   */
  theme?: Theme | 'default';
  
  /**
   * Template variant to use. Provides pre-configured styles and layouts.
   */
  template?: TemplateVariant | TemplateConfig;
  
  /**
   * Enable search functionality in sidebar
   */
  enableSearch?: boolean;
  
  /**
   * Enable breadcrumbs navigation
   */
  enableBreadcrumbs?: boolean;
  
  /**
   * Custom header component
   */
  header?: React.ReactNode;
  
  /**
   * Custom footer component
   */
  footer?: React.ReactNode;
  
  /**
   * MUI sx prop for custom styling
   */
  sx?: SxProps<Theme>;
  
  /**
   * Custom link handler for markdown links
   */
  onLinkClick?: (href: string, event: React.MouseEvent) => void;
}
