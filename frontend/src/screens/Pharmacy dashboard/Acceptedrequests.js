import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import UserNavbar from './Navbar'
import { Axios } from '../../utils/Axios'

function AcceptedRequests() {
  const [acceptedRequests, setacceptedRequests] = useState()
  useEffect(() => {
    async function getacceptedRequests() {
      const res = await Axios.get('/acceptedRequests')
      setacceptedRequests(res.data)
      console.log(res.data)
    }
    getacceptedRequests()
  }, [])
  const handleDeliver = async (orderId) => {
    const res = await Axios.patch('/pharmacy/delivered', { orderId })
    window.location.reload(false)
    console.log(res)
  }
  return (
    <div
      className=" pb-4  xl:pb-8"
      style={{ backgroundColor: 'var(--themecolor)', minHeight: '100vh' }}
    >
      <UserNavbar />
      <br></br>

      <br></br>
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
                    <p className="mt-2 text-slate-500">
                      Name :{item.userId.username}
                    </p>
                    <p className="mt-2 text-slate-500">Order id :{item._id}</p>
                    <p className="mt-2 text-slate-500">Name :{item.name}</p>
                    <p className="mt-2 text-slate-500">
                      Quantity :{item.quantity}
                    </p>
                    <p className="mt-2 text-slate-500">Expiry :{item.expiry}</p>
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
                      customer delivered
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default AcceptedRequests
