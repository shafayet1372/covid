import React from 'react'
import { Box } from '@mui/material'
import useStyles from '../css/style'
import {Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect,useState } from 'react';
import CovidCountryList from './CovidCountryList';
const perPage=6
export default function CovidInfo() {
    const classes=useStyles()
    const [data,setData]=useState([])
    const [totalPage,setTotalPage]=useState(null)
    const [pageNo,setPageNo]=useState(1)

    const getData=()=>{
        fetch('https://api.covid19api.com/summary').
        then(res=>res.json())
        .then(data=>{
            setData(p=>[...data.Countries.slice()])
            setTotalPage(data.Countries.length)
        })
    }
    useEffect(()=>{ 
        getData()
        
    },[])
    
   const nextPageHandler=()=>{

    if(pageNo<Math.ceil(totalPage/perPage))  {
            setPageNo(p=>p+1)
        }
   }
   const prevPageHandler=()=>{
    if(pageNo>1){
        setPageNo(p=>p-1)
    }
}

  return (
    <Box className={classes.container} mt={5}>
    <Box className={classes.report__wrapper}>
   <Box display="flex" justifyContent="center" gap="30px" flexWrap="wrap" alignItems="center">
   <Typography textAlign="center" fontWeight="bold" color="#035755" fontSize="3.5rem">
            Live Reports
         </Typography>
         <Box display="flex" height="48px" boxShadow="0px 5px 50px rgba(87, 1, 0, 0.1)" backgroundColor="#FFFFFF" borderRadius= "6.16667px" justifyContent="space-between" flexWrap="wrap" alignContent="center" boxShadow="0px 5px 50px rgba(87, 1, 0, 0.1)"> 
          <IconButton  onClick={prevPageHandler}>
            <KeyboardArrowLeftIcon sx={{color:pageNo!==1?"red":null}} />
          </IconButton>
          <Box display="inline" borderRight="2px solid #DEE1ED">
             
          </Box>
          <IconButton onClick={nextPageHandler}>
            <ChevronRightIcon sx={{color:pageNo<Math.ceil(totalPage/perPage)?'red':null}}/>
          </IconButton>
         </Box>
   </Box>

   <Box>
   <CovidCountryList data={data.slice((pageNo*perPage)-perPage,pageNo*perPage)}/>
   </Box>
    </Box>
     

    </Box>
  )
}
