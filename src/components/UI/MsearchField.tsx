'use client';

import {styled, alpha} from '@mui/material/styles';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import {FilledInputProps} from "@mui/material";

export const MsearchField = styled((props: TextFieldProps) => (
  <TextField
    slotProps={{
      input: {disableUnderline: true} as Partial<FilledInputProps>,
    }}
    {...props}
  />
))(({theme}) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 32,
    border: '1px transparent',
    backgroundColor: '#F3F6F9',
    borderColor: '#E0E3E7',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: '#F3F6F9',
      borderColor: '#E0E3E7',
    },
    '&.Mui-focused': {
      backgroundColor: '#F3F6F9',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    '& input': {
      padding: 0,
    },
    '& .MuiInputAdornment-root': {
      margin: '3px 0 2px 0 !important',
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));