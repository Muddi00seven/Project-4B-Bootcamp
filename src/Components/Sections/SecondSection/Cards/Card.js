import React, {  useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card , Grid , CardActionArea, CardContent,
  CardMedia  , Typography} from '@material-ui/core';
import Service1 from '../../../../assets/service/SERVICE IMAGE 2.png';
import Service2 from '../../../../assets/service/SERVICE IMAGE4.png';
import Service3 from '../../../../assets/service/SERVICE IMAGE7.png';
import Service4 from '../../../../assets/service/SERVICE IMAGE11.png';
import useWebAnimations from "@wellyshen/use-web-animations";

import '../../../css/secondSection.css'

const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
    backgroundColor : '#00000000',
    marginBottom: '10%',
    width: '350px',


    },

    root1: {
      backgroundColor : '#00000000',
      width: '350px',
      marginBottom: '10%',
      fontFamily: 'Tahoma, Geneva, sans-serif'



    },
    cardContainer:{
        display : 'flex',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },

  });







  
const CardSection = () => {
    const classes = useStyles();



    const card1 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });
    const card2 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });
    const card3 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });
    const card4 = useWebAnimations({
      keyframes: {
        transform: "translateY(20px)",
      },
      timing: {
        duration: 1500, // Run for 1000ms
        iterations: 2, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });

    function scrollFor() {
        card1.getAnimation().play(card1);
        card2.getAnimation().play(card2);
        card3.getAnimation().play(card3);
        card4.getAnimation().play(card4);

    }


    // const [scrollY,] = useState(0);
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", scrollFor);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", scrollFor);
      };
    });







    
    return (
        < >
        <section >
        <div className='AllCards' >
        <Grid  className={classes.cardContainer}>
        <div className="card1">

        <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
        ref={card1.ref}
          component="img"
          alt="Contemplative Reptile"
          image={Service1}
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          High Transaction Throughput
          </Typography>
          <Typography variant="body2" component="h6">
          Syscoin's unique Z-DAG technology means the network can handle a transaction throughput of 
          60158 Syscoin Platform Token transactions per second (TPS), while remaining decentralised and secure.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card> 
      </div>

      <div className="card2">
    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
        ref={card2.ref}
          component="img"
          alt="Contemplative Reptile"
          image={Service2}
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          Interoperability
          </Typography>
          <Typography variant="body2" component="h6">
          Build bridges between blockchains with Syscoin Bridge,
           interoperability with other chains has never been easier.

          </Typography>
        </CardContent>
      </CardActionArea>
 
    </Card> 
    </div>
      {/* down grid */}
     </Grid>

     <Grid className={classes.cardContainer}>
     <div className="card1">

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        ref={card3.ref}
          component="img"
          alt="Contemplative Reptile"
          image={Service3}
          title="Contemplative Reptile"
        />
        <CardContent  className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          High Security
          </Typography>
          <Typography variant="body2" component="h6">
          Syscoin is merge-mined with 
          Bitcoin which provides Syscoin with an incredibly robust and secure network.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card> 
</div>

<div className="card2">

    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
        ref={card4.ref}
          component="img"
          alt="Contemplative Reptile"
          image={Service4}
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h4" component="h2">
          Low Fees

          </Typography>
          <Typography variant="body2" component="h6">
          The fees to transact Syscoin Platform Tokens or Assets are very low, making them 
          suited for a wide range of use cases such as point-of-sale transactions.
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card> 
      </div>
     </Grid>

        </div>
        </section>
        </>
    )
}

export default CardSection
