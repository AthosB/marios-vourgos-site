'use client'

import {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function MobileMenu() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Photography" />
        <BottomNavigationAction label="Paintings" />
        <BottomNavigationAction label="Fashion" />
        <BottomNavigationAction label="Literature" />
      </BottomNavigation>
    </Box>
  );
}