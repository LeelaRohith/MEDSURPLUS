import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../../utils/Axios'

function UserNavbar() {
  const navigate = useNavigate()
  const [userDetails, setuserDetails] = useState()
  useEffect(() => {
    async function getDetails() {
      const res = await Axios.get('/userDetails')

      setuserDetails(res.data)
    }
    getDetails()
  }, [])
  const signout = () => {
    localStorage.removeItem('jwtKey')
    navigate('/')
  }
  return (
    <Navbar
      fluid={true}
      rounded={true}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <Navbar.Brand href="/">
        <img
          src="/static/images/logo.webp"
          className="h-6 sm:h-9"
          alt="medsurplus Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Medsurplus
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="/static/images/userAvatar.png"
              rounded={true}
            />
          }
        >
          {userDetails ? (
            <Dropdown.Header>
              <span className="block text-sm">{userDetails.username}</span>
              <span className="block truncate text-sm font-medium">
                {userDetails.email}
              </span>
            </Dropdown.Header>
          ) : (
            ''
          )}
          <Dropdown.Divider />
          <Dropdown.Item>
            <button
              onClick={(e) => {
                e.preventDefault()
                signout()
              }}
            >
              Sign out
            </button>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => navigate('/user/Requests')}
        >
          Requests
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate('/user/Getdetails')}
          className="cursor-pointer"
        >
          Get Details
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate('/user/Nearbypharmacies')}
          className="cursor-pointer"
        >
          Nearby Pharmacies
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate('/user/Rewards')}
          className="cursor-pointer"
        >
          Rewards
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UserNavbar
