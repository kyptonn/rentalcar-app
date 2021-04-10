import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
 } from 'react-google-maps'


const Map = (props) => {
    return (
        <div>
            <GoogleMap 
            defaultZoom={14}
            defaultCenter={{ lat:41.402, lng: 2.174}}
            />
            
            <Marker position={{lat:41.402,lng:2.174}}
            
            
            />
            
        </div>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
