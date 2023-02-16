import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import UserSignin from './screens/UserSignin'
import PharmacySignin from './screens/PharmacySignin'
import PharmacySignup from './screens/PharmacySignup'
import UserSignup from './screens/UserSignup'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignin" element={<UserSignin />} />
      <Route path="/pharmacySignin" element={<PharmacySignin />} />
      <Route path="/pharmacySignup" element={<PharmacySignup />} />
      <Route path="/userSignup" element={<UserSignup />} />
    </Routes>
  )
}

export default App
