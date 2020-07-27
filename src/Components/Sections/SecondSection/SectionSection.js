import React from 'react'
import { Typography } from '@material-ui/core';
import '../../css/secondSection.css'
import { makeStyles } from '@material-ui/core/styles';
import CardSection from './Cards/Card';
// import {Grid} from '@material-ui/core';
import useWebAnimations, { tada } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    TopHeading:{
        color: 'white',
    },
    SubHeading1 : {
        marginLeft: '280px',
        marginRight: '280px',
        color: 'white'
    }

}))
const SectionSection = () => {
    const classes = useStyles();


    const { keyframes, timing } = tada;
    const heading1 = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 500,
        duration: 5000,
        iterations: 1,
        easing: "ease-in-out",
      },
    });

    function scrollFor() {
        heading1.getAnimation().play(heading1);
    }

    return (
        <>
        <section onScroll={scrollFor}> 
        <div className="SecondHeading">
           <Typography  ref={heading1.ref} variant="h2" className={classes.TopHeading}>
           Syscoin Platform

           </Typography>

        </div>

        <div className="SecondSubHeading">
           <Typography variant="h5" className={classes.SubHeading1}>
           Key Features

           </Typography>

        </div>
        <CardSection/>

        </section>

        </>
    )
}

export default SectionSection
