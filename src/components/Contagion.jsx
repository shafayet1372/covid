import React from 'react'
import { Box} from '@mui/system'
import { Typography } from '@mui/material'
import useStyles from '../css/style.js'
import ContagionCard from './ContagionCard.jsx'
import Grid from '@mui/material/Grid';
import Card1 from '../image/card1.jpg'
import Card2 from '../image/card2.jpg'
import Card3 from '../image/card3.png'
import Title from './Title.jsx'
import Subtitle from './Subtitle.jsx'
import { Element } from 'react-scroll'
export default function Contagion() {
    const classes=useStyles()
  return (
    <Element name="contagion">
          <Box className={classes.container} mt={8}>
       <Title text="Covid-19"/>
        <Subtitle text="Contagion"/>
      <Typography className={classes.section__description}>
      Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type
      </Typography>
      <Grid container mt={5} className={classes.contagion__grid} spacing={2}>
        <Grid item md={4} sm={6} xs={12}>
         <ContagionCard Image={Card1} title="Air Transmission" description="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"/>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <ContagionCard Image={Card2} title="Human Contacts" description="Washing your hands is one of thesimplest ways you can protect"/>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <ContagionCard Image={Card3} title="Contained Object" description="Use the tissue while sneezing,In this way, you can protect your droplets."/>
        </Grid>
      </Grid>
    </Box>
    </Element>
   
  )
}
