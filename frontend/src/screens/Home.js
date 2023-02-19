import React, { useEffect, useLayoutEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  const navigate = useNavigate()
  const [Toggle, setToggle] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  const [size, setSize] = useState(window.innerWidth)
  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth)
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])
  }
  useWindowSize()
  return (
    <div>
      <div style={{ height: '350%', backgroundImage: 'var(--homethemecolor)' }}>
        <nav
          className="flex items-center justify-between flex-wrap  shadow p-6  "
          style={{
            backgroundColor: '#fff',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1,
            // borderBottomRightRadius: '10px',
            // borderBottomLeftRadius: '8px',
          }}
          id="Home"
        >
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span
              className="font-semibold text-xl tracking-tight"
              style={{ color: 'black', marginRight: '40px' }}
            >
              MEDSURPLUS
            </span>
          </div>
          <div className="block  lg:hidden ">
            <button
              onClick={(e) => {
                setToggle(!Toggle)
              }}
              className="flex items-center px-3 py-2 border rounded text-black-200 border-black-800 "
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {size > 1022 || Toggle ? <Navbar /> : ''}
        </nav>

        <div
          className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
          style={Toggle ? { paddingTop: '180px' } : { paddingTop: '80px' }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '2.5%',
              borderRadius: '25px',
              margin: '50px',
              paddingBottom: '7%',
              backgroundColor: 'var(--cardColor)',
            }}
          >
            <img
              src="static/images/Pharmacy_icon.png"
              alt=""
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1%',
                width: '20%',
                height: '20%',
              }}
            />
            <h1 style={{ fontSize: '20px' }}>For Pharmacies</h1>
            <p style={{ padding: '10%', paddingTop: '40px' }}>
              Sign in to your account to gain access to all available requests
              and send new requests to pharmacies.
            </p>
            <button
              style={{
                border: 'solid black 1px',
                borderRadius: '4px',
                backgroundColor: 'black',
                color: 'white',
                padding: '5px 20px',
              }}
              onClick={() => navigate('/PharmacySignin')}
            >
              <div href="PharmacySignin">Sign In</div>
            </button>
            <br></br>
            <br></br>
            <p style={{ fontSize: '12px', paddingBottom: '0%' }}>
              Don't have an account?&nbsp;{' '}
              <Link to="/PharmacySignup" className="hover:text-blue-600">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>

          <div
            style={{
              textAlign: 'center',
              padding: '2.5%',
              borderRadius: '25px',
              margin: '50px',
              paddingBottom: '7%',
              backgroundColor: 'var(--cardColor)',
            }}
          >
            <img
              src="static/images/User_icon.png"
              alt=""
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1%',
                width: '20%',
                height: '20%',
              }}
            />
            <h1 style={{ fontSize: '20px' }}>For Users</h1>
            <p style={{ padding: '10%', paddingTop: '40px' }}>
              Sign in to your pharmacy account to view your medication details,
              sell leftover medicines online
            </p>
            <button
              style={{
                border: 'solid black 1px',
                borderRadius: '4px',
                backgroundColor: 'black',
                color: 'white',
                padding: '5px 20px',
              }}
              onClick={() => navigate('/userSignin')}
            >
              <div> Sign In</div>
            </button>
            <br></br>
            <br></br>
            <p style={{ fontSize: '12px', paddingBottom: '0%' }}>
              Don't have an account?&nbsp;{' '}
              <Link to="/UserSignup" className="hover:text-blue-600">
                <b>Sign Up</b>
              </Link>
            </p>
          </div>
        </div>
        <div id="About" style={{ padding: '5%' }}>
          <h1
            style={{
              fontSize: '35px',
              color: 'var(--textcolorHome)',
              textAlign: 'center',
            }}
            data-aos="zoom-in"
          >
            OUR MOTIVE
          </h1>
          <div
            className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1"
            style={{ paddingTop: '50px' }}
          >
            <div
              style={{
                padding: '8%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="static/images/goal.png"
                data-aos="zoom-in"
                alt=""
                style={
                  {
                    // borderRadius: '5px',
                    // boxShadow:
                    //   'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
                    // backgroundColor: 'var(--cardColor)',
                    // border: '1px solid white',
                  }
                }
              />
            </div>
            <div style={{ padding: '7%' }}>
              <p
                style={{
                  color: 'var(--textcolorHome)',
                  paddingTop: '13%',
                  paddingLeft: '2%',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
                data-aos="zoom-in"
              >
                The majority of medications are left unused once a patient has
                been healed of their illness.<br></br>
                <br></br>Our goal is to link patients and pharmacies to exchange
                medications, which will reduce the amount of medical waste
                created by medications by 80%.
              </p>
            </div>
          </div>
        </div>
        <div id="services" style={{ padding: '2%' }}></div>
        <h1
          style={{
            fontSize: '35px',
            color: 'var(--textcolorHome)',
            textAlign: 'center',
          }}
          data-aos="zoom-in"
        >
          OUR SERVICES
        </h1>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
          style={{ paddingTop: '50px', padding: '10%', paddingBottom: '0%' }}
        >
          <div>
            <img
              src="/static/images/person_pharmacy.png"
              alt=""
              data-aos="fade-up"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                height: '100%',
                // borderRadius: '10px',
                // boxShadow:
                //   'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
              }}
            />
          </div>
          <div>
            <p
              style={{
                textAlign: 'center',
                paddingTop: '17%',
                color: 'var(--textcolorHome)',
                fontSize: '24px',
              }}
              data-aos="fade-down"
            >
              Linking users and pharmacies for drug returns
            </p>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
          style={{ paddingTop: '20px', padding: '10%', paddingBottom: '0%' }}
        >
          <div>
            <img
              src="/static/images/Pharm_to_Pharm.png"
              alt=""
              data-aos="fade-up"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '60%',
                height: '100%',
                // borderRadius: '10px',
                // boxShadow:
                //   'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
              }}
            />
          </div>
          <div>
            <p
              style={{
                textAlign: 'center',
                paddingTop: '20%',
                color: 'var(--textcolorHome)',
                fontSize: '24px',
              }}
              data-aos="fade-down"
            >
              Facilitating the interchange of spare stock medicines between
              pharmacies
            </p>
          </div>
        </div>
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
          style={{ paddingTop: '20px', padding: '10%', paddingBottom: '10%' }}
        >
          <div>
            <img
              src="/static/images/phone_coupon.png"
              alt=""
              data-aos="fade-up"
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%',
                height: '100%',
                // borderRadius: '10px',
                // boxShadow:
                //   'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
              }}
            />
          </div>
          <div>
            <p
              style={{
                textAlign: 'center',
                paddingTop: '20%',
                color: 'var(--textcolorHome)',
                fontSize: '24px',
              }}
              data-aos="fade-down"
            >
              Selling medications on our platform will earn you vouchers for
              future purchases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
