/**
 * Pre-built templates for MarkdownDocsViewer
 */

import { createTheme } from '@mui/material/styles';
import type { TemplateConfig } from '../types';

export const templates: Record<string, TemplateConfig> = {
  default: {
    name: 'Default',
    description: 'Clean and simple design with minimal styling',
    variant: 'default',
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
      shape: {
        borderRadius: 2,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '8px 16px',
              textTransform: 'none',
              fontWeight: 400,
              borderRadius: 2,
            },
            contained: {
              background: '#a855f7',
              boxShadow: '0 1px 3px rgba(168, 85, 247, 0.3)',
              '&:hover': {
                background: '#9333ea',
                boxShadow: '0 2px 6px rgba(168, 85, 247, 0.4)',
              },
            },
            outlined: {
              borderColor: '#a855f7',
              color: '#a855f7',
              '&:hover': {
                borderColor: '#9333ea',
                background: 'rgba(168, 85, 247, 0.08)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 2,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 2,
            },
          },
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
        borderRadius: 6,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '10px 20px',
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: 6,
            },
            contained: {
              background: '#00d9ff',
              boxShadow: '0 2px 8px rgba(0, 217, 255, 0.4)',
              '&:hover': {
                background: '#00b8d9',
                boxShadow: '0 4px 12px rgba(0, 217, 255, 0.5)',
                transform: 'translateY(-1px)',
              },
            },
            outlined: {
              borderColor: '#00d9ff',
              color: '#00d9ff',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#00b8d9',
                background: 'rgba(0, 217, 255, 0.1)',
                borderWidth: '2px',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 6,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 6,
            },
          },
        },
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
      shape: {
        borderRadius: 2,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '9px 18px',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.5px',
              borderRadius: 2,
            },
            contained: {
              background: '#ec4899',
              boxShadow: '0 2px 4px rgba(236, 72, 153, 0.3)',
              '&:hover': {
                background: '#db2777',
                boxShadow: '0 4px 8px rgba(236, 72, 153, 0.4)',
              },
            },
            outlined: {
              borderColor: '#ec4899',
              color: '#ec4899',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#db2777',
                background: 'rgba(236, 72, 153, 0.1)',
                borderWidth: '2px',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              border: '1px solid rgba(236, 72, 153, 0.2)',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 2,
            },
          },
        },
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
      shape: {
        borderRadius: 4,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '10px 24px',
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: 4,
            },
            contained: {
              background: '#9333ea',
              boxShadow: '0 3px 10px rgba(147, 51, 234, 0.4)',
              '&:hover': {
                background: '#7e22ce',
                boxShadow: '0 5px 15px rgba(147, 51, 234, 0.5)',
              },
            },
            outlined: {
              borderColor: '#9333ea',
              color: '#9333ea',
              '&:hover': {
                borderColor: '#7e22ce',
                background: 'rgba(147, 51, 234, 0.1)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 4,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 4,
            },
          },
        },
      },
    }),
  },
  
  light: {
    name: 'Light',
    description: 'Light theme with easy-on-the-eyes grey background',
    variant: 'light',
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
        primary: {
          main: '#a855f7', // Purple
        },
        secondary: {
          main: '#00d9ff', // Electric blue
        },
        background: {
          default: '#f5f5f5', // Light grey
          paper: '#ffffff',
        },
        text: {
          primary: '#111111', // Dark grey/black
          secondary: '#333333',
        },
      },
      spacing: 2,
      shape: {
        borderRadius: 2,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '6px 14px',
              textTransform: 'none',
              fontWeight: 400,
              fontSize: '0.875rem',
              borderRadius: 2,
            },
            contained: {
              background: '#a855f7',
              color: '#ffffff',
              boxShadow: '0 1px 2px rgba(168, 85, 247, 0.3)',
              '&:hover': {
                background: '#9333ea',
                boxShadow: '0 2px 4px rgba(168, 85, 247, 0.4)',
              },
            },
            outlined: {
              borderColor: '#a855f7',
              color: '#a855f7',
              '&:hover': {
                borderColor: '#9333ea',
                background: 'rgba(168, 85, 247, 0.08)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              backgroundColor: '#ffffff',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              backgroundColor: '#ffffff',
            },
          },
        },
      },
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
      shape: {
        borderRadius: 4,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '8px 16px',
              textTransform: 'none',
            },
            contained: {
              background: '#00d9ff',
              '&:hover': {
                background: '#00b8d9',
              },
            },
          },
        },
      },
    }),
  },
  
  spooky: {
    name: 'Spooky',
    description: 'Darcula-inspired dark theme with centered content',
    variant: 'spooky',
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
          main: '#A9B7C6', // Darcula text color
        },
        secondary: {
          main: '#CC7832', // Darcula keyword/orange
        },
        background: {
          default: '#2B2B2B', // Darcula background
          paper: '#3C3F41', // Darcula panel background
        },
        text: {
          primary: '#A9B7C6', // Darcula text
          secondary: '#808080', // Darcula comments
        },
        success: {
          main: '#6A8759', // Darcula strings/green
        },
        info: {
          main: '#6897BB', // Darcula numbers/blue
        },
        warning: {
          main: '#FFC66D', // Darcula functions/yellow
        },
      },
      shape: {
        borderRadius: 4,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '8px 20px',
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: 4,
            },
            contained: {
              background: '#CC7832',
              color: '#2B2B2B',
              boxShadow: '0 2px 6px rgba(204, 120, 50, 0.3)',
              '&:hover': {
                background: '#B86A2A',
                boxShadow: '0 4px 10px rgba(204, 120, 50, 0.4)',
              },
            },
            outlined: {
              borderColor: '#A9B7C6',
              color: '#A9B7C6',
              '&:hover': {
                borderColor: '#CC7832',
                background: 'rgba(204, 120, 50, 0.1)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              backgroundColor: '#3C3F41',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              backgroundColor: '#3C3F41',
            },
          },
        },
      },
    }),
  },
  
  blocky: {
    name: 'Blocky',
    description: 'Sharp edges and bold geometric design',
    variant: 'blocky',
    sidebarWidth: 300,
    sidebarPosition: 'left',
    showSearch: true,
    showBreadcrumbs: true,
    contentMaxWidth: 1000,
    sidebarStyle: 'outlined',
    contentStyle: 'outlined',
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
          paper: '#151b3d',
        },
      },
      shape: {
        borderRadius: 0,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              padding: '10px 20px',
              textTransform: 'none',
              fontWeight: 600,
            },
            contained: {
              background: '#00d9ff',
              boxShadow: 'none',
              '&:hover': {
                background: '#00b8d9',
                boxShadow: 'none',
              },
            },
            outlined: {
              borderWidth: '2px',
              borderColor: '#00d9ff',
              '&:hover': {
                borderWidth: '2px',
                background: 'rgba(0, 217, 255, 0.1)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              border: '2px solid rgba(0, 217, 255, 0.3)',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          },
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

