'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';
import { createTheme, ThemeProvider, CssBaseline, Button } from '@mui/material';

import StyledComponentsRegistry from '../lib/registry';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

type ThemeMode = 'light' | 'dark';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<ThemeMode>('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Ensures consistent colors for background and text */}
            {children}
            <Button variant='contained' onClick={toggleMode}>
              Toggle Dark Mode
            </Button>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
