import { makeStyles } from '@mui/styles';

const useStyles=makeStyles((theme)=>({
 
  container:{
    maxWidth:'90%',
    margin:"0 auto"
  },
  header:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
    // marginTop:'10px'
  },
  headerWrapper:{
   backgroundColor:'#FFF8F8',
   margin:'0px !important',
   padding:"15px"
  },
  logo:{
    display:'flex',
    alignItems:'center',
    gap:'14px',
    "& a":{
        textDecoration:'none',
        fontSize:"19px",
        fontWeight:'bold',
        color:"#035755",
        fontFamily:"Red Hat Display', sans-serif",
        [theme.breakpoints.down('968')]: {
         fontSize:'15px'
       }
    },
    "& img":{
      [theme.breakpoints.down('968')]: {
         width:'30%'
       }
    }
  },
  menu:{
    display:'flex',
    alignItems:'center',
    gap:"45px",
    fontFamily:"'Red Hat Display', 'sans-serif'",
    "&>:first-child":{
       color:'#FB4C47',
    },
    "&>:last-child>button":{
        width:"154px",
        height:'55px',
        // display:'flex',
        // alignItems:'center',
        // flexDirection:'row',
        // justifyContent:'center',
        border:"2px solid #FB4C47",
        borderRadius:'46px',
        color:"#FB4C47",
        backgroundColor:'transparent',
      
        "&:hover":{
         backgroundColor:"#FB4C47",
         color:'white',
         cursor:'pointer'
        } ,
        [theme.breakpoints.down('968')]: {
         width:"124px",
         height:'45px',
       }
      
     },
    "& a":{
        textDecoration:'none !important',
        color:"#035755",
        fontSize:'18px',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        [theme.breakpoints.down('1024')]: {
         fontSize:'16px'
       },
       [theme.breakpoints.down('968')]: {
         fontSize:'14px'
       },
        "&:hover:not(:last-child)::after":{
            content:"''",
            position:"absolute",
            height:'5px',
            width:'5px',
            backgroundColor:'#FB4C47',
            borderRadius:'50%',
            bottom:'-10px',

        },
        "&:hover":{
            color:"#FB4C47"
        },
      
        
    }
    ,
    [theme.breakpoints.down('lg')]: {
      gap:'25px'
    },
    [theme.breakpoints.down('968')]: {
      gap:'14px'
    },
    [theme.breakpoints.down('md')]: {
      width:"160px !important",
      height:'60px !impotant',
      padding:'10px 0px !important',
    },
    [theme.breakpoints.down('md')]: {
    display:'none !important'
    }
  },
  
 header__info:{
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
      flexDirection:'column-reverse',
    },
 },
 header__left:{
   marginTop:"320px",width:"40%",
   [theme.breakpoints.down('lg')]: {
      marginTop:'250px'
    },
    [theme.breakpoints.down('md')]: {
      width:'50%',
      marginTop:'25px',
      alignSelf:'flex-end'
    },
    
 },
 header__right:{
   width:"60%",
   [theme.breakpoints.down('md')]: {
     width:'100%',
      
      height:'300px !important'
    },
    [theme.breakpoints.down('400')]: {
      width:'100%',
    
       height:'280px !important'
     },
     [theme.breakpoints.down('sm')]: {
      width:'100%',
    
       height:'200px !important'
     },
 
 },
 header__info__title:{
    fontSize:'28px !important',
    color:"#FA5652",
    fontWeight:'bold !important',
    lineHeight:"100%",
    [theme.breakpoints.down('lg')]: {
      fontSize:'18px !important',
    },
    [theme.breakpoints.down('md')]: {
      fontSize:'16px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'12px !important',
    },
 },
 header__info__subtitle:{
     fontSize:'40px !important',
     color:'#035755',
     fontWeight:'bold !important',
     lineHeight:'100% !important',
     letterSpacing:"0% !important",
     fontFamily:'Red Hat Display !important',
     [theme.breakpoints.down('lg')]: {
      fontSize:'26px !important',
    },
    [theme.breakpoints.down('xl')]: {
      fontSize:'26px !important',
    },
    [theme.breakpoints.down('md')]: {
      fontSize:'24px !important',
    },
    
    [theme.breakpoints.down('sm')]: {
      fontSize:'18px !important',
    },
     
 },
 header__info__btn:{
   marginTop:'25px !important',
   width:"200px !important",
   height:'60px !impotant',
   padding:'20px 0px !important',
   backgroundColor:'#FB4C47 !important',
   boxShadow:"0px 8px 87px rgba(0, 0, 0, 0.1)",
   borderRadius:'65px !important',fontWeight:'700',
   textTransform:'capitalize',
   fontSize:"1.5rem !important",
   [theme.breakpoints.down('lg')]: {
      width:"180px !important",
      height:'60px !impotant',
      padding:'15px 0px !important',
    },
    [theme.breakpoints.down('md')]: {
      width:"160px !important",
      height:'60px !impotant',
      padding:'10px 0px !important',
    },
    [theme.breakpoints.down('sm')]: {
      width:"100px !important",
      height:'50px !impotant',
      padding:'5px 0px !important',
    },
 },
 header__info__description:{
   marginTop:'20px !important',
   color:"#4B4F51",
   lineHeight:'190%',
   fontSize:'18px !important',
   fontWeight:'bold',
   [theme.breakpoints.down('lg')]: {
      fontSize:'16px !important',
    },
    [theme.breakpoints.down('md')]: {
      fontSize:'14px !important',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'13px !important',
      lineHeight:'150%',
    },
     
 },

 mobile__menu__icon:{
   fontSize:'20px !important',
   [theme.breakpoints.up('md')]: {
    display:'none !important'
  },
 },
 mobile__menu:{
  display:'flex !important',
  flexDirection:'column !important',
  '& a':{
    fontSize:'14px',
    color:"#035755",
    
  },
  [theme.breakpoints.up('md')]: {
    display:'none !important'
  },
 },
 header__image:{
    '& img':{
        width:'100%',
        height:'100%',
      //   [theme.breakpoints.down('lg')]: {
      //    width:'100%',
      //    height:'100%'
      //  },
      //  [theme.breakpoints.down('md')]: {
      //    width:"100%",
      //    height:'100%'
      //  },
    },
    marginTop:'70px',
    height:'600px'
 }
 ,
 about__section:{
    display:'flex',
     overflow:'hidden',
     justifyContent:'space-between',
     padding:'30px',
     [theme.breakpoints.down('1025')]: {
     padding:'40px'
    },
    [theme.breakpoints.down('900')]: {
      flexDirection:'column',
      alignItems:'center',
     },
    
 },
 about__image:{
  width:'50%',
  marginLeft:'-100px',
  "& img":{
     width:'100%',
     transform:'rotate(-10.07deg)'
},
[theme.breakpoints.down('900')]: {
 display:'flex',

 justifyContent:'center',
 marginLeft:'0px',
 width:'80%'
 },

 },
 about__info:{
 width:'50%',
 marginTop:'170px',
 [theme.breakpoints.down('1100')]: {
  marginTop:'110px',
},
[theme.breakpoints.down('1025')]: {
  marginTop:'90px',
  
},
[theme.breakpoints.down('900')]: {
  marginTop:'40px',
  width:'100%'
 },

 },
 about__title:{
  
    color:'#FA5652 !important',
    lineHeight:'50px',
    fontSize:'2rem !important',
    fontWeight:'bold !important',
   
 }
 ,
 about__subtitle:{
    color:"#035755",
    fontSize:'5rem !important',
    fontWeight:'700 !important',
    // lineHeight:'35px !important',
    marginTop:'30px',
    // [theme.breakpoints.down('md')]: {
    //   fontSize:'35px !important'
    // },
    // [theme.breakpoints.down('sm')]: {
    //   fontSize:'28px !important'
    // },
    [theme.breakpoints.down('sm')]: {
      fontSize:"3rem !important"
      },
 },
 about__description:{
    fontSize:'16px !important',
    lineHeight:'38px !important',
    color:'#4B4F51',
    textAlign:'justify !important',
    // [theme.breakpoints.down('md')]: {
    //   lineHeight:"28px !important",
    //   fontSize:'12px !important',
    // },
    [theme.breakpoints.down('sm')]: {
      fontSize:"14px !important",
      lineHeight:'28px !important',
      },
 }
 ,
 contagion__container:{
   marginTop:'150px'
 },
 section__title:{
   color:'#FA5652 !important',
    lineHeight:'50px',
    fontSize:'2rem !important',
    fontWeight:'bold !important',
    textAlign:'center'
 },
 section__subtitle:{
   color:"#035755",
   fontSize:'50px !important',
   fontWeight:'700 !important',
   // lineHeight:'35px !important',
   marginTop:'30px',
   textAlign:'center',
   [theme.breakpoints.down('md')]: {
    fontSize:'35px !important'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize:'22px !important'
  },
 },
 section__description:{
   fontSize:'16px !important',
   lineHeight:'38px !important',
   color:'#4B4F51',
   fontWeight:'bold',
   textAlign:'center !important',
   [theme.breakpoints.down('md')]: {
    fontSize:'14px !important',
   
  },
  [theme.breakpoints.down('sm')]: {
    fontSize:'14px !important',
    lineHeight:'28px !important'
   
  },
 },
 contagion__grid:{
  [theme.breakpoints.down('sm')]: {
    padding:'20px'
  },
 },
 contagion__card:{
   backgroundColor:'#FFFFFF',
   boxShadow:"0px 5px 80px rgba(0, 0, 0, 0.08) !important",
   borderRadius:'10px !important',
   minHeight:'420px',
   boxSizing:'border-box !important',
   padding:"15px",
   // '& img':{
   //    width:"100%",
   //    height:'inherit !important'
   // }
   [theme.breakpoints.down('725')]: {
    minHeight:'320px',
  },
 },
 contagion__card__title:{
  textAlign:'center', 
  color:"#035755", fontWeight:'bold !important',
   fontSize:"2.2rem !important",
   [theme.breakpoints.down('sm')]: {
    fontSize:'16px !important'
  },
 },
 contagion__card__subtitle:{
  textAlign:'center', color:"#4B4F51" ,fontWeight:"400",
  fontSize:'1.4rem ',
  [theme.breakpoints.down('lg')]: {
    fontSize:'14px !important'
  },
  [theme.breakpoints.down('725')]: {
    fontSize:'12px !important'
  },
 
 },
 contagion__card__img:{
  width:'90%',
  height:'250px',
  [theme.breakpoints.down('728')]: {
    width:'80% !important',
    height:'220px !important',
  },
  [theme.breakpoints.down('728')]: {
    width:'70% !important',
    height:'200px !important',
  },
  [theme.breakpoints.down('728')]: {
    width:'70% !important',
    height:'160px !important',
  },


 },
 symptoms__wrapper:{
   width:'80%',
   margin:'0 auto',
   display:'flex',
   justifyContent:'center',
   "& img":{
      width:'100%'
   }
   ,
   [theme.breakpoints.down('md')]: {
    width:'100%'
    
  },
 }
 ,
 safety__wrapper:{
   display:'flex',
   gap:"30px",
   '& .css-8pf9vq-MuiTypography-root':{
    fontSize:'40px !important',
   
   },
   [theme.breakpoints.down('md')]: {
    "& img":{
      width:'60px'
    },
    
    
  },
  [theme.breakpoints.down('sm')]: {
    '& .css-8pf9vq-MuiTypography-root':{
      fontSize:'18px !important',
     
     }
    
  },
  
 
   
 },
 safety__grid:{
  [theme.breakpoints.down('md')]: {
  "& .MuiGrid-grid-xxs-12":{
    display:'flex !important'
  }
  },
 },
 safety__grid__reverse:{
  display:'flex',
  alignItems:'center',
  [theme.breakpoints.down('md')]: {
    flexDirection:'column-reverse !important',
    marginTop:'15px'
  },
 },
  safety__img:{
    width:'100% !important'
     ,
     [theme.breakpoints.down('md')]: {
      width:'60% !important',
       margin:'0 auto'
    },
 },
 report__wrapper:{
   width:'60%',
   margin:"0 auto",
   background:'linear-gradient(360deg, #FFFBFB -79.45%, #FDFDFD 105.35%)',
   boxShadow:' 0px 7px 95px rgba(0, 0, 0, 0.07)',
   [theme.breakpoints.down('md')]: {
    width:'100% !important',
  
  },
 },
 flag__wrapper:{
  height:'50px',
  width:'100px',
  '& ~ p':{
   fontSize:'20px !important'
  },
  [theme.breakpoints.down('md')]: {
    
    height:'40px',
    width:'80px'
  
  },
  [theme.breakpoints.down('400')]: {
    
    height:'20px',
    width:'40px'
  
  },
 },

 report__list:{
  '& p':{
    fontSize:'20px !important'
  },
  [theme.breakpoints.down('400')]: {
    
    "& p":{
      fontSize:'14px !important'
    }
  
  },
  [theme.breakpoints.down('320')]: {
    
    "& p":{
      fontSize:'12px !important'
    }
  
  },
 },
 subscribe__wrapper:{
   display:'flex',
   justifyContent:'center',
   flexDirection:'column',
   alignItems:'center',
   padding:'20px 0px'

 },
 subscribe__input:{
   marginTop:'20px',
   width:'600px',
   height:'70px',
   backgroundColor:'white',
   boxShadow:'0px 8px 80px rgba(0, 0, 0, 0.06)',
   borderRadius:'47px',
   outline:'none',
   border:'0px',
   padding:'4px 22px',
   color:'grey',
   fontSize:'20px',
   margin:'0px !important',
   [theme.breakpoints.down('md')]: {
    
    height:'70px',
    width:'400px'
  
  },
  [theme.breakpoints.down('sm')]: {
    
    height:'40px',
    width:'290px',
    padding:'2px 14px',
  
  },
  [theme.breakpoints.down('xs')]: {
    
    height:'30px',
    width:'200px'
  
  },
 },
 subscribe__btn:{
   position:'absolute',
   top:"12%",
   right:'2%',
   backgroundColor:'#F44A45',
   fontSize:'18px',
   lineHeightL:'20px',
   color:'white',
   fontWeight:'bold',
   height:'60px',
   width:'160px',
   outline:'none',
   border:'0px',
   borderRadius:'37px',
   [theme.breakpoints.down('xs')]: {
    
    height:'30px',
    width:'100px',
    fontSize:'13px',
  
  },
  [theme.breakpoints.down('sm')]: {
    
    height:'35px',
    width:'70px',
    fontSize:'14px',
   
  },
 },
footer:{
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   [theme.breakpoints.down('md')]: {
    
    flexDirection:'column',
    gap:'25px'
   
   },
},
footer__menu:{
      display:'flex ',
      alignItems:'center',
      gap:"45px",
      "& a":{
         textDecoration:'none',
         fontSize:'18px',
         color:'#035755',
         cursor:'pointer',
         "&:hover":{
            color:'#FB4C47',

         },
         [theme.breakpoints.down('1024')]: {
          fontSize:'16px'
        },
        [theme.breakpoints.down('968')]: {
          fontSize:'14px'
        },
      },
      [theme.breakpoints.down('md')]: {
    
       gap:'8px'
      
      },
     
      // textDecoration:'none !important',
      // color:"#035755",
      // fontSize:'18px',
      // position:'relative',
      // display:'flex',
      // flexDirection:'column',
      // alignItems:'center',
   
},
footer__social:{
   display:'flex',
   alignItems:'center',
   gap:'30px',
   "& svg":{
      cursor:'pointer'
   }
}
}))


export default useStyles