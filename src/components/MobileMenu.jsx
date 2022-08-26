import React from 'react'
import { Box } from '@mui/system'

import useStyles from '../css/style';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link ,animateScroll as scroll} from 'react-scroll'
export default function MobileMenu({expand}) {
    const classes=useStyles()
    
  return (
    <Box>
     

      <Box className={classes.mobile__menu}>
      <Accordion expanded={expand} >
        <AccordionSummary
        sx={{display:"none"}}
          
        >
          
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
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
              Contact
                 </Link>
               
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  )
}
