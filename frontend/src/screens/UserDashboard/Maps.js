import React, { useEffect, useState } from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import Map, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import UserNavbar from './Navbar'
import { Axios } from '../../utils/Axios'

function Maps() {
  const [userCoordinates, setuserCoordinates] = useState()
  const [pharmacyCoordinates, setpharmacyCoordinates] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setuserCoordinates({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })
    })
    async function getCoords() {
      const res = await Axios.get('/pharmaciesCoordinates')
      setpharmacyCoordinates(res.data)
    }
    getCoords()
  }, [])

  console.log(pharmacyCoordinates)
  return (
    <>
      <UserNavbar />
      {userCoordinates ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'var(--homethemecolor)',
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
              height: '100vh',
              marginTop: '2.3rem',
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
            {pharmacyCoordinates &&
              pharmacyCoordinates.map((coords, idx) => {
                console.log(coords.lattitude)
                return (
                  <Marker
                    key={idx}
                    longitude={coords.longitude}
                    latitude={coords.lattitude}
                    color="red"
                  >
                    <div
                      style={{
                        color: 'red',
                        fontSize: '14px',
                        fontStyle: 'bold',
                      }}
                      className="drop-shadow-lg"
                    >
                      <b>{coords.name}</b>
                    </div>
                    <img
                      style={{ width: '45px', height: '45px' }}
                      src="/static/images/pharmacyLocation.png"
                      alt="pharmacy"
                    />
                  </Marker>
                )
              })}
          </Map>
        </div>
      ) : null}
    </>
  )
}

export default Maps
