import React from 'react';
import './UrgencyTable.css'
// import { render } from '@testing-library/react';

const UrgencyTable = (props) => {
        const {route} = props ;
        return(
            <div className='urgency'>
                <p 
                    className={route == 'Now'? 'selceted':''}
                    onClick={() => props.onRouteChange('Now')}
                >Now</p>
                <p 
                    className={'side-border ' + 
                        (route == 'near'? 'selceted':'')}
                        onClick={() => props.onRouteChange('near')}
                    > in near future</p>
                <p 
                    className={route == 'far'? 'selceted':''}
                    onClick={() => props.onRouteChange('far')}    
                >in distant future</p>
         </div>
        )
        
    }
    

export default UrgencyTable;