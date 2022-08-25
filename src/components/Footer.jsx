import React from 'react'
import { Box } from '@mui/material'
import useStyles from '../css/style'
import Logo from './Logo'
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Typography} from '@mui/material';
export default function Footer() {
    const classes=useStyles()
  return (
    <Box backgroundColor="#FFF8F8">

         <Box  className={classes.container} pt={16}>
         <Box  className={classes.footer}>
        <Box>
         <Logo/>
         </Box>
         <Box className={classes.footer__menu}>

            <Link>Overview</Link>
            <Link>Symptoms</Link>
            <Link>preventions</Link>
            <Link>Treatment</Link>
             
         </Box>
         <Box className={classes.footer__social}>
            <FacebookIcon sx={{color:"#035755"}}/>
            <YouTubeIcon sx={{color:'red'}}/>
            <TwitterIcon sx={{color:"#035755"}}/>

         </Box>
        </Box>

        <Typography textAlign="center" py={2} mt={5}color="#415E56" fontSize="13px">2022 @ All rights reserved by Shafayet Hossain</Typography>
         </Box>

    </Box>
  )
}
