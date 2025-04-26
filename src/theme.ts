'use client';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // Your custom primary color
      contrastText: '#000000', // Text color on primary background
    },
  },
});

export default theme;