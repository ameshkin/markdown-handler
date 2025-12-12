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
        mode: 'dark',
        primary: {
          main: '#a855f7', // Purple
        },
        secondary: {
          main: '#00d9ff', // Electric blue
        },
        background: {
          default: '#0a0e27',
          paper: '#151b3d',
        },
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
        mode: 'dark',
        primary: {
          main: '#00d9ff', // Electric blue
        },
        secondary: {
          main: '#ec4899', // Magenta
        },
        background: {
          default: '#0a0e27',
          paper: '#1a2342',
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
        mode: 'dark',
        primary: {
          main: '#ec4899', // Magenta
        },
        secondary: {
          main: '#a855f7', // Purple
        },
        background: {
          default: '#1a0f2e',
          paper: '#2d1b3d',
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
          main: '#9333ea', // Deep purple
        },
        secondary: {
          main: '#00b8d9', // Darker electric blue
        },
        background: {
          default: '#0a0a0a',
          paper: '#1a1a1a',
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
        mode: 'dark',
        primary: {
          main: '#f472b6', // Light pink
        },
        secondary: {
          main: '#00d9ff', // Electric blue
        },
        background: {
          default: '#0f0a1a',
          paper: '#1a0f2e',
        },
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
        mode: 'dark',
        primary: {
          main: '#00d9ff', // Electric blue
        },
        secondary: {
          main: '#a855f7', // Purple
        },
        background: {
          default: '#0a0e27',
          paper: '#151b3d',
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
        mode: 'dark',
        primary: {
          main: '#c084fc', // Light purple
        },
        secondary: {
          main: '#ec4899', // Magenta
        },
        background: {
          default: '#1a0f2e',
          paper: '#2d1b3d',
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

