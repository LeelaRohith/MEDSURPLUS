import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function UserNavbar() {
  const navigate = useNavigate();
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
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => navigate("/user/Requests")}
        >
          Requests
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/user/Getdetails")}
          className="cursor-pointer"
        >
          Get Details
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/user/Nearbypharmacies")}
          className="cursor-pointer"
        >
          Nearby Pharmacies
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/user/Rewards")}
          className="cursor-pointer"
        >
          Rewards
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserNavbar;
