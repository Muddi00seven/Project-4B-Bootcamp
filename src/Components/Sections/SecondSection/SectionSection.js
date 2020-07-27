import React  from 'react'
import { Typography } from '@material-ui/core';
import '../../css/secondSection.css'
import { makeStyles } from '@material-ui/core/styles';
import CardSection from './Cards/Card';
// import {Grid} from '@material-ui/core';
import useWebAnimations from "@wellyshen/use-web-animations";

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

    const heading1 = useWebAnimations({
        keyframes: {
          transform: "translateY(10px)",
        },
        timing: {
            delay: 7000,
          duration: 1500, // Run for 1000ms
          iterations: 1, // Repeat once
          direction: "reverse", // Run the animation forwards and then backwards
          easing: "ease", // Use a fancy timing function
        },
      });



    return (
        <>
        <section> 
        <div className="SecondHeading">
        <div className="App">

           <Typography  ref={heading1.ref} variant="h2" className={classes.TopHeading}>
           Syscoin Platform

           </Typography>
           </div>

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


// const SectionSection = () => {
//     const [scrollY, setScrollY] = useState(0);
  
//     function logit() {
//       setScrollY(window.pageYOffset);
//       console.log(new Date().getTime());
//     }
  
//     useEffect(() => {
//       function watchScroll() {
//         window.addEventListener("scroll", logit);
//       }
//       watchScroll();
//       return () => {
//         window.removeEventListener("scroll", logit);
//       };
//     });
  
//     return (
//       <div className="App">
//         <div className="fixed-center">Scroll position: {scrollY}px</div>
//       </div>
//     );
//   };

export default SectionSection
