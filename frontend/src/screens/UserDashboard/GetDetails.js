import { Button, Label, TextInput } from 'flowbite-react'
import UserNavbar from './Navbar'
import Divider from '@mui/material/Divider'
import { Axios } from '../../utils/Axios'
import { useEffect, useState } from 'react'

function GetDetails() {
  const [medicineName, setmedicineName] = useState()
  const [response, setresponse] = useState()
  const getUsage = async () => {
    const res = await Axios.post('/chatgpt', { medicineName })
    setresponse(res.data)
  }
  return (
    <div>
      <div>
        <UserNavbar></UserNavbar>
      </div>
      <div style={{ paddingTop: '20px', backgroundColor: 'var(--themecolor)' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padingTop: '0px',
            backgroundColor: 'var(--themecolor)',
          }}
        >
          <input
            style={{
              borderRadius: '4px',
              marginRight: '10px',
            }}
            type="text"
            placeholder="Enter name of the tablet"
            onChange={(e) => setmedicineName(e.target.value)}
          ></input>

          <div>
            <Button
              onClick={(e) => {
                e.preventDefault()
                getUsage()
              }}
              style={{ backgroundColor: 'var(--lightBlue)' }}
            >
              Get Details
            </Button>
          </div>
        </div>
      </div>
      <div
        className="grid"
        style={{
          backgroundColor: 'var(--themecolor)',
          minHeight: '83vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: '',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <br></br>
        {!response ? (
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '40px',
              color: 'white',
              paddingRight: '10px',
              paddingLeft: '10px',
            }}
          >
            Did you forget the tablet usage ? Dont Worry !
          </div>
        ) : (
          <div
            style={{
              backgroundColor: 'white',
              height: '',
              width: '50%',
              padding: '50px',
              borderRadius: '20px',
              textAlign: 'left',
              fontSize: '20px',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            {response}
          </div>
        )}
      </div>
    </div>
  )
}
export default GetDetails
