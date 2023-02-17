import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import UserSignin from "./screens/UserSignin";
import PharmacySignin from "./screens/PharmacySignin";
import Requests from "./screens/User dashboard/Requests";
import GetDetails from "./screens/User dashboard/GetDetails";
import Rewards from "./screens/User dashboard/Rewards";
import PendingRequests from "./screens/Pharmacy dashboard/Pendingrequests";
import AcceptedRequests from "./screens/Pharmacy dashboard/Acceptedrequests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userSignin" element={<UserSignin />} />
      <Route path="/pharmacySignin" element={<PharmacySignin />} />
      <Route path="/user/Requests" element={<Requests />} />
      <Route path="/user/Getdetails" element={<GetDetails></GetDetails>} />
      <Route path="/user/Rewards" element={<Rewards></Rewards>} />
      <Route
        path="/pharmacy/pending_requests"
        element={<PendingRequests></PendingRequests>}
      />
      <Route
        path="/pharmacy/accepted_customers"
        element={<AcceptedRequests></AcceptedRequests>}
      />
    </Routes>
  );
}

export default App;
