import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import UserSignin from "./screens/UserSignin";
import PharmacySignin from "./screens/PharmacySignin";
import Requests from "./screens/User dashboard/Requests";
import GetDetails from "./screens/User dashboard/GetDetails";
import Rewards from "./screens/User dashboard/Rewards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignin" element={<UserSignin />} />
      <Route path="/pharmacySignin" element={<PharmacySignin />} />
      <Route path="/user/Requests" element={<Requests />} />
      <Route path="/user/Getdetails" element={<GetDetails></GetDetails>} />
      <Route path="/user/Rewards" element={<Rewards></Rewards>} />
    </Routes>
  );
}

export default App;
