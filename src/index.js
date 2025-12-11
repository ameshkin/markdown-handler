/**
 * Markdown Handler Library
 *
 * Simple React library for displaying markdown help files
 * with left navigation and right content panel
 *
 * Supports both MUI and vanilla (no dependencies) versions
 *
 * @package @ameshkin/markdown-handler
 */
// MUI Version (requires @mui/material)
export { MarkdownDocsViewer } from './components/MarkdownDocsViewer';
export { SearchBar } from './components/SearchBar';
export { Breadcrumbs } from './components/Breadcrumbs';
// Vanilla Version (no MUI required)
export { MarkdownDocsViewerVanilla } from './components/vanilla/MarkdownDocsViewerVanilla';
export { SearchBarVanilla } from './components/vanilla/SearchBarVanilla';
export { BreadcrumbsVanilla } from './components/vanilla/BreadcrumbsVanilla';
// Utils
export * from './utils';
// Templates (MUI only)
export { templates, getTemplate, getAllTemplates } from './templates';
