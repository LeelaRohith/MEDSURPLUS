import React, { useState } from 'react'
import { Axios } from '../utils/Axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
function UserSignup() {
  const { enqueueSnackbar } = useSnackbar()
  const [userDetails, setuserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contactNo: '',
    address: '',
    city: '',
    state: '',
  })
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const {
        firstname,
        lastname,
        email,
        password,
        contactNo,
        address,
        city,
        state,
      } = userDetails
      const formDetails = {
        username: firstname + ' ' + lastname,
        email,
        password,
        contactNo,
        address,
        city,
        state,
      }
      const res = await Axios.post('/userSignup', formDetails)
      if (res) {
        enqueueSnackbar(res.data.message, {
          variant: 'success',
          autoHideDuration: 1000,
        })
        navigate('/userSignin')
      }
    } catch (err) {
      console.log(err.response.data.message)
      enqueueSnackbar(err.response.data.message, { variant: 'error' })
    }
  }

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to right, #66d3e6, #61ccea, #63c5ed, #6abdee, #75b4ed, #71b8f1, #6dbbf4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
        height: '100%',
      }}
    >
      <br></br>
      <span
        className="font-semibold text-xl tracking-tight"
        style={{
          color: 'black',
          paddingLeft: '40px',
          paddingTop: '20px',
          fontSize: '170%',
        }}
      >
        MEDSURPLUS
      </span>
      <div
        className="grid gap-6 mb-6 md:grid-cols-2"
        style={{ padding: '5%', paddingTop: '2%', marginBottom: '0%' }}
      >
        <div>
          <img
            src="static/images/Pillimage.png"
            alt=""
            style={{
              paddingTop: '20%',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50%',
            }}
          />
          <p
            style={{
              textAlign: 'center',
              color: 'whitesmoke',
              fontSize: '3rem',
              fontFamily: 'cursive',
            }}
          >
            WELCOME !!
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {
            <fieldset
              style={{
                backgroundColor: '#eeeeee',
                padding: '3em',
                paddingTop: '2%',
                borderRadius: '10px',
                boxshadow:
                  'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
              }}
            >
              <div className="signup">
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '180%',
                    paddingTop: '2%',
                    fontFamily: 'sans-serif',
                  }}
                >
                  Sign up
                </p>
                <br></br>

                <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name"
                        required
                        onChange={(e) =>
                          setuserDetails((prev) => ({
                            ...prev,
                            firstname: e.target.value,
                          }))
                        }
                      ></input>
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name"
                        required
                        onChange={(e) =>
                          setuserDetails((prev) => ({
                            ...prev,
                            lastname: e.target.value,
                          }))
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Phone"
                      required
                      onChange={(e) =>
                        setuserDetails((prev) => ({
                          ...prev,
                          contactNo: e.target.value,
                        }))
                      }
                    ></input>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter email"
                      required
                      onChange={(e) =>
                        setuserDetails((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      autoComplete="on"
                      required
                      onChange={(e) =>
                        setuserDetails((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="address"
                      id="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="H.no:"
                      required
                      onChange={(e) =>
                        setuserDetails((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                      type="address"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) =>
                        setuserDetails((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      State
                    </label>
                    <input
                      type="address"
                      id="state"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) =>
                        setuserDetails((prev) => ({
                          ...prev,
                          state: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      ></input>
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{' '}
                      <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>

                <br></br>
              </div>
            </fieldset>
          }
        </div>
      </div>
    </div>
  )
}
export default UserSignup
