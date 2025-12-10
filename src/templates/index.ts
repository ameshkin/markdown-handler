/**
 * Pre-built templates for MarkdownDocsViewer
 */

import { createTheme } from '@mui/material/styles';
import type { TemplateConfig } from '../types';

export const templates: Record<string, TemplateConfig> = {
  minimal: {
    name: 'Minimal',
    description: 'Clean and simple design with minimal styling',
    variant: 'minimal',
    sidebarWidth: 260,
    sidebarPosition: 'left',
    showSearch: false,
    showBreadcrumbs: false,
    contentMaxWidth: 900,
    sidebarStyle: 'flat',
    contentStyle: 'flat',
    theme: createTheme({
      palette: {
        mode: 'light',
      },
    }),
  },
  
  modern: {
    name: 'Modern',
    description: 'Contemporary design with subtle shadows and rounded corners',
    variant: 'modern',
    sidebarWidth: 300,
    sidebarPosition: 'left',
    showSearch: true,
    showBreadcrumbs: true,
    contentMaxWidth: 1000,
    sidebarStyle: 'elevated',
    contentStyle: 'elevated',
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
      },
      shape: {
        borderRadius: 12,
      },
    }),
  },
  
  classic: {
    name: 'Classic',
    description: 'Traditional documentation style with clear hierarchy',
    variant: 'classic',
    sidebarWidth: 280,
    sidebarPosition: 'left',
    showSearch: true,
    showBreadcrumbs: true,
    contentMaxWidth: 800,
    sidebarStyle: 'outlined',
    contentStyle: 'outlined',
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#1565c0',
        },
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
    }),
  },
  
  dark: {
    name: 'Dark',
    description: 'Dark theme optimized for low-light environments',
    variant: 'dark',
    sidebarWidth: 300,
    sidebarPosition: 'left',
    showSearch: true,
    showBreadcrumbs: true,
    contentMaxWidth: 1000,
    sidebarStyle: 'elevated',
    contentStyle: 'elevated',
    theme: createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      },
    }),
  },
  
  compact: {
    name: 'Compact',
    description: 'Space-efficient layout for dense documentation',
    variant: 'compact',
    sidebarWidth: 240,
    sidebarPosition: 'left',
    showSearch: true,
    showBreadcrumbs: false,
    contentMaxWidth: 1100,
    sidebarStyle: 'flat',
    contentStyle: 'flat',
    theme: createTheme({
      palette: {
        mode: 'light',
      },
      spacing: 2,
    }),
  },
  
  wide: {
    name: 'Wide',
    description: 'Maximum width layout for large screens',
    variant: 'wide',
    sidebarWidth: 320,
    sidebarPosition: 'left',
    showSearch: true,
    showBreadcrumbs: true,
    contentMaxWidth: 'full',
    sidebarStyle: 'elevated',
    contentStyle: 'flat',
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
      },
    }),
  },
  
  centered: {
    name: 'Centered',
    description: 'Centered content with generous margins',
    variant: 'centered',
    sidebarWidth: 280,
    sidebarPosition: 'left',
    showSearch: false,
    showBreadcrumbs: true,
    contentMaxWidth: 700,
    sidebarStyle: 'outlined',
    contentStyle: 'elevated',
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
      },
    }),
  },
};

export function getTemplate(variant: string): TemplateConfig | undefined {
  return templates[variant];
}

export function getAllTemplates(): TemplateConfig[] {
  return Object.values(templates);
}

