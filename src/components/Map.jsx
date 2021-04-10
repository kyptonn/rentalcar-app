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
            defaultZoom={15}
            defaultCenter={{ lat:41.402, lng: 2.176}}
            />
            
            <Marker 
            position={{lat:41.400,lng:2.174}} 
            icon="https://i.postimg.cc/WzJY3GYY/circle-1.png"
            
            
            />
             <Marker 
             position={{lat:41.407,lng:2.180}} 
            
            
            />
            
        </div>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
