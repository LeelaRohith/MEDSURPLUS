import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import UserNavbar from './Navbar'
import { Axios } from '../../utils/Axios'

function PendingRequests() {
  const [pendingRequests, setpendingRequests] = useState()
  useEffect(() => {
    async function getPendingRequests() {
      const res = await Axios.get('/pendingRequests')
      setpendingRequests(res.data)
      console.log(res.data)
    }
    getPendingRequests()
  }, [])
  const handleAccept = async (orderId) => {
    const res = await Axios.patch('/pharmacy/accept', { orderId })
    window.location.reload(false)
    console.log(res)
  }
  return (
    <div
      className=" pb-4  xl:pb-8"
      style={{ backgroundColor: 'var(--themecolor)', minHeight: '100vh' }}
    >
      <UserNavbar></UserNavbar>
      <br></br>
      {/* <div className="flex justify-end pr-6">
        <React.Fragment>
          <Button
            onClick={() => {
              setmodal(true);
            }}
            style={{ backgroundColor: "var(--lightBlue)" }}
          >
            Sell Tablets
          </Button>
          <Modal
            show={modal}
            size="md"
            popup={true}
            onClose={() => {
              setmodal(false);
            }}
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Enter the medicine details
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Name" value="Enter Name" />
                  </div>
                  <TextInput id="text" type="text" required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Name" value="Enter Quantity" />
                  </div>
                  <TextInput id="text" type="text" required={true} />
                </div>
                <div id="select">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="Select the expiry category"
                    />
                  </div>
                  <Select id="countries" required={true}>
                    <option>Expired</option>
                    <option>Expiry more than 6 months</option>
                    <option>Expiry less than 6 months</option>
                  </Select>
                </div>
                <div>
                  <div id="fileUpload">
                    <div className="mb-2 block">
                      <Label htmlFor="file" value="Upload file" />
                    </div>
                    <FileInput
                      id="file"
                      helperText="Upload your tablet sheet photo"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Button>Send Request</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div> */}
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
        {pendingRequests &&
          pendingRequests.map((item, index) => {
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
                        handleAccept(item._id)
                      }}
                    >
                      Accept Request{' '}
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
export default PendingRequests
