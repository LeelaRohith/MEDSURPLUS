import { Avatar } from 'flowbite-react'
import React, { useState } from 'react'

function PharmacySignin() {
  const [isSignup, setsignup] = useState(0)
  function handleSignup() {
    setsignup(1)
  }
  function handleSignin() {
    setsignup(0)
  }
 

  return (

    
    <div style={{background: '#74ebd5'  ,/* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #ACB6E5, #74ebd5)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #ACB6E5, #74ebd5)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: '100vh',
    }}
>

      <div
        style={{
            display: 'flex',
            justifyContent: 'center',
        
        }}
      >
        {
            <fieldset style={{backgroundColor: '#eeeeee', padding: '3em',paddingTop:'3%', marginTop:'20vh'}}>
          <div className="signin" style={{paddingTop:'3%'}} >
            <h1>Signin</h1><br></br>
            <form>
               
<form >
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email/ Username" required></input>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

            </form><br></br>
            <button onClick={handleSignup} style={{align:'centre',}}>not yet registered? signup</button>
          </div>
          </fieldset>
        }
      </div>
    </div>
  )
}

export default PharmacySignin