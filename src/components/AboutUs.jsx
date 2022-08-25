import React from 'react'
import { Box, Typography } from '@mui/material'
import useStyles from '../css/style.js'
import AboutImage from '../image/image2.png'
import {Button} from '@mui/material'
import { Element } from 'react-scroll'
export default function AboutUs() {
    const classes=useStyles()
  return <Element name="overview">
    <Box  className={classes.container}>
        <Box className={classes.about__section}>
        <Box className={classes.about__image}>
           <img src={AboutImage} alt=""/>
         </Box>
         <Box className={classes.about__info}>
         <Typography className={classes.about__title}>What Is Covid-19</Typography>
         <Typography className={classes.about__subtitle}>CoronaVirus</Typography>
         <Typography className={classes.about__description}>
         Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response
         </Typography>
         <Button sx={{widh:'180px',height:'50px',backgroundColor:'rgba(250, 86, 82, 0.15)',borderRadius:'65px',color:'#FA5652',fontSize:'14px',lineHeight:'24px',textTransform:'capitalize',padding:'0px 30px',marginTop:'20px'}}>Learn More</Button>
         </Box>
        </Box>
      
  </Box>
  </Element>
}
