/**
 * Demo/Preview page for development
 * 
 * Shows template showcase by default
 */

import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { TemplateShowcaseApp } from './pages/TemplateShowcase';

// Dark purple/electric blue/magenta theme
const darkPurpleElectricBlueMagentaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // Purple
      light: '#c084fc',
      dark: '#9333ea',
    },
    secondary: {
      main: '#00d9ff', // Electric blue
      light: '#33e0ff',
      dark: '#00b8d9',
    },
    error: {
      main: '#ec4899', // Magenta/pink
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0a0e27', // Very dark blue-purple
      paper: '#151b3d', // Dark purple-blue
    },
    text: {
      primary: '#e0f2fe', // Light electric blue
      secondary: '#bae6fd', // Lighter blue
    },
    success: {
      main: '#00d9ff', // Electric blue
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
          background: '#151b3d',
          border: '1px solid rgba(0, 217, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 217, 255, 0.15), 0 4px 16px rgba(168, 85, 247, 0.15)',
          '&:hover': {
            border: '1px solid rgba(0, 217, 255, 0.6)',
            boxShadow: '0 12px 48px rgba(0, 217, 255, 0.3), 0 6px 24px rgba(236, 72, 153, 0.3)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(135deg, #a855f7 0%, #00d9ff 50%, #ec4899 100%)',
          boxShadow: '0 4px 16px rgba(0, 217, 255, 0.4), 0 2px 8px rgba(236, 72, 153, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #9333ea 0%, #00b8d9 50%, #db2777 100%)',
            boxShadow: '0 6px 24px rgba(0, 217, 255, 0.5), 0 4px 12px rgba(236, 72, 153, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          border: '1px solid rgba(0, 217, 255, 0.6)',
          '&:hover': {
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.9)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#151b3d',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 217, 255, 0.2)',
          border: '1px solid rgba(0, 217, 255, 0.4)',
        },
      },
    },
  },
});

function Demo() {
  return (
    <ThemeProvider theme={darkPurpleElectricBlueMagentaTheme}>
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
