import React, {  useEffect } from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import Node from '../../../../assets/masternodes1.png';
import '../../../css/thirdSection.css';
import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'white',
        marginTop: '23%',
        width: '50%',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },
    NodeSection:{
        marginTop: '10%',
        marginLeft: '5%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    }

   

  });



const NodeSection = () => {
    const classes = useStyles();

    const NodeSection = useWebAnimations({
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
        NodeSection.getAnimation().play(NodeSection);
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
        <section className={classes.NodeSection}>
            <div className="buildSection">
            <img src={Node} alt="NodeSection" ref={NodeSection.ref}/>

        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            Masternodes
            </Typography>
            <br/>            <br/>

            <Typography variant="h6">
            Syscoin Masternodes were launched and implemented along with Syscoin 3.0 on May 1st 2018. 
            Based on Dash code, Syscoin enhanced the masternodes to offer high transactional throughput using Z-DAG, governance issuance and seniority.
               </Typography>
        </div>

    

        </div>
        </section>


        

        </>
    )
}

export default NodeSection
