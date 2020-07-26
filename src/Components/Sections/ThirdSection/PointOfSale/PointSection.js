
import React from 'react'
import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";
import PontForSale from '../../../../assets/pointofsale.png'
import '../../../css/thirdSection.css';


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'white',
        marginTop: '10%',
        width: '50%'

    },
    PontForSale:{
        marginTop: '10%',
        marginLeft: '5%',
        marginRight : '4%',
    }

   

  });



const PointSection = () => {
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

    
            <img src={PontForSale} alt="PontForSale"/>

        </div>
        </section>


        

        </>
    )
}

export default PointSection
