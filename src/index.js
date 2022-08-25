import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme=createTheme({
  
    typography: {
      fontFamily: [
        'Red Hat Display', 'sans-serif'
      ].join(','),
    },
    breakpoints: {
      values: {
        xxs:0,
        xs: 320,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1200,
      },
    },
  
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
   <App />
  </ThemeProvider>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

