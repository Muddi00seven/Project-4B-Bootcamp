import React from 'react'
import { Typography } from '@material-ui/core';
import '../../css/secondSection.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from './Cards/Card';
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
    return (
        <>
        <section>
        <div className="SecondHeading">
           <Typography variant="h2" className={classes.TopHeading}>
           Syscoin Platform

           </Typography>

        </div>

        <div className="SecondSubHeading">
           <Typography variant="h5" className={classes.SubHeading1}>
           Key Features

           </Typography>

        </div>
        <Card/>
        </section>
        </>
    )
}

export default SectionSection
