import React, { useEffect } from 'react';
import { Typography, makeStyles} from "@material-ui/core";
import Build from '../../../../assets/WHAT CAN YOU BUILD.png'
import '../../../css/thirdSection.css';
import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'white',
        marginTop: '25%',
        width: '50%'

    },
    buildSection:{
        marginTop: '10%',
        marginLeft: '5%',
        marginRight : '4%',
    }

   

  });

  

const BuildSection = () => {
    const classes = useStyles();
    const build = useWebAnimations({
        keyframes: {
          transform: "translateX(15px)",
        },
        timing: {
          duration: 1500, // Run for 1000ms
          iterations: 2, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });
    
      function scrollFor() {
        build.getAnimation().play(build);
        // card2.getAnimation().play(card2);
        // card3.getAnimation().play(card3);
        // card4.getAnimation().play(card4);
    
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
        <>
        <section className={classes.buildSection}>
            <div className="buildSection">
        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            What Can You Build?

            </Typography>
            <br/>            <br/>

            <Typography variant="h6">
            The possibilities of what you can build on the Syscoin
            platform are limited only by your imagination. Here are a some use cases to get your wheels turning:            </Typography>
        </div>

    
            <img src={Build} alt="build" ref={build.ref}/>

        </div>
        </section>


        

        </>
    )
}

export default BuildSection
