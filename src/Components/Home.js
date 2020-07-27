import React from 'react'
import FirstSection from './Sections/FirstSection/fireSection';
import SectionSection from './Sections/SecondSection/SectionSection';
import ThirdSection from './Sections/ThirdSection/ThirdSection'
import Contact from './contact/Contact'
const Home = () => {
    return (
        <>
    <section>
        <FirstSection/>
    </section>

    <section>
        <SectionSection/>
    </section>
    <section>   
         <ThirdSection/>
    </section>
    <div>
        <Contact/>
    </div>

  
        </>
    )
}

export default Home
