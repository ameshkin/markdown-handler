/**
 * Demo/Preview page for development
 * 
 * Shows template showcase by default
 */

import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { TemplateShowcaseApp } from './pages/TemplateShowcase';

// Dark red/purple theme with gradients
const darkRedPurpleTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ef4444', // Red
      light: '#f87171',
      dark: '#dc2626',
    },
    secondary: {
      main: '#a855f7', // Purple
      light: '#c084fc',
      dark: '#9333ea',
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
      main: '#ef4444', // Red
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
          background: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b3d 50%, #1a0f2e 100%)',
          backgroundImage: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1), 0 4px 16px rgba(239, 68, 68, 0.1)',
          '&:hover': {
            border: '1px solid rgba(168, 85, 247, 0.5)',
            boxShadow: '0 12px 48px rgba(168, 85, 247, 0.2), 0 6px 24px rgba(239, 68, 68, 0.2)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(135deg, #ef4444 0%, #a855f7 100%)',
          boxShadow: '0 4px 16px rgba(239, 68, 68, 0.3), 0 2px 8px rgba(168, 85, 247, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #dc2626 0%, #9333ea 100%)',
            boxShadow: '0 6px 24px rgba(239, 68, 68, 0.4), 0 4px 12px rgba(168, 85, 247, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          border: '2px solid',
          borderImage: 'linear-gradient(135deg, #ef4444, #a855f7) 1',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
            border: '2px solid',
            borderImage: 'linear-gradient(135deg, #ef4444, #a855f7) 1',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b3d 50%, #1a0f2e 100%)',
          backgroundImage: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
        },
      },
    },
  },
});

function Demo() {
  return (
    <ThemeProvider theme={darkRedPurpleTheme}>
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
