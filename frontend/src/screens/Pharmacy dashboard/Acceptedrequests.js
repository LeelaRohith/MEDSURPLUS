import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import UserNavbar from './Navbar'
import { Axios } from '../../utils/Axios'
import { useSnackbar } from 'notistack'

function AcceptedRequests() {
  const [acceptedRequests, setacceptedRequests] = useState()
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setloading] = useState(false)
  const [loadDeliver, setloadDeliver] = useState(false)
  async function getacceptedRequests() {
    try {
      setloading(true)
      const res = await Axios.get('/acceptedRequests')
      setacceptedRequests(res.data)

      // enqueueSnackbar(res.data, {
      //   variant: 'success',
      //   autoHideDuration: 1000,
      // })
      setloading(false)
    } catch (err) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })

      setloading(false)
    }
  }

  useEffect(() => {
    getacceptedRequests()
  }, [])
  const handleDeliver = async (orderId) => {
    try {
      setloadDeliver(true)
      const res = await Axios.patch('/pharmacy/delivered', { orderId })
      setloadDeliver(false)
    } catch (err) {
      console.log(err.response.data.message)
      setloading(false)
      setloadDeliver(false)
    }
    getacceptedRequests()
  }

  return (
    <div
      className=" pb-4  xl:pb-8"
      style={{ backgroundColor: 'var(--themecolor)', minHeight: '100vh' }}
    >
      <UserNavbar />
      <br></br>

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddind: '0px',
            flexWrap: 'wrap',
          }}
          //className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          {acceptedRequests &&
            acceptedRequests.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
                  style={{ margin: '20px' }}
                >
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={`data:image/png;base64,${item.image}`}
                        alt="Modern building architecture"
                      />
                    </div>
                    <div className="p-8">
                      <p className="mt-2 text-slate-500">Name :{item.name}</p>
                      <p className="mt-2 text-slate-500">
                        Order id :{item._id}
                      </p>
                      <p className="mt-2 text-slate-500">Name :{item.name}</p>
                      <p className="mt-2 text-slate-500">
                        Quantity :{item.quantity}
                      </p>
                      <p className="mt-2 text-slate-500">
                        Expiry :{item.expiry}
                      </p>
                      <br></br>
                      <hr></hr>
                      <Button
                        className="shadow-lg shadow-indigo-500/40 ... "
                        style={{
                          backgroundColor: 'var(--lightBlue)',
                          height: '35px',
                          textAlign: 'center',
                          color: 'white',
                          padding: '5px',
                        }}
                        onClick={(e) => {
                          e.preventDefault()
                          handleDeliver(item._id)
                        }}
                      >
                        {loadDeliver ? (
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
                        customer delivered
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
export default AcceptedRequests
