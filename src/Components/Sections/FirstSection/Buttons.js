import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useWebAnimations from "@wellyshen/use-web-animations";

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
        // transition: 'background-color 0.4s linear',
        transition: 'border-radius  0.4s linear',
        cursor: 'pointer',
        fontFamily: '"montserrat",sans-serif',
        borderRadius: '40px',
        marginBottom: '15px',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: '#4075c9',
            color: 'white',
            borderRadius: '10px'
           
        },
   
     
    }
  }));

const ButtonGroup = () => {
    const classes = useStyles();
    
  

    const button1 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
              delay: 2000, // randomized for each tear  
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    const button2 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
              delay: 2500, // randomized for each tear  
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    const button3 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
              delay: 3000, // randomized for each tear  
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    const button4 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
              delay: 3500, // randomized for each tear  
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    const button5 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
              delay: 4000, // randomized for each tear  
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });




    return (
        <div  className={classes.buttonSection}>
 <Button ref={button1.ref} variant="outlined" className={classes.buttons}> SUPPORT </Button>

  <Button  ref={button2.ref} variant="outlined" className={classes.buttons} > WALLET</Button> 
  <Button  ref={button3.ref} variant="outlined" className={classes.buttons}> NEWS </Button>

  <Button  ref={button4.ref} variant="outlined" className={classes.buttons} > WHITE PAPER</Button> 
  <Button  ref={button5.ref} variant="outlined" className={classes.buttons}> ROAD MAP</Button>

  
        </div>
    )
}

export default ButtonGroup;
