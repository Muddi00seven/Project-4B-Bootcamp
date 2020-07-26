import React from 'react'
import FirstSection from './Sections/FirstSection/fireSection';
import SectionSection from './Sections/SecondSection/SectionSection';
import ThirdSection from './Sections/ThirdSection/ThirdSection'
const Home = () => {
    return (
        <>
        <div>
            <FirstSection/>
        </div>
        <div>
<SectionSection/>
</div>
<section>   
     <ThirdSection/>
</section>
  
        </>
    )
}

export default Home
