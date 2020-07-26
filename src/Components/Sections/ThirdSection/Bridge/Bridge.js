import React from 'react'
import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";
import Bridge from '../../../../assets/bridge1.png'
import '../../../css/thirdSection.css';


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
    const classes = useStyles()
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

    
            <img src={Bridge} className={classes.bridgeImage}/>

        </div>
        </section>


        

        </>
    )
}

export default BridgeSection;
