import React from 'react'
import BuildSection from './Build/BuildSection';
import PointSection from './PointOfSale/PointSection'
import CryptoSection from './CreateCryptoTokens/CryptoSection'
import BridgeSection from './Bridge/Bridge';
import NodeSection from './MasterNode/NodeSection';

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
        <div>
            <BridgeSection/>
        </div>
        <div>
            <NodeSection/>
        </div>
        </>
    )
}

export default ThirdSection;
