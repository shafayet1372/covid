import {React,useEffect} from 'react'
import { Box } from '@mui/material'
import useStyles from '../css/style.js'
import Logo from './Logo.jsx';
import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import HeaderImage from '../image/image1.png'
import { Link ,animateScroll as scroll} from 'react-scroll'
export default function Header() {
    const classes=useStyles()
    useEffect(()=>{
    
        scroll.scrollToTop({
          duration:'1000'
        });
      
    },[])
  return <Box className={classes.headerWrapper}>
           <Box className={classes.container} >
            <Box className={classes.header}>
             <Logo/>
            <Box className={classes.menu}>
            <Link   to="overview" spy={true} smooth={true} duration={800} className={classes.active}>
                     
                 Overview
            </Link>
            <Link   to="contagion" spy={true} smooth={true} duration={800} className={classes.active}>            
            Contagion
             </Link>
             <Link   to="symptoms" spy={true} smooth={true} duration={800} className={classes.active}>            
             Symptoms
             </Link>
             <Link   to="prevention" spy={true} smooth={true} duration={800} className={classes.active}>            
             Prevention
             </Link>
             <Link   to="contact" spy={true} smooth={true} duration={800} className={classes.active}>            
             <button type="">Contact</button>
             </Link>
           
            </Box>
            </Box>
           <Box className={classes.header__info}>
            <Box className={classes.header__left}> 
                <Typography className={classes.header__info__title}>
              COVID-19 Alert
              </Typography>
              <Typography className={classes.header__info__subtitle}>
              Stay at Home quarantine<br/>
              To stop Corona virus
              </Typography>
              <Typography className={classes.header__info__description}>
                There Is No Medicince To Prevent or Treat Coronavirus
                Diseases (COVID-19),People Need Supportive Care to
              </Typography>
              <Button variant="contained" className={classes.header__info__btn}>Let Us Help</Button>
            </Box>
            <Box  className={`${classes.header__image} ${classes.header__right}`}>
                <img src={HeaderImage} alt=""  />

            </Box>
           </Box>

           </Box>
        </Box>
}
