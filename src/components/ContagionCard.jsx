import React from 'react'
import { Box } from '@mui/system'
import useStyles from '../css/style'
import { Typography } from '@mui/material'
export default function ContagionCard({Image,title,description}) {
    const classes=useStyles()
  return (
    <Box className={classes.contagion__card}>
      <Box display="flex" justifyContent="center">
      <img src={Image} alt="" className={classes.contagion__card__img}/>
      </Box>
     <Box mt={4}>
     <Typography className={classes.contagion__card__title}>{title}</Typography>
      <Typography className={classes.contagion__card__subtitle} >{description}</Typography>
     </Box>
    </Box>
  )
}
