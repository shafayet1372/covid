import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Image1 from '../image/one.png'
import Image2 from '../image/two.png'
import Image3 from '../image/three.png'
import Image4 from '../image/4.png'
import useStyles from '../css/style'
const images={
    one:Image1,
    two:Image2,
    three:Image3,
    four:Image4,

}
export default function SafetyInfo({children,title,step}) {
    const classes=useStyles()
  return (
    <Box className={classes.safety__wrapper}>
        <Box >
           <img src={images[step]} alt=""/>
        </Box>
        <Box>
         <Typography fontWeight="bold" color="#035755">
            {title}
         </Typography>
         <Typography lineHeight="4rem" textAlign="justify" color="#4B4F51" fontSize="1.7rem">
           {children}
         </Typography>
        </Box>
       
    </Box>
  )
}
