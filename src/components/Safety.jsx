import React from 'react'
import Title from './Title.jsx'
import Subtitle from './Subtitle.jsx'
import { Typography } from '@mui/material'
import useStyles from '../css/style.js'
import { Box } from '@mui/system'
import MaskImage from '../image/mask.png'
import Girl2 from '../image/girl2.png'
import Girl3 from '../image/girl3.png'
import Girl4 from '../image/girl4.png'
import SafetyInfo from './SafetyInfo.jsx'
import Grid from '@mui/material/Grid';
import { Element } from 'react-scroll'
export default function Safety() {
    const classes=useStyles()
  return (
    <Element name="prevention">
       <Box className={classes.container} mt={10}>

<Title text="covid-19"/>
<Subtitle text="What Should We Do"/>
<Typography className={classes.section__description}>
Corona viruses are a type of virus. There are many different kinds, and some cause disease A newly identified type has caused
</Typography>
<Box mt={8}>
<Grid className={classes.safety__grid} container spacing={4} p={3} alignItems='center' justifyContent="center" >
   <Grid item xxs={12} md={6}>
 <SafetyInfo title="Wear Masks" step="one">
 Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively 
 </SafetyInfo>
   </Grid>
   <Grid item xxs={12} md={6}>
    <img src={MaskImage} alt="" className={classes.safety__img}/>
   </Grid>
 
   <Grid container className={classes.safety__grid__reverse}>
   <Grid item xxs={12} md={6}>
    <img src={Girl2} alt="" className={classes.safety__img}/>
   </Grid>
   <Grid item xxs={12} md={6}>
 <SafetyInfo title="Wash Your Hands" step="two">
 Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals 
 </SafetyInfo>
   </Grid>
   </Grid>
  



   <Grid item xxs={12} md={6}>
 <SafetyInfo title="Use Nose-RAG" step="three">
 Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively 
 </SafetyInfo>
   </Grid>
   <Grid item xxs={12} md={6}>
    <img src={Girl3} alt="" className={classes.safety__img}/>
   </Grid>

  <Grid container className={classes.safety__grid__reverse}>
  <Grid item xxs={12} md={6}>
    <img src={Girl4} alt="" className={classes.safety__img}/>
   </Grid>
   <Grid item xxs={12} md={6}>
 <SafetyInfo title="Avoid contacts" step="four">
 Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic
 </SafetyInfo>
   </Grid>
  </Grid>
  
 </Grid>
</Box>
</Box>
    </Element>
 
  )
}
