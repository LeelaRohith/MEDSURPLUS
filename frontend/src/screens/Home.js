import React , { useEffect }from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);
  return (<div>
   
    <div style={{height:'350%',
    backgroundImage: 'var(--homethemecolor)'
, 
}}
    >
    <nav className="flex items-center justify-between flex-wrap  shadow p-6 " style={{backgroundColor:'white',borderBottomRightRadius:'10px',borderBottomLeftRadius:'8px'}} id='Home'>
  <div className="flex items-center flex-shrink-0 text-black mr-6">
    
    <span className="font-semibold text-xl tracking-tight" style={{color:'black',marginRight:'40px'}}>MEDSURPLUS</span>
  </div>
  <div className="block lg:hidden ">
    <button className="flex items-center px-3 py-2 border rounded text-black-200 border-black-800 ">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow" style={{marginLeft:'10px'}}>
    <a href="#Home"  className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-9  " >
        Home
      </a>
      <a href="#About" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-9">
        About
      </a>
      <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-9">
        Services
      </a>
      
    </div>
    <div>
      
    </div>
  </div>
</nav>
	
<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"  style={{paddingTop:'50px'}}>
  <div  style={{textAlign:'center', padding:'2.5%', backgroundColor:'white',borderRadius:'25px',margin:'50px',paddingBottom:'7%'}}>
  <img src='static/images/Pharmacy_icon.png' style={{display:'block',marginLeft:'auto',marginRight:'auto',marginBottom:'1%',width:'20%',height:'20%'}}/>
  <h1  style={{fontSize:'20px'}}>For Pharmacies</h1>
  <p style={{padding:'10%', paddingTop:'40px'}}>Sign in to your account to gain access to all available requests and send new requests to pharmacies.</p>
  <button style={{border:'solid black 1px',borderRadius:'4px',backgroundColor:'black'}} ><a href='PharmacySignin'  style={{margin:'40px',color:'white'}}>Sign In</a></button><br></br><br></br>
  <p style={{fontSize:'12px', paddingBottom:'2.5%'}}>Don't have an account?&nbsp; <a href='PharmacySignup' className="hover:text-blue-600" ><b>Sign Up</b></a></p>
  </div>

  <div style={{textAlign:'center', padding:'2.5%', backgroundColor:'white',borderRadius:'25px',margin:'50px',paddingBottom:'7%'}}>
  <img src='static/images/User_icon.png' style={{display:'block',marginLeft:'auto',marginRight:'auto',marginBottom:'1%',width:'20%',height:'20%'}}/>
 <h1 style={{fontSize:'20px'}}>For Users</h1>
 <p style={{padding:'10%', paddingTop:'40px'}}>Sign in to your pharmacy account to view your medication details, sell leftover medicines online</p>
 <button style={{border:'solid black 1px',borderRadius:'4px',backgroundColor:'black' }}><a href='UserSignin'  style={{margin:'40px',color:'white'}}>Sign In</a></button><br></br><br></br>
 <p style={{fontSize:'12px',paddingBottom:'2.5%'}}>Don't have an account?&nbsp; <a href='UserSignup' className="hover:text-blue-600" ><b>Sign Up</b></a></p>
  </div>
</div>
<div id='About' style={{padding:'5%'}}>
<h1 style={{fontSize:'30px', color:'var(--textcolorHome)',textAlign:'center'}} data-aos="zoom-in">ABOUT</h1>
<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"  style={{paddingTop:'50px'}}>
  <div style={{padding:'8%'}}>
  <img src="static/images/goal.png" alt="React Image" data-aos="zoom-in" style={{borderRadius:'5px',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}} />
  </div>
  <div style={{padding:'7%'}}>
   <p style={{color:'var(--textcolorHome)',paddingTop:'13%',paddingLeft:'2%',justifyContent:'center'}} data-aos="zoom-in">The majority of medications are left unused once a patient has been healed of their illness.<br></br><br></br>Our goal is to link patients and pharmacies to exchange medications, which will reduce the amount of medical waste created by medications by 80%.</p>
  </div>
</div>
</div>
<div id='services' style={{padding:'2%'}}></div>
<h1 style={{fontSize:'30px', color:'var(--textcolorHome)',textAlign:'center'}} data-aos="zoom-in">OUR SERVICES</h1>
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"  style={{paddingTop:'50px',padding:'10%',paddingBottom:'0%'}}>
  <div >
  <img src="/static/images/person_pharmacy.png" data-aos="fade-up" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'50%',height:'100%',borderRadius:'10px',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}} />
  </div>
  <div >
    <p style={{textAlign:'center',paddingTop:'17%',color:'var(--textcolorHome)'}}  data-aos="fade-down">Linking users and pharmacies for drug returns</p>
  </div>
</div>
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"  style={{paddingTop:'20px',padding:'10%',paddingBottom:'0%'}}>
<div >
  <img src="/static/images/Pharm_to_Pharm.png"  data-aos="fade-up" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'60%',height:'100%',borderRadius:'10px',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}} />
  </div>
<div >
    <p style={{textAlign:'center',paddingTop:'20%',color:'var(--textcolorHome)'}}  data-aos="fade-down">Facilitating the interchange of spare stock medicines between pharmacies</p>
  </div>
</div>
<div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"  style={{paddingTop:'20px',padding:'10%',paddingBottom:'10%'}}>
<div >
  <img src="/static/images/phone_coupon.png"  data-aos="fade-up" style={{display:'block',marginLeft:'auto',marginRight:'auto',width:'50%',height:'100%',borderRadius:'10px',boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}} />
  </div>
<div >
    <p style={{textAlign:'center',paddingTop:'20%',color:'var(--textcolorHome)'}}  data-aos="fade-down">Selling medications on our platform will earn you vouchers for future purchases.</p>
  </div>
</div>
        </div> 
      </div>
    
  )
}

export default Home
