import { Button, Label, TextInput } from 'flowbite-react'
import UserNavbar from './Navbar'
import Divider from '@mui/material/Divider'
import { Axios } from '../../utils/Axios'
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'

function GetDetails() {
  const [medicineName, setmedicineName] = useState()
  const [response, setresponse] = useState()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setloading] = useState(false)
  const getUsage = async () => {
    try {
      setloading(true)
      const res = await Axios.post('/chatgpt', { medicineName })

      setresponse(res.data)
      setloading(false)
    } catch (err) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })
      setloading(false)
    }
  }
  return (
    <div>
      <div>
        <UserNavbar></UserNavbar>
      </div>
      <div
        style={{
          height: '91.8vh',
          paddingTop: '20px',
          backgroundColor: 'var(--themecolor)',
        }}
      >
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
          <span style={{}}>
            <input
              style={{
                borderRadius: '4px',
                marginRight: '10px',
                width: '300px',
              }}
              type="text"
              placeholder="Enter name of the tablet"
              onChange={(e) => setmedicineName(e.target.value)}
            ></input>
          </span>

          <div>
            <Button
              onClick={(e) => {
                e.preventDefault()
                getUsage()
              }}
              style={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow:
                  'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
              }}
            >
              Get Details
            </Button>
          </div>
        </div>

        <div
          className="grid"
          style={{
            backgroundColor: 'var(--themecolor)',

            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
          }}
        >
          <br></br>
          {loading ? (
            <div
              role="status"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              {response ? (
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '',
                    width: '24rem',
                    padding: '30px',
                    borderRadius: '20px',
                    textAlign: 'left',
                    fontSize: '22px',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    margin: '0 auto',
                  }}
                >
                  {response}
                </div>
              ) : (
                <div style={{ color: 'white', fontSize: '42px' }}>
                  Did you forget the tablet usage? Don't worry!{' '}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default GetDetails
