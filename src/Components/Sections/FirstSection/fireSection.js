import React from 'react'
import { Typography } from '@material-ui/core';
import '../../css/firstSection.css'
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from './Buttons'

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
const FireSection = () => {
    const classes = useStyles();
    return (
        <>
        <div className="firstHeading">
           <Typography variant="h2" className={classes.TopHeading}>
           The blockchain platform for real money, assets,
            and blazing-fast token payments that scale.
           </Typography>

        </div>

        <div className="firstSubHeading">
           <Typography variant="h5" className={classes.SubHeading1}>
           Syscoin Platform provides trustless interoperability with Ethereum ERC-20, token & asset 
           microtransactions, and Bitcoin-core-compliant merge-mined security.
           </Typography>

        </div>
        <ButtonGroup/>
        </>
    )
}

export default FireSection;
