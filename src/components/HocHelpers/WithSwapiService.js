import React from 'react';
import { SwapiServiceConsumer } from '../sw-context/sw-context';

const WithSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return ( 
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    }
}
export default WithSwapiService;