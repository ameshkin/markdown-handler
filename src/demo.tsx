/**
 * Demo/Preview page for development
 * 
 * Shows template showcase by default
 */

import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { TemplateShowcaseApp } from './pages/TemplateShowcase';

// Dark purple/blue/red theme
const darkPurpleBlueRedTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // Purple
      light: '#c084fc',
      dark: '#9333ea',
    },
    secondary: {
      main: '#3b82f6', // Blue
      light: '#60a5fa',
      dark: '#2563eb',
    },
    error: {
      main: '#ef4444', // Red
      light: '#f87171',
      dark: '#dc2626',
    },
    background: {
      default: '#0f0a1a', // Very dark purple-black
      paper: '#1a0f2e', // Dark purple
    },
    text: {
      primary: '#fce7f3', // Light pink
      secondary: '#fbcfe8', // Lighter pink
    },
    success: {
      main: '#3b82f6', // Blue
    },
    info: {
      main: '#a855f7', // Purple
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#1a0f2e',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1), 0 4px 16px rgba(59, 130, 246, 0.1)',
          '&:hover': {
            border: '1px solid rgba(168, 85, 247, 0.5)',
            boxShadow: '0 12px 48px rgba(168, 85, 247, 0.2), 0 6px 24px rgba(59, 130, 246, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #ef4444 100%)',
          boxShadow: '0 4px 16px rgba(168, 85, 247, 0.3), 0 2px 8px rgba(59, 130, 246, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 50%, #dc2626 100%)',
            boxShadow: '0 6px 24px rgba(168, 85, 247, 0.4), 0 4px 12px rgba(59, 130, 246, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          border: '1px solid rgba(168, 85, 247, 0.5)',
          '&:hover': {
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.7)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#1a0f2e',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(168, 85, 247, 0.2)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
        },
      },
    },
  },
});

function Demo() {
  return (
    <ThemeProvider theme={darkPurpleBlueRedTheme}>
      <CssBaseline />
      <TemplateShowcaseApp />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Demo />);
}
