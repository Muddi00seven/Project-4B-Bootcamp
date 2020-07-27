import React, { useEffect } from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import Bridge from '../../../../assets/bridge1.png'
import '../../../css/thirdSection.css';
import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'white',
        marginTop: '15%',
        width: '50%'

    },
    BridgeSection:{
        marginTop: '10%',
        marginLeft: '4%',
        marginRight : '4%',
    },
    bridgePara:{
        fontSize: '18px',
        marginLeft: '4%',
        marginRight : '4%',
    },
    bridgeImage: {
        height: '650px',
        width: '600px',
        marginTop: '8%',

    }
   

  });



const BridgeSection = () => {
    const classes = useStyles();
    const BridgeSection = useWebAnimations({
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
        BridgeSection.getAnimation().play(BridgeSection);
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
        <section className={classes.BridgeSection}>
            <div className="buildSection">
        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            Syscoin Bridge

            </Typography>
            <br/>            <br/>

            <Typography variant="h6" className={classes.bridgePara}>
            Syscoin 4.0 introduces a first-of-its-kind, two-way bridge to Ethereum. This allows Ethereum developers to move ERC20 tokens back and forth between
             the Ethereum network and Syscoin Platfom, where they can make use of the scalability and high-transaction-throughput that Syscoin offers. This is done 
             using a unique, permissionless burn/mint process that moves a quantity of ERC20 tokens into a corresponding Syscoin Platform Token (SPT), which the user has created.
              The bridge makes it possible to maintain a presence on both the Syscoin network and Ethereum network.
             </Typography>
             <br/> <br/>
             <Typography variant="h6" className={classes.bridgePara}>
             Syscoin 4.0 introduces a first-of-its-kind, two-way bridge to Ethereum. This allows Ethereum developers to move ERC20 tokens back and forth between the Ethereum network and Syscoin Platfom, where they can make use of the scalability and 
             high-transaction-throughput that Syscoin offers. This is done using a unique, permissionless burn/mint process that moves a quantity of ERC20 tokens into a corresponding
              Syscoin Platform Token (SPT), which the user has created. The bridge makes it possible to maintain a presence on both the Syscoin network and Ethereum network.    
             </Typography>
        </div>

    
            <img src={Bridge} alt="BridgeSection" ref={BridgeSection.ref}className={classes.bridgeImage}/>

        </div>
        </section>


        

        </>
    )
}

export default BridgeSection;
