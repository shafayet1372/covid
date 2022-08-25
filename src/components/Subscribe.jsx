import React from 'react'
import { Box } from '@mui/system'
import useStyles from '../css/style'
import { Typography } from '@mui/material'
import { useState } from 'react'
import { Element } from 'react-scroll'
export default function Subscribe() {
    const classes=useStyles()
    const [value,setValue]=useState('')
  return (
    <Element name="contact">
     <Box backgroundColor="#FFF8F8">
        <Box className={classes.container} mt={8}>

<Box className={classes.subscribe__wrapper} >
    <Box>
    <Typography fontSize="3.5rem" fontWeight="bold" color="#0C6C44" textAlign="center">Have Question in mind?
</Typography>
<Typography textAlign="center" fontSize="4rem" fontWeight="bold" color="#0C6C44">
  Let us help you
</Typography>
    </Box>
    <Box sx={{position:'relative',mt:2}}>
       <input type="" name="" value={value} className={classes.subscribe__input} onChange={(e)=>setValue(e.target.value)}/>
       <button type="" className={classes.subscribe__btn}>Send</button>
    </Box>
   
</Box>
</Box>
    </Box>
    </Element>
   
    
  )
}
