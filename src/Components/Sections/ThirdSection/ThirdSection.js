import React from 'react'
import BuildSection from './Build/BuildSection';
import PointSection from './PointOfSale/PointSection'
import CryptoSection from './CreateCryptoTokens/CryptoSection'
const ThirdSection = () => {
    return (
        <>
        <div>
           <BuildSection/> 
        </div>
        <div>
        <PointSection/>
        </div>
        <div>
            <CryptoSection/>
        </div>
        </>
    )
}

export default ThirdSection;
