import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import UserSignin from './screens/UserSignin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignin" element={<UserSignin />} />
    </Routes>
  )
}

export default App
