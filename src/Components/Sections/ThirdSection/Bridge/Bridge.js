import React from 'react'
import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";
import Build from '../../../../assets/WHAT CAN YOU BUILD.png'
import '../../../css/thirdSection.css';


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
    const classes = useStyles()
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

    
            <img src={Build}/>

        </div>
        </section>


        

        </>
    )
}

export default BuildSection
