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
          main: '#2DCE89', // Green
          light: '#4ADE80', // Lighter green
          dark: '#22C55E', // Darker green
        },
        secondary: {
          main: '#2DCE89', // Green
        },
        background: {
          default: '#0a0a0a', // Very dark background
          paper: '#0f1a2e', // Dark blue
        },
        text: {
          primary: '#F9FAFB', // Almost white
          secondary: '#9CA3AF', // Light grey
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
              background: '#2DCE89',
              color: '#000000',
              boxShadow: '0 1px 3px rgba(45, 206, 137, 0.3)',
              '&:hover': {
                background: '#22C55E',
                boxShadow: '0 2px 6px rgba(45, 206, 137, 0.4)',
              },
            },
            outlined: {
              borderColor: '#2DCE89',
              color: '#2DCE89',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#22C55E',
                background: 'rgba(45, 206, 137, 0.1)',
                borderWidth: '2px',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              backgroundColor: '#0f1a2e', // Dark blue
              border: '2px solid #2DCE89', // Green border
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              backgroundColor: '#0f1a2e', // Dark blue
              border: '2px solid #2DCE89', // Green border
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderColor: '#2DCE89',
              color: '#2DCE89',
            },
          },
        },
      },
    }),
  },
  
  modern: {
    name: 'Modern',
    description: 'Prisma-inspired modern design with clean aesthetics',
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
          main: '#2DCE89', // Prisma green
          light: '#4ADE80',
          dark: '#22C55E',
        },
        secondary: {
          main: '#6366F1', // Indigo accent
          light: '#818CF8',
          dark: '#4F46E5',
        },
        background: {
          default: '#0A0E27', // Very dark blue-black
          paper: '#111827', // Dark grey-blue
        },
        text: {
          primary: '#F9FAFB', // Almost white
          secondary: '#9CA3AF', // Light grey
        },
        divider: 'rgba(255, 255, 255, 0.1)',
      },
      typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontWeight: 700,
          letterSpacing: '-0.02em',
        },
        h2: {
          fontWeight: 700,
          letterSpacing: '-0.01em',
        },
        h3: {
          fontWeight: 600,
        },
      },
      shape: {
        borderRadius: 8,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              padding: '10px 24px',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: 8,
              fontSize: '0.9375rem',
            },
            contained: {
              background: '#2DCE89',
              color: '#0A0E27',
              boxShadow: '0 4px 14px rgba(45, 206, 137, 0.3)',
              '&:hover': {
                background: '#22C55E',
                boxShadow: '0 6px 20px rgba(45, 206, 137, 0.4)',
                transform: 'translateY(-1px)',
              },
            },
            outlined: {
              borderColor: '#2DCE89',
              color: '#2DCE89',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#22C55E',
                background: 'rgba(45, 206, 137, 0.1)',
                borderWidth: '2px',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              backgroundColor: '#111827',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              backgroundColor: '#111827',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgba(45, 206, 137, 0.15)',
              color: '#2DCE89',
              border: '1px solid rgba(45, 206, 137, 0.3)',
            },
          },
        },
      },
    }),
  },
  
  classic: {
    name: 'Classic',
    description: 'Retro terminal style with black background and green text',
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
          main: '#00FF41', // Terminal green
          light: '#39FF6F',
          dark: '#00CC33',
        },
        secondary: {
          main: '#FFFFFF', // White
          light: '#FFFFFF',
          dark: '#CCCCCC',
        },
        background: {
          default: '#000000', // Pure black
          paper: '#0A0A0A', // Very dark grey
        },
        text: {
          primary: '#00FF41', // Terminal green
          secondary: '#FFFFFF', // White
        },
        divider: 'rgba(0, 255, 65, 0.3)',
      },
      typography: {
        fontFamily: '"Courier New", "Monaco", "Menlo", monospace',
        h1: {
          fontWeight: 700,
          color: '#00FF41',
        },
        h2: {
          fontWeight: 700,
          color: '#00FF41',
        },
        h3: {
          fontWeight: 600,
          color: '#00FF41',
        },
        body1: {
          color: '#FFFFFF',
        },
        body2: {
          color: '#FFFFFF',
        },
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
              fontFamily: '"Courier New", "Monaco", "Menlo", monospace',
            },
            contained: {
              background: '#00FF41',
              color: '#000000',
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
              '&:hover': {
                background: '#00CC33',
                boxShadow: '0 0 15px rgba(0, 255, 65, 0.7)',
              },
            },
            outlined: {
              borderColor: '#00FF41',
              color: '#00FF41',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#00CC33',
                background: 'rgba(0, 255, 65, 0.1)',
                borderWidth: '2px',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              border: '2px solid #00FF41',
              backgroundColor: '#000000',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              backgroundColor: '#000000',
              border: '1px solid #00FF41',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgba(0, 255, 65, 0.2)',
              color: '#00FF41',
              border: '1px solid #00FF41',
              fontFamily: '"Courier New", "Monaco", "Menlo", monospace',
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
          main: '#1e3a8a', // Navy blue
          light: '#3b82f6', // Lighter navy blue
        },
        secondary: {
          main: '#1e3a8a', // Navy blue
        },
        background: {
          default: '#000000', // Pure black
          paper: '#0a1929', // Navy dark blue
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
              background: '#1e3a8a',
              boxShadow: '0 3px 10px rgba(30, 58, 138, 0.4)',
              '&:hover': {
                background: '#3b82f6',
                boxShadow: '0 5px 15px rgba(30, 58, 138, 0.5)',
              },
            },
            outlined: {
              borderColor: '#1e3a8a',
              color: '#1e3a8a',
              '&:hover': {
                borderColor: '#3b82f6',
                background: 'rgba(30, 58, 138, 0.1)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              backgroundColor: '#0a1929', // Navy dark blue
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              backgroundColor: '#0a1929', // Navy dark blue
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
          paper: '#d8d8d8', // Darker grey for cards
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
              backgroundColor: '#d8d8d8', // Darker grey
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 2,
              backgroundColor: '#d8d8d8', // Darker grey
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
    description: 'Halloween-inspired theme with pure black, orange, and green accents',
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
          main: '#FF6B35', // Orange
          light: '#FF8C5A',
          dark: '#E55A2B',
        },
        secondary: {
          main: '#4ECDC4', // Teal/green
          light: '#6EDDD6',
          dark: '#3AB5AE',
        },
        background: {
          default: '#000000', // Pure black
          paper: '#000000', // Pure black
        },
        text: {
          primary: '#FF6B35', // Orange text
          secondary: '#4ECDC4', // Green/teal secondary
        },
        success: {
          main: '#4ECDC4', // Green
        },
        warning: {
          main: '#FF6B35', // Orange
        },
        divider: 'rgba(255, 107, 53, 0.3)',
      },
      typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          color: '#FF6B35',
          fontWeight: 700,
        },
        h2: {
          color: '#FF6B35',
          fontWeight: 700,
        },
        h3: {
          color: '#FF6B35',
          fontWeight: 600,
        },
        body1: {
          color: '#FF6B35',
        },
        body2: {
          color: '#4ECDC4',
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
              background: '#FF6B35',
              color: '#000000',
              boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)',
              '&:hover': {
                background: '#E55A2B',
                boxShadow: '0 0 15px rgba(255, 107, 53, 0.7)',
              },
            },
            outlined: {
              borderColor: '#FF6B35',
              color: '#FF6B35',
              '&:hover': {
                borderColor: '#E55A2B',
                background: 'rgba(255, 107, 53, 0.1)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              backgroundColor: '#000000',
              border: '1px solid rgba(255, 107, 53, 0.3)',
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 4,
              backgroundColor: '#000000',
              border: '1px solid rgba(255, 107, 53, 0.3)',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgba(255, 107, 53, 0.2)',
              color: '#FF6B35',
              border: '1px solid rgba(255, 107, 53, 0.5)',
            },
          },
        },
      },
    }),
  },
  
  blocky: {
    name: 'Blocky',
    description: 'Roblox-style with big borders and navy blue background',
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
          main: '#e5e7eb', // Grey white
          light: '#f9fafb', // Lighter grey white
        },
        secondary: {
          main: '#e5e7eb', // Grey white
        },
        background: {
          default: '#111111', // Very dark grey
          paper: '#0a1929', // Very dark blue
        },
        text: {
          primary: '#e5e7eb', // Grey white
          secondary: '#d1d5db', // Light grey
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
              padding: '12px 24px',
              textTransform: 'none',
              fontWeight: 700,
              border: '4px solid #e5e7eb', // Big Roblox-style border
              fontSize: '1rem',
            },
            contained: {
              background: '#e5e7eb',
              color: '#1e3a8a',
              border: '4px solid #e5e7eb',
              boxShadow: 'none',
              '&:hover': {
                background: '#f9fafb',
                border: '4px solid #f9fafb',
                boxShadow: 'none',
              },
            },
            outlined: {
              border: '4px solid #e5e7eb', // Big border
              color: '#e5e7eb',
              background: 'transparent',
              '&:hover': {
                border: '4px solid #f9fafb',
                color: '#f9fafb',
                background: 'rgba(229, 231, 235, 0.1)',
              },
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              backgroundColor: '#0a1929', // Very dark blue
              border: '4px solid #e5e7eb', // Big Roblox-style border
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              backgroundColor: '#0a1929', // Very dark blue
              border: '4px solid #e5e7eb', // Big Roblox-style border
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              border: '3px solid #e5e7eb', // Big border
              backgroundColor: 'rgba(229, 231, 235, 0.1)',
              color: '#e5e7eb',
              fontWeight: 600,
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

