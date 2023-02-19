import { Avatar } from 'flowbite-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../utils/Axios'
import { useSnackbar } from 'notistack'

function PharmacySignin() {
  const { enqueueSnackbar } = useSnackbar()
  const [pharmacyDetails, setpharmacyDetails] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const res = await Axios.post('/pharmacySignin', pharmacyDetails)

      if (res) {
        localStorage.setItem('jwtKey', res.data.jwtToken)
        enqueueSnackbar(res.data.message, {
          variant: 'success',
          autoHideDuration: 1000,
        })

        navigate('/pharmacy/pending_requests')
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
        height: '100vh',
      }}
    >
      <br></br>
      <span
        className="font-semibold text-xl tracking-tight"
        style={{
          color: 'black',
          paddingLeft: '40px',
          paddingTop: '20px',
          fontSize: '160%',
        }}
      >
        MEDSURPLUS
      </span>

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
              padding: '2em',
              paddingTop: '2%',
              borderRadius: '10px',
              boxshadow: '0 0 15px #000',
              marginTop: '5.5%',
              width: '350px',
            }}
          >
            <div className="signin">
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '180%',
                  fontFamily: 'sans-serif',
                }}
              >
                Sign in
              </p>
              <br></br>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email/ Username"
                    required
                    onChange={(e) =>
                      setpharmacyDetails((prev) => ({
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
                    Your password
                  </label>
                  <input
                    type="password"
                    autoComplete="on"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) =>
                      setpharmacyDetails((prev) => ({
                        ...prev,
                        password: e.target.value,
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
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    ></input>
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
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
  )
}

export default PharmacySignin
