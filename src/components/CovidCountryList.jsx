import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import useStyles from '../css/style';
export default function CovidCountryList({data}) {
const classes=useStyles()
    
   console.log(data)
  return   <List className={classes.report__list}>
  {data.map((data,i)=>
    <ListItem  kye={data.id} display='flex' justifyContent="space-between">
    <ListItemButton>
   <Box display="flex" gap="15px" alignItems="center" >
   <Box className={classes.flag__wrapper}>
   <img src={`https://countryflagsapi.com/png/${data.CountryCode}`} alt="" style={{width:'100%',height:'100%'}}/>
   </Box>
   <Typography color="#13615F"  fontWeight="bold">{data.Country}</Typography>
   </Box>
 
    </ListItemButton>
    <Typography color="#13615F"  fontWeight="bold">{data.TotalConfirmed.toLocaleString()}</Typography>
  </ListItem>
    )}
 
</List>
}
