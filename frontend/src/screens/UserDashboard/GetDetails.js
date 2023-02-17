import { Button, Label, TextInput } from 'flowbite-react'
import UserNavbar from './Navbar'
import Divider from '@mui/material/Divider'
import { Axios } from '../../utils/Axios'
import { useEffect, useState } from 'react'

function GetDetails() {
  const details = null
  const [medicines, setmedicines] = useState()
  useEffect(() => {
    async function getMedicines() {
      const res = await Axios.get('/medicines')
      console.log(res)
    }
    getMedicines()
  }, [])
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
          ></input>
          <div>
            <Button style={{ backgroundColor: 'var(--lightBlue)' }}>
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
        {details ? (
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
              width: '80%',
              padding: '30px',
              borderRadius: '20px',
              textAlign: 'left',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            <div style={{ fontSize: '20px' }}>Usage</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>How to use</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Side effects</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Duration of Action</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Contradiction</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <div style={{ fontSize: '20px' }}>
              Special Precautions while taking
            </div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>
              Pregnancy Related information
            </div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Storage requirements</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Effects of overdose</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Expert Advice :</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              n/a
            </p>
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>Packaging type :</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
            {/* <hr
              style={{
                border: "dotted #D4D4D4 4px",
                borderBottom: "none",
                width: "5%",
                margin: "10px auto",
              }}
            ></hr> */}
            <Divider variant="inset" sx={{ margin: '10px auto' }} />
            <div style={{ fontSize: '20px' }}>MRP :</div>
            <p className="mt-2 text-slate-500" style={{ paddingLeft: '20px' }}>
              Use the border property to change the border size and color, and
              use the border-radius property to add rounded corners:
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default GetDetails
