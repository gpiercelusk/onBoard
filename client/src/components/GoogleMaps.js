import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 35.779591, lng: -78.638176}}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function GoogleMaps() {
    return (
        <div style={{width: '50vw', height: '50vh' }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key`}
            loadingElement={<div style={{height: "100%" }} />}
            containerElement={<div style={{height: "100%" }} />}
            mapElement={<div style={{height: "100%" }} />}
            />
        </div>
    )
}
    
export default GoogleMaps;