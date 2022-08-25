import React from 'react'
import  Header from './Header.jsx'
import AboutUs from './AboutUs.jsx'
import Contagion from './Contagion.jsx'
import Symptoms from './Symptoms.jsx'
import Safety from './Safety.jsx'
import CovidInfo from './CovidInfo.jsx'
import Subscribe from './Subscribe.jsx'
import Footer from './Footer.jsx'
import { Box } from '@mui/system'
export default function Index() {
 
  return (
    <Box >
        <Header/>
        <AboutUs/>
        <Contagion/>
        <Symptoms/>
        <Safety/>
        <CovidInfo/>
        <Subscribe/>
        <Footer/>
    </Box>
  )
}
