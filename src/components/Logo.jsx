import React from 'react'
import { Box } from '@mui/system'
import CovidImage from '../image/covid.png'
import { Link } from '@mui/material'
import useStyles from '../css/style'
export default function Logo() {
    const classes=useStyles()
  return <Box className={classes.logo}>
  <img src={CovidImage} alt=""/>
  <Link href="#">COVID-19</Link>
  </Box>
}
