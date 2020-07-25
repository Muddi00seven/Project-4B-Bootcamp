import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    buttonSection: {
        textAlign : 'center',
        // marginBottom : '350px',
        marginTop: '4%',
       },

    buttons : {
        color: 'white',
        borderBlockStyle: 'solid',
        border: '5px',
        width: '200px',
        height: '42x',
        fontSize: '18px',
        transition: 'background-color 0.4s linear',
        cursor: 'pointer',
        fontFamily: '"montserrat",sans-serif',
        borderRadius: '40px',
        marginBottom: '15px',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: '#4075c9',
            color: 'white',
           
        },
   
        ['@media(maxWidth: 480px)'] : {
          width: '10px',
          paddingBottom: '15px'
        
        }
    }
  }));

const ButtonGroup = () => {
    const classes = useStyles();

    return (
        <div className={classes.buttonSection}>
 <Button variant="outlined" className={classes.buttons}> SUPPORT </Button>

  <Button variant="outlined" className={classes.buttons} > WALLET</Button> 
  <Button variant="outlined" className={classes.buttons}> NEWS </Button>

  <Button variant="outlined" className={classes.buttons} > WHITE PAPER</Button> 
  <Button variant="outlined" className={classes.buttons}> ROAD MAP</Button>

  
        </div>
    )
}

export default ButtonGroup;
