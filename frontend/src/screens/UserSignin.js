import { Avatar } from 'flowbite-react'
import React, { useState } from 'react'

function UserSignin() {
  
 

  return (

    
    <div style={{backgroundImage: 'linear-gradient(to right, #66d3e6, #61ccea, #63c5ed, #6abdee, #75b4ed, #71b8f1, #6dbbf4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    height: '100vh',
    }}
>
<br></br>
            <span className="font-semibold text-xl tracking-tight" style={{color:'black',paddingLeft:'40px',paddingTop:'20px',fontSize:'170%'}}>MEDSURPLUS</span>

      <div
        style={{
            display: 'flex',
            justifyContent: 'center',
        
        }}
      >
        {
            <fieldset style={{backgroundColor: '#eeeeee', padding: '2em',paddingTop:'2%', border: '3px solid #347aeb',
            borderradius: '50px',
            boxshadow: '0 0 15px #000',marginTop:"5.5%"}}>
          <div className="signin">
          <p style={{textAlign:'center', fontSize:'180%'}}>signin</p>
               <br></br>
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
  <div style={{align:'center',marginLeft:'20%'}}>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div>
</form>

            </form><br></br>
           
          </div>
          </fieldset>
        }
      </div>
    </div>
  )
}

export default UserSignin