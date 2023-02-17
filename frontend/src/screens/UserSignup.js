import React, { useState } from 'react'

function UserSignup(){
   
    return (
        <div style={{
            backgroundImage: 'linear-gradient(to right, #66d3e6, #61ccea, #63c5ed, #6abdee, #75b4ed, #71b8f1, #6dbbf4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
            height: '130%',
        }}>
            <br></br>
            <span className="font-semibold text-xl tracking-tight" style={{color:'black',paddingLeft:'40px',paddingTop:'20px',fontSize:'170%'}}>MEDSURPLUS</span>
            <div className='grid gap-6 mb-6 md:grid-cols-2' style={{padding:'5%', paddingTop:'2%',marginBottom:'0%'}}>
                <div>
                    <img src='static/images/Pillimage.png' style={{
                        paddingTop:'20%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '50%'
                       
                    }}/>
                    <p style={{textAlign:'center',color:'whitesmoke',fontSize:'3rem'}}>WELCOME !!</p>
                </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
          {
             <fieldset style={{backgroundColor: '#eeeeee', padding: '3em',paddingTop:'2%', border: '3px solid #347aeb',
             borderradius: '10px',
             boxshadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',}}>
             <div className="signup" >
             <p style={{textAlign:'center', fontSize:'180%'}}>Signup</p>
               <br></br>
               <form>
               
   <form>
       <div class="grid gap-6 mb-6 md:grid-cols-2">
           <div>
               <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
               <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required></input>
           </div>
           <div>
               <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
               <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required></input>
           </div>
           <div>
               <label for="user name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
               <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter UserName" required></input>
           </div>  
           <div>
               <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
               <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone"  required></input>
           </div>
       </div>
       <div class="mb-6">
           <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
           <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required></input>
       </div> 
       <div class="mb-6">
           <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
           <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required></input>
       </div> 
       <div class="mb-6">
           <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">address</label>
           <input type="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="H.no:" required></input>
       </div> 
       <div class="flex items-start mb-6">
           <div class="flex items-center h-5">
           <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
           </div>
           <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
       </div>
       <div style={{position:'relative',}}>
       <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
   </div>
   </form>
               </form><br></br>
      
             </div>
             </fieldset>
   
          }
           
        </div></div>
        </div>
    )

}
export default UserSignup