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

function Requests() {
  const [sellingDetails, setsellingDetails] = useState({
    name: '',
    file: null,
    quantity: NaN,
    expiry: 'expired',
  })
  const [requests, setrequests] = useState()

  const [modal, setmodal] = useState(false)
  const handleSellCick = async () => {
    try {
      const formData = new FormData()
      formData.append('name', sellingDetails.name)
      formData.append('file', sellingDetails.file)
      formData.append('quantity', sellingDetails.quantity)
      formData.append('expiry', sellingDetails.expiry)
      const res = await Axios.post('/sell', formData, {
        'Content-Type': 'multipart/form-data',
      })
      if (res) {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err.response.data.message)
    }
    setsellingDetails({
      name: '',
      file: null,
      quantity: NaN,
      expiry: 'expired',
    })
    setmodal(false)
  }
  useEffect(() => {
    async function getRequests() {
      const res = await Axios.get('/requests')
      console.log(res)
      setrequests(res.data)
    }
    getRequests()
  }, [])
  return (
    <div
      className=" pb-4  xl:pb-8"
      style={{ backgroundColor: 'var(--themecolor)', minHeight: '98vh' }}
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
            style={{ backgroundColor: 'var(--lightBlue)' }}
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
                    Send Request
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div>
      <br></br>
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
                          style={{ marginTop: '20px', marginBottom: '20px' }}
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
                              backgroundColor: 'green',
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
                    )}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default Requests
