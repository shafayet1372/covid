import React from 'react'
import useStyles from '../css/style'
import { Typography } from '@mui/material'
export default function Subtitle({text}) {
    const classes=useStyles()
  return <Typography className={classes.section__subtitle
  }>
    {text}
  </Typography>
}
