import React, {Component} from "react";
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react'
import "./DeliveryPage.scss";
import DeliveryCard from "../../DeliveryCard";


class MapContainer extends Component{
    state = {myMarkers: [
            {latitude: 40.710992, longitude: -74.008292},
            {latitude: 40.792917, longitude: -73.969497},
            {latitude:  40.710992, longitude: -74.008292}]
    }
    displayMarkers = () => {
        return this.state.myMarkers.map((mark, index) => {
            return <Marker id={index}  position={{
                lat: mark.latitude,                                              lng: mark.longitude                                                }}
            onClick={() => console.log("You clicked me!",{index})} />
        })
    }
    render() {
        return (
            <section>
                <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100vh"}}
                     className="map">
                    <Map google={this.props.google}
                         zoom={13}
                         initialCenter={{ lat: 52.41278674273404, lng: 31.022998322948137}}
                         disableDefaultUI= {true}>
                        {this.displayMarkers()}
                        <Circle
                            radius={3500}
                            center={{ lat: 52.43835928975931, lng: 30.97728635231011}}
                            onMouseover={() => console.log('mouseover')}
                            onClick={() => console.log('click')}
                            onMouseout={() => console.log('mouseout')}
                            strokeColor='transparent'
                            strokeOpacity={0}
                            strokeWeight={5}
                            fillColor='blue'
                            fillOpacity={0.2}
                        />
                    </Map>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-10">
                            <DeliveryCard />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8WBJLuoQtv-wv-M84CZNdd_eUU69nZ0Y'
})(MapContainer)
