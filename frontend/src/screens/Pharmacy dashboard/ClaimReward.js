import { Button, Label, TextInput } from "flowbite-react";
import UserNavbar from "./Navbar";
import Divider from "@mui/material/Divider";
import { Axios } from "../../utils/Axios";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

function ClaimReward() {
  const { enqueueSnackbar } = useSnackbar();
  const details = [
    {
      name: "rohith",
      reward: "50%off on his next purchase",
      couponid: "675675967",
    },
  ];
  const [code, setcode] = useState();
  const [foundReward, setfoundReward] = useState();

  const claim = async () => {
    try {
      const res = await Axios.post("/claimReward", { code });
      console.log(res.data);
      enqueueSnackbar(res.data, {
        variant: "success",
        autoHideDuration: 1000,
      });
    } catch (err) {
      console.log(err.response.data.message);
      enqueueSnackbar(err.response.data.message, { variant: "error" });
    }
  };
  const search = async () => {
    try {
      const res = await Axios.post("/searchReward", { code });
      console.log(res.data);
      setfoundReward(res.data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <UserNavbar></UserNavbar>
      </div>
      <div style={{ paddingTop: "20px", backgroundColor: "var(--themecolor)" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padingTop: "0px",
            backgroundColor: "var(--themecolor)",
          }}
        >
          <input
            style={{
              borderRadius: "4px",
              marginRight: "10px",
            }}
            onChange={(e) => setcode(e.target.value)}
            type="text"
            placeholder="Enter the orderID : "
          ></input>
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                search();
              }}
              style={{ backgroundColor: "var(--lightBlue)" }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div
        className="grid"
        style={{
          backgroundColor: "var(--themecolor)",
          minHeight: "83vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        {foundReward ? (
          <div
            className="lg:w-96 max-sm:w-64 grid"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              // textAlign: "left",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <p style={{ marginBottom: "5px", paddingTop: "10px" }}>
              Customer name : {foundReward.userId.username}
            </p>
            <p style={{ marginBottom: "5px" }}>
              Reward Earned : {foundReward.reward}
            </p>
            <p style={{ marginBottom: "5px" }}>
              Coupon code :{foundReward._id}
            </p>
            <Button
              className="w-20"
              style={{
                backgroundColor: "var(--lightBlue)",
                height: "30px",
              }}
              onClick={(e) => {
                e.preventDefault();
                claim();
              }}
            >
              Claim
            </Button>
            <div style={{ paddingBottom: "12px" }}></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default ClaimReward;
