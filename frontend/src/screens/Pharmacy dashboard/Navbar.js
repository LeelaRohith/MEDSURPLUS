import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../../utils/Axios'

function UserNavbar() {
  const navigate = useNavigate()
  const [pharmacyDetails, setpharmacyDetails] = useState()
  useEffect(() => {
    async function getDetails() {
      const res = await Axios.get('/pharmacyDetails')
      console.log(res.data)
      setpharmacyDetails(res.data)
    }
    getDetails()
  }, [])
  const signout = () => {
    localStorage.removeItem('jwtKey')
    navigate('/')
  }
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
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
              alt="user settings"
              img="/static/images/pharmacyAvatar.png"
              rounded={true}
            />
          }
        >
          {pharmacyDetails ? (
            <Dropdown.Header>
              <span className="block text-sm">{pharmacyDetails.name}</span>
              <span className="block truncate text-sm font-medium">
                {pharmacyDetails.email}
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
          onClick={() => navigate('/pharmacy/pending_requests')}
        >
          Pending Requests
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate('/pharmacy/accepted_customers')}
          className="cursor-pointer"
        >
          Accepted Customers
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate('/pharmacy/claimReward')}
          className="cursor-pointer"
        >
          Claim Reward
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UserNavbar
