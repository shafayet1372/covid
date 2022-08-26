import React from 'react'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';

import useStyles from '../css/style';

import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link ,animateScroll as scroll} from 'react-scroll'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor:"#e7c6c636",
  boxShadow:'none'
}));
export default function MobileMenu({expand}) {
    const classes=useStyles()
    
  return (
    <Box>
     

      <Box className={classes.mobile__menu}>
      <Accordion expanded={expand}  >
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
