import {
  Button,
  Card,
  Checkbox,
  FileInput,
  Label,
  Modal,
  Select,
  TextInput,
} from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import UserNavbar from './Navbar'
import { Axios } from '../../utils/Axios'

import PendingIcon from '@mui/icons-material/Pending'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import { useSnackbar } from 'notistack'
import DoneIcon from '@mui/icons-material/Done'

function Requests() {
  const { enqueueSnackbar } = useSnackbar()
  const [sellingDetails, setsellingDetails] = useState({
    name: '',
    file: null,
    quantity: '',
    expiry: 'expired',
  })
  const [requests, setrequests] = useState()
  const [loading, setloading] = useState(false)
  const [requestsLoading, setrequestsLoading] = useState(false)
  const [modal, setmodal] = useState(false)
  async function getRequests() {
    try {
      setrequestsLoading(true)
      const res = await Axios.get('/requests')
      console.log(res)
      setrequests(res.data)
      setrequestsLoading(false)
    } catch (err) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })

      setrequestsLoading(false)
    }
  }
  const handleSellCick = async () => {
    try {
      setloading(true)
      const formData = new FormData()
      formData.append('name', sellingDetails.name)
      formData.append('file', sellingDetails.file)
      formData.append('quantity', sellingDetails.quantity)
      formData.append('expiry', sellingDetails.expiry)
      const res = await Axios.post('/sell', formData, {
        'Content-Type': 'multipart/form-data',
      })
      setloading(false)
      if (res) {
        console.log(res.data)
        console.log(res)
        enqueueSnackbar(res.data.message, {
          variant: 'success',
          autoHideDuration: 1000,
        })
      }
    } catch (err) {
      console.log(err.response.data.message)
      setloading(false)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })
    }
    setsellingDetails({
      name: '',
      file: null,
      quantity: '',
      expiry: 'expired',
    })
    setmodal(false)
    getRequests()
    //window.location.reload(false)
  }
  useEffect(() => {
    getRequests()
  }, [])

  return (
    <div
      className=" pb-4  xl:pb-8"
      style={{ backgroundColor: 'var(--themecolor)', minHeight: '100vh' }}
    >
      <UserNavbar></UserNavbar>
      <br></br>
      <div className="flex justify-end pr-6">
        {/* <Button style={{ backgroundColor: "var(--themecolor)" }}>
          Default
        </Button> */}
        <React.Fragment>
          <Button
            onClick={() => {
              setmodal(true)
            }}
            style={{
              backgroundColor: 'white',
              color: 'black',
              boxShadow:
                'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            }}
          >
            Sell Tablets
          </Button>
          <Modal
            show={modal}
            size="md"
            popup={true}
            onClose={() => {
              setmodal(false)
            }}
          >
            <Modal.Header />
            <Modal.Body style={{ width: '100%' }}>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-16 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Enter the medicine details
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Name" value="Enter Name" />
                  </div>
                  <TextInput
                    placeholder="eg. Dolo 650"
                    onChange={(e) =>
                      setsellingDetails((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    value={sellingDetails.name}
                    id="text"
                    type="text"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="Name"
                      value="Enter Number of leftover tablets"
                    />
                  </div>
                  <TextInput
                    placeholder="eg. 6"
                    onChange={(e) =>
                      setsellingDetails((prev) => ({
                        ...prev,
                        quantity: e.target.value,
                      }))
                    }
                    value={sellingDetails.quantity}
                    id="text"
                    type="number"
                    required={true}
                  />
                </div>
                <div id="select">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="Select the expiry category"
                    />
                  </div>
                  <Select
                    onChange={(e) =>
                      setsellingDetails((prev) => ({
                        ...prev,
                        expiry: e.target.value,
                      }))
                    }
                    value={sellingDetails.expiry}
                    id="countries"
                    required={true}
                    defaultValue="expired"
                  >
                    <option value="expired">Expired</option>
                    <option value="expiry more than 6 months">
                      Expiry more than 6 months
                    </option>
                    <option value="expiry less than 6 months">
                      Expiry less than 6 months
                    </option>
                  </Select>
                </div>
                <div>
                  <div id="fileUpload">
                    <div className="mb-2 block">
                      <Label htmlFor="file" value="Upload file" />
                    </div>
                    <FileInput
                      onChange={(e) =>
                        setsellingDetails((prev) => ({
                          ...prev,
                          file: e.target.files[0],
                        }))
                      }
                      id="file"
                      helperText="Upload your tablet sheet photo"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      handleSellCick()
                    }}
                  >
                    {loading ? (
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
                    Send Request
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div>
      <br></br>
      {requestsLoading ? (
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
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {requests && requests.length !== 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                //  padding: '28px',
                flexWrap: 'wrap',
              }}
              //className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
            >
              {requests &&
                requests.map((item, index) => {
                  return (
                    <div
                      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg"
                      style={{
                        maxWidth: '500px',
                        margin: '40px',
                        height: 'fit-content',
                      }}
                    >
                      <div className="md:flex">
                        <div className="md:shrink-0">
                          <img
                            style={{
                              height: '100%',
                              objectFit: 'cover',
                            }}
                            className="h-48 w-full object-cover md:h-full md:w-48"
                            src={`data:image/png;base64,${item.image}`}
                            alt="Modern building architecture"
                          />
                        </div>
                        <div style={{ padding: '6px 18px' }}>
                          <p
                            className="mt-2 text-slate-500"
                            style={{ paddingTop: '5%' }}
                          >
                            Order id :{item._id}
                          </p>
                          <p className="mt-2 ">Name :{item.name}</p>
                          <p className="mt-2 ">Quantity :{item.quantity}</p>
                          <p className="mt-2 ">{item.expiry}</p>
                          <br></br>
                          <hr></hr>
                          {item.status === 'pending' ? (
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                              }}
                            >
                              <div
                                style={{
                                  marginTop: '20px',
                                  marginBottom: '20px',
                                }}
                              >
                                <p
                                  className="mt-2 text-slate-500"
                                  style={{ paddingTop: '7%' }}
                                >
                                  Awaiting for pharmacy to accept the request
                                </p>
                              </div>
                              <div
                                style={{
                                  width: 'fit-content',
                                  backgroundColor: 'var(--lightBlue)',
                                  height: '35px',
                                  textAlign: 'center',
                                  color: 'white',
                                  padding: '5px 10px',
                                  borderRadius: '50px',
                                  marginBottom: '10px',
                                }}
                              >
                                <PendingIcon /> Request Sent
                              </div>
                            </div>
                          ) : (
                            <div>
                              {item.status === 'accepted' ? (
                                <div>
                                  <div>
                                    <p className="mt-2 ">Pharmacy details : </p>
                                    <p className="mt-2 ">
                                      Pharmacy Name :{item.pharmacyId.name}
                                    </p>
                                    <p className="mt-2 ">
                                      Address :{item.pharmacyId.address}
                                    </p>
                                    <p className="mt-2 ">
                                      Contact no :{item.pharmacyId.contactNo}
                                    </p>
                                  </div>
                                  <br></br>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      flexDirection: 'column',
                                    }}
                                  >
                                    <div className="text-slate-500 pb-2">
                                      Waiting for delivery
                                    </div>
                                    <div
                                      //className="shadow-lg shadow-indigo-500/40 ..."
                                      style={{
                                        width: 'fit-content',
                                        backgroundColor: 'orange',
                                        height: '35px',
                                        textAlign: 'center',
                                        color: 'white',
                                        padding: '5px 16px',
                                        borderRadius: '50px',
                                        marginBottom: '10px',
                                      }}
                                    >
                                      <span>
                                        <HourglassTopIcon /> Request Accepted
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  style={{
                                    width: 'fit-content',
                                    backgroundColor: 'green',
                                    height: '35px',
                                    textAlign: 'center',
                                    color: 'white',
                                    padding: '5px 16px',
                                    borderRadius: '50px',
                                    margin: '10px auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <DoneIcon /> delivered
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          ) : (
            <div
              className="grid"
              style={{
                //maxWidth: "500px",
                margin: '40px',
                height: 'fit-content',
                textAlign: 'Center',
              }}
            >
              <p
                style={{ color: 'white', fontWeight: 'bold', fontSize: '40px' }}
              >
                There are no current requests. Click on sell tablets to start.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default Requests
