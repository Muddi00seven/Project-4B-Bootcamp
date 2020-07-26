import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card , Grid , CardActionArea, CardActions, CardContent,
  CardMedia , Button , Typography} from '@material-ui/core';
import Service1 from '../../../../assets/service/SERVICE IMAGE 2.png';
import Service2 from '../../../../assets/service/SERVICE IMAGE4.png';
import Service3 from '../../../../assets/service/SERVICE IMAGE7.png';
import Service4 from '../../../../assets/service/SERVICE IMAGE11.png';


const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
    backgroundColor : '#00000000',
    marginLeft: '10%',
    marginBottom: '10%'

    },
    cardContainer:{
        display : 'flex',

    }
  });
  
const CardSection = () => {
    const classes = useStyles();

    return (
        <>
        <div>
        <Grid xs={12} sm={6} md={4} item className={classes.cardContainer}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Service1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          High Transaction Throughput
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Syscoin's unique Z-DAG technology means the network can handle a transaction throughput of 
          60158 Syscoin Platform Token transactions per second (TPS), while remaining decentralised and secure.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Service2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Interoperability
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Build bridges between blockchains with Syscoin Bridge,
           interoperability with other chains has never been easier.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 

      {/* down grid */}
     </Grid>

     <Grid xs={12} sm={6} md={4} item className={classes.cardContainer}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Service3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          High Security
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Syscoin is merge-mined with 
          Bitcoin which provides Syscoin with an incredibly robust and secure network.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 



    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Service4}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Low Fees

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The fees to transact Syscoin Platform Tokens or Assets are very low, making them 
          suited for a wide range of use cases such as point-of-sale transactions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 

     </Grid>

        </div>
        </>
    )
}

export default CardSection
