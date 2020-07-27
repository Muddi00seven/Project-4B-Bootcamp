
import React, { useEffect } from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import PontForSale from '../../../../assets/pointofsale.png'
import '../../../css/thirdSection.css';
import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'white',
        marginTop: '10%',
        width: '50%',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },
    PontForSale:{
        marginTop: '10%',
        marginLeft: '5%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    }

   

  });



const PointSection = () => {
    const PointSection = useWebAnimations({
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
        PointSection.getAnimation().play(PointSection);
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

    const classes = useStyles()
    return (
        <>
        <section className={classes.PontForSale}>
            <div className="SaleSection">
        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            Point Of Sale

            </Typography>
            <br/>            <br/>

            <Typography variant="h6">
            
            The Syscoin protocol facilitates real-world 
            point-of-sale applications that can be used to transact in-store or via e-commerce. The high speed, quick resolution of asset transactions via Syscoin’s proprietary Z-DAG technology means you can empower your business with the speed and security of blockchain.    
            </Typography>
            <br/>
            <Typography variant="h6">
            Some examples of retail use cases include:
            </Typography>
            <ul>
                <li>De-Centralised Marketplaces and E-Commerce </li>
                <li>Game Assets and Microtransactions</li>
                <li>Certificate Backed Digital Goods</li>

            </ul>
        </div>

    
            <img src={PontForSale} alt="PontForSale" ref={PointSection.ref}/>

        </div>
        </section>


        

        </>
    )
}

export default PointSection
