import React from 'react'
import useStyles from '../css/style.js'
import { Typography } from '@mui/material'
export default function Title({text}) {
    const classes=useStyles()
  return  <Typography className={classes.section__title
  }>{text}</Typography>
}
