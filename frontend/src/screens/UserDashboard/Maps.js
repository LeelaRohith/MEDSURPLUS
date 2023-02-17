import React, { useEffect, useState } from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import Map, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import UserNavbar from './Navbar'

function Maps() {
  const [userCoordinates, setuserCoordinates] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setuserCoordinates({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })
    })
  }, [])
  return (
    <>
      <UserNavbar />
      {userCoordinates ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Map
            mapboxAccessToken="pk.eyJ1IjoicG9vcm5lc2giLCJhIjoiY2xlN2dmM211MDVheTNvb3hyamNhZDU5dCJ9.-sJiyd3L_qJMpsWJqPKG3Q"
            initialViewState={{
              latitude: userCoordinates.lat,
              longitude: userCoordinates.long,
              zoom: 14,
            }}
            style={{
              width: '80vw',
              height: '80vh',
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
            <Marker longitude={-122.4} latitude={36.8} color="red">
              <LocalHospitalIcon />
            </Marker>
            <Marker longitude={-120.4} latitude={37.6} color="red" />
            <Marker longitude={-112.4} latitude={37.8} color="red">
              <img
                style={{ width: '45px', height: '45px' }}
                src="/static/images/pharmacyLocation.png"
                alt="pharmacy"
              />
            </Marker>
            <Marker longitude={-125.4} latitude={38.8} color="red" />
          </Map>
        </div>
      ) : null}
    </>
  )
}

export default Maps
