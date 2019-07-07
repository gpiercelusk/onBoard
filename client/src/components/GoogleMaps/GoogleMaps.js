import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"

function Map(props) {

    return (
        <GoogleMap 
            address={props.address}
            lat={props.lat}
            lng={props.lng}
            event={props.event}
            defaultZoom={12}
            // defaultCenter={{ lat: 35.7847984, lng: -78.6601536 }}
            defaultCenter={{ lat: props.lat, lng: props.lng }}
            >

            <Marker
                // position={{ lat: 35.7847984, lng: -78.6601536 }}
                position={{ lat: props.lat, lng: props.lng }}
            />
                
            <InfoWindow
                // position={{ lat: 35.7937984, lng: -78.6601536 }}
                position={{ lat: props.lat + 0.012, lng: props.lng }}
            >
                <div>
                    {/* <h4>Class</h4> */}
                    <h4>{props.event}</h4>
                    {/* <p>"1707 Hillsborough St, Raleigh, NC 27605, USA"</p> */}
                    <p>{props.address}</p>
                </div>
            </InfoWindow>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
const gApi = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
function GoogleMaps(props) {
    return (
        <div style={{ width: '50vw', height: '50vh' }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${gApi}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                address={props.address}
                lat={props.lat}
                lng={props.lng}
                event={props.event}
            />
        </div>
    )
}

export default GoogleMaps;