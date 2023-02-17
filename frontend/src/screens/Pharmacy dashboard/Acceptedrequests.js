import { Button } from "flowbite-react";
import UserNavbar from "./Navbar";
function AcceptedRequests() {
  const rewarddetails = [
    { username: "Rohith", text: "Get 50 % Off", code: "" },
  ];
  return (
    <div>
      <div>
        <UserNavbar></UserNavbar>
      </div>
      <div style={{ backgroundColor: "var(--themecolor)", minHeight: "92vh" }}>
        <p
          style={{
            textAlign: "left",
            color: "white",
            fontSize: "20px",
            paddingTop: "20px",
            marginLeft: "20px",
          }}
        >
          Accepted Customers
        </p>
        <div
          className="grid"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              margin: "34px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <p style={{ paddingLeft: "12px", fontSize: "30px" }}>Poornesh</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              className="lg:justify-around"
            >
              <div style={{ paddingLeft: "20px" }}>
                <p style={{ whiteSpace: "nowrap" }}>Reward :dzthsdth </p>
              </div>

              <div style={{}}>
                <p>Code : drhdraETGwetg</p>
              </div>
              <div style={{ paddingBottom: "12px" }}>
                <Button
                  style={{
                    backgroundColor: "var(--lightBlue)",
                    height: "30px",
                  }}
                >
                  Claimed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AcceptedRequests;
