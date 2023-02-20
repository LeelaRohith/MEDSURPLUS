import { Button, Label, TextInput } from 'flowbite-react'
import UserNavbar from './Navbar'
import Divider from '@mui/material/Divider'
import { Axios } from '../../utils/Axios'
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'

function ClaimReward() {
  const { enqueueSnackbar } = useSnackbar()

  const [code, setcode] = useState()
  const [foundReward, setfoundReward] = useState()
  const [loadSearch, setloadSearch] = useState(false)
  const [loadClaim, setloadClaim] = useState(false)

  const claim = async () => {
    try {
      setloadClaim(true)
      const res = await Axios.post('/claimReward', { code })

      enqueueSnackbar(res.data.message, {
        variant: 'success',
        autoHideDuration: 1000,
      })
      setloadClaim(false)
    } catch (err) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })
      setloadClaim(false)
    }
  }
  const search = async () => {
    try {
      setloadSearch(true)
      const res = await Axios.post('/searchReward', { code })

      setfoundReward(res.data)
      setloadSearch(false)
    } catch (err) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })

      setloadSearch(false)
    }
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
              width: '',
            }}
            onChange={(e) => setcode(e.target.value)}
            type="text"
            placeholder="Enter the orderID : "
          ></input>
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault()
                search()
              }}
              style={{ backgroundColor: 'var(--lightBlue)' }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      {loadSearch ? (
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
          {foundReward ? (
            <div
              className="lg:w-96 max-sm:w-64 grid"
              style={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                borderRadius: '10px',
                padding: '8px',
                width: 'fit-content',
              }}
            >
              <p
                style={{
                  marginBottom: '5px',
                  paddingTop: '10px',
                }}
              >
                <span>Customer name : </span>
                <span
                  className="text-zinc-500"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {foundReward.userId.username}
                </span>
              </p>
              <p style={{ marginBottom: '5px', whiteSpace: 'normal' }}>
                Reward Earned :{' '}
                <span
                  className="text-zinc-500"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {foundReward.reward}
                </span>
              </p>
              <p style={{ marginBottom: '5px', whiteSpace: '' }}>
                Coupon code :{' '}
                <span className="text-zinc-500">{foundReward._id}</span>
              </p>
              <Button
                className="w-20"
                style={{
                  backgroundColor: 'var(--lightBlue)',
                  height: '30px',
                  margin: '18px auto',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  claim()
                }}
              >
                {loadClaim ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  ''
                )}
                Claim
              </Button>
              <div style={{ paddingBottom: '12px' }}></div>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  )
}
export default ClaimReward
