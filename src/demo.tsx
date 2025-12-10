/**
 * Demo/Preview page for development
 * 
 * Shows template showcase by default
 */

import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { TemplateShowcaseApp } from './pages/TemplateShowcase';

// Dark green/blue theme
const darkGreenBlueTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4ade80', // Green
      light: '#86efac',
      dark: '#22c55e',
    },
    secondary: {
      main: '#60a5fa', // Blue
      light: '#93c5fd',
      dark: '#3b82f6',
    },
    background: {
      default: '#0a1929', // Dark blue-gray
      paper: '#132f4c', // Darker blue-gray
    },
    text: {
      primary: '#e0f2fe', // Light blue
      secondary: '#bae6fd', // Lighter blue
    },
    success: {
      main: '#4ade80', // Green
    },
    info: {
      main: '#60a5fa', // Blue
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
          backgroundImage: 'linear-gradient(135deg, #132f4c 0%, #1e3a5f 100%)',
          border: '1px solid rgba(74, 222, 128, 0.2)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(135deg, #4ade80 0%, #60a5fa 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
          },
        },
      },
    },
  },
});

function Demo() {
  return (
    <ThemeProvider theme={darkGreenBlueTheme}>
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
