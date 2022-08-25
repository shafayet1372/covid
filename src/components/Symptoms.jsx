import React from 'react'
import Title from './Title.jsx'
import Subtitle from './Subtitle.jsx'
import { Typography } from '@mui/material'
import useStyles from '../css/style.js'
import { Box } from '@mui/system'
import { Element } from 'react-scroll'
import SymptomsImage from '../image/symptoms.png'

export default function Symptoms() {
    const classes=useStyles()
  return (
    <Element name='symptoms'>
    <Box mt={10} className={classes.container}>

<Title text="Covid-19"/>
<Subtitle text="Symptoms"/>
<Typography className={classes.section__description}>
Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory 
</Typography>
<Box className={classes.symptoms__wrapper}>
 <img src={SymptomsImage} alt="" />
</Box>
</Box>
    </Element>
    
  )
}
