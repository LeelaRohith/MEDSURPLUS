import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import UserSignin from './screens/UserSignin'
import PharmacySignin from './screens/PharmacySignin'
import Requests from './screens/UserDashboard/Requests'
import GetDetails from './screens/UserDashboard/GetDetails'
import Rewards from './screens/UserDashboard/Rewards'
import PharmacySignup from './screens/PharmacySignup'
import UserSignup from './screens/UserSignup'
import Maps from './screens/UserDashboard/Maps'
import PendingRequests from './screens/Pharmacy dashboard/Pendingrequests'
import AcceptedRequests from './screens/Pharmacy dashboard/Acceptedrequests'
import ClaimReward from './screens/Pharmacy dashboard/ClaimReward'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignin" element={<UserSignin />} />
      <Route path="/userSignup" element={<UserSignup />} />
      <Route path="/pharmacySignin" element={<PharmacySignin />} />
      <Route path="/pharmacySignup" element={<PharmacySignup />} />
      <Route path="/user/Requests" element={<Requests />} />
      <Route path="/user/Getdetails" element={<GetDetails />} />
      <Route path="/user/Rewards" element={<Rewards></Rewards>} />
      <Route path="/user/Nearbypharmacies" element={<Maps />} />
      <Route path="/pharmacy/pending_requests" element={<PendingRequests />} />
      <Route
        path="/pharmacy/accepted_customers"
        element={<AcceptedRequests />}
      />
      <Route path="/pharmacy/claimReward" element={<ClaimReward />} />
    </Routes>
  )
}

export default App
