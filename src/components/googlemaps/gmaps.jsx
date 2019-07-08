import React, { useState, div } from 'react'; 
import { Gmaps, Marker } from 'react-gmaps';
import apis from '../../common/apis'
import './style.scss';

const GoogleGmaps = () => { 
    const [object, setObject] = useState(null); 
    const [datacurrentlocation, setDatacurrentlocation] = useState(null); 
    const [datakey, setDatakey] = useState({
        params: {
          key: apis.GOOGLE_KEY
        }});

        function centerCurrenteLocation(object) {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(position => {
                const currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                setDatacurrentlocation(currentLocation);
                object.setCenter(currentLocation);
              });
            } 
          }

          function onMapCreated(object) {
            setObject({
                object
            });
          }
        
      if (!object) return;
      let evt = document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
      centerCurrenteLocation(object);      

    return(
        <>
        <div className='maps'>
        <Gmaps
            width='100%'
            height='100%'
            onMapCreated={onMapCreated()}
            zoom={15}
            zoomControl={false}
            streetViewControl={false}
            params={datakey.params}>
            {
            datacurrentlocation ?
                <Marker
                lat={currentLocation.lat()}
                lng={currentLocation.lng()}
                /> : null
            }
        </Gmaps>
        </div>
        </>
    )

};
export default React.memo(GoogleGmaps);