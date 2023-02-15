import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import UserSignin from './screens/UserSignin'
import PharmacySignin from './screens/PharmacySignin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignin" element={<UserSignin />} />
      <Route path="/pharmacySignin" element={<PharmacySignin />} />

    </Routes>
  )
}

export default App
