import React from 'react'



function Home() {
  return <div>
   
    <div style={{backgroundColor: '#00b7e9',height:'350%',
backgroundImage: 'linear-gradient(160deg, #00b7e9 0%, #80cdd0 100%)'
,
}}
    >
    <nav className="flex items-center justify-between flex-wrap bg-white-500 shadow p-6" id='Home'>
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    
    <span className="font-semibold text-xl tracking-tight">MEDSURPLUS</span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow" style={{marginLeft:'10px'}}>
    <a href="#Home"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ">
        Home
      </a>
      <a href="#About" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </a>
      <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Services
      </a>
      
    </div>
    <div>
      
    </div>
  </div>
</nav>
	
<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"  style={{paddingTop:'50px'}}>
  <div  style={{textAlign:'center', padding:'8%', backgroundColor:'white',borderRadius:'30px',margin:'50px'}}>
  <h1  style={{fontSize:'20px'}}>For Pharmacies</h1>
  <p style={{padding:'10%', paddingTop:'40px'}}>text to be entered related to the category along with some padding and some text in the middle with center justification</p>
  <button style={{border:'solid black 1px',borderRadius:'4px' }}><a href='PharmacySignin' className="hover:text-blue-600 " style={{margin:'40px',paddingTop:'40px'}}>Sign In</a></button><br></br><br></br>
  <p style={{fontSize:'12px'}}>Don't have an account?&nbsp; <a href='PharmacySignup' className="hover:text-blue-600" style={{textDecoration:'underline'}}><b>Sign Up</b></a></p>
  </div>

  <div style={{textAlign:'center', padding:'8%', backgroundColor:'white',borderRadius:'30px',margin:'50px'}}>
 <h1 style={{fontSize:'20px'}}>For Users</h1>
 <p style={{padding:'10%', paddingTop:'40px'}}>text to be entered related to the category along with some padding and some text in the middle with center justification</p>
 <button style={{border:'solid black 1px',borderRadius:'4px' }}><a href='UserSignin' className="hover:text-blue-600" style={{margin:'40px',paddingTop:'40px'}}>Sign In</a></button><br></br><br></br>
 <p style={{fontSize:'12px'}}>Don't have an account?&nbsp; <a href='UserSignup' className="hover:text-blue-600" style={{textDecoration:'underline'}}><b>Sign Up</b></a></p>
  </div>
</div>
<div id='About' style={{padding:'5%'}}>
<h1 style={{fontSize:'30px', color:'white',textAlign:'center'}}>ABOUT</h1>
<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"  style={{paddingTop:'50px'}}>
  <div style={{padding:'8%'}}>
  <img src="https://reactjs.org/logo-og.png" alt="React Image" style={{borderRadius:'5px'}} />
  </div>
  <div style={{padding:'8%'}}>
   <p style={{color:'white'}}>This is about us what we do how we formed and what is our purpose and what is our goal</p>
  </div>
</div>
</div>
<div id='services' style={{padding:'2%'}}></div>
<h1 style={{fontSize:'30px', color:'white',textAlign:'center'}}>OUR SERVICES</h1>
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"  style={{paddingTop:'50px',padding:'10%',paddingBottom:'0%'}}>
  <div >
  <img src="/static/images/person_pharmacy.png" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'50%',height:'100%'}} />
  </div>
  <div >
    <p style={{textAlign:'center',paddingTop:'17%'}}>Text related to the services with animation person returning back to the pharmacy</p>
  </div>
</div>
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"  style={{paddingTop:'20px',padding:'10%',paddingBottom:'0%'}}>
<div >
  <img src="/static/images/Pharm_to_Pharm.png" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'60%',height:'100%'}} />
  </div>
<div >
    <p style={{textAlign:'center',paddingTop:'20%'}}>Text related to the services with animation person returning back to the pharmacy</p>
  </div>
</div>
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"  style={{paddingTop:'20px',padding:'10%',paddingBottom:'10%'}}>
<div >
  <img src="/static/images/phone_coupon.png" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'50%',height:'100%'}} />
  </div>
<div >
    <p style={{textAlign:'center',paddingTop:'20%'}}>Text related to the services with animation person returning back to the pharmacy</p>
  </div>
</div>

</div>
    </div>
}

export default Home
