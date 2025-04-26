'use client';
import {createTheme} from '@mui/material/styles';

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // Your custom primary color
      contrastText: '#000000', // Text color on primary background
    },
  },
  breakpoints: {
    values: {
      laptop: 1024,
      tablet: 640,
      mobile: 0,
      desktop: 1280,
    },
  },
});

export default theme;