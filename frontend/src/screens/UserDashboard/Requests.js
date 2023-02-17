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
import React, { useState } from 'react'
import UserNavbar from './Navbar'

function Requests() {
  const tablets = [
    {
      orderid: '1234567891',
      image: '',
      name: 'dolo',
      quantity: '5mg',
      expiry: '',
      pharmacy: 'medplus',
      paddress: 'oldtown',
      contactno: '9989778657',
      status: 'accepted',
    },
    {
      orderid: '12345678921',
      image: '',
      name: 'paracetmol',
      quantity: '10mg',
      expiry: '',
      pharmacy: 'medplus',
      paddress: 'oldtown',
      contactno: '9989778657',
      status: 'pending',
    },
  ]

  const [modal, setmodal] = useState(false)

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
        {tablets.map((item, index) => {
          return (
            <div
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              style={{ maxWidth: '500px' }}
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src="data:image/jpeg;base64,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"
                    alt="Modern building architecture"
                  />
                </div>
                <div className="p-8">
                  <p className="mt-2 text-slate-500">
                    Order id :{item.orderid}
                  </p>
                  <p className="mt-2 text-slate-500">Name :{item.name}</p>
                  <p className="mt-2 text-slate-500">
                    Quantity :{item.quantity}
                  </p>
                  <p className="mt-2 text-slate-500">Expiry :{item.expiry}</p>
                  <br></br>
                  <hr></hr>
                  {item.status == 'pending' ? (
                    <div>
                      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <p className="mt-2 text-slate-500">
                          Waiting for pharmacy to accept the request
                        </p>
                      </div>
                      <div
                        className="shadow-lg shadow-indigo-500/40 ... "
                        style={{
                          backgroundColor: 'var(--lightBlue)',
                          height: '35px',
                          textAlign: 'center',
                          color: 'white',
                          padding: '5px',
                        }}
                      >
                        Request Sent
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <p className="mt-2 text-slate-500">
                          Pharmacy details :{' '}
                        </p>
                        <p className="mt-2 text-slate-500">
                          Pharmacy Name :{item.pharmacy}
                        </p>
                        <p className="mt-2 text-slate-500">
                          Address :{item.paddress}
                        </p>
                        <p className="mt-2 text-slate-500">
                          Contact no :{item.contactno}
                        </p>
                      </div>
                      <br></br>
                      <div
                        className="shadow-lg shadow-indigo-500/40 ..."
                        style={{
                          backgroundColor: 'green',
                          height: '35px',
                          textAlign: 'center',
                          color: 'white',
                          padding: '5px',
                        }}
                      >
                        Request Accepted
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
