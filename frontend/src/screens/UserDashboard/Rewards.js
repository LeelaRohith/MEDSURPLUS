import UserNavbar from "./Navbar";
function Rewards() {
  const rewarddetails = [
    { text: "Get 50 % Off", code: "", shopname: "763789DFST" },
  ];
  return (
    <div>
      <div>
        <UserNavbar></UserNavbar>
      </div>
      <div style={{ backgroundColor: "var(--themecolor)", minHeight: "81vh" }}>
        <p
          style={{
            textAlign: "left",
            color: "white",
            fontSize: "20px",
            paddingTop: "20px",
            marginLeft: "20px",
          }}
        >
          Discounts
        </p>
        <div
          className="grid"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            minHeight: "88vh",
          }}
        >
          {rewarddetails.map((item, index) => {
            return (
              <div
                style={{
                  backgroundColor: "white",
                  height: "300px",
                  width: "280px",
                  margin: "34px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div>
                  <img
                    src="/static/images/discount1.jpg"
                    width="250px"
                    height="80px"
                    style={{
                      marginLeft: "20px",
                      paddingTop: "5px",
                    }}
                  ></img>
                </div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  {item.text}
                  <br></br> Code : {item.code} <br></br> Medical Shop :{" "}
                  {item.shopname}
                </div>
              </div>
            );
          })}
        </div>
        <p
          style={{
            textAlign: "left",
            color: "white",
            margin: "20px",
            fontSize: "20px",
          }}
        >
          Coupons
        </p>
      </div>
    </div>
  );
}
export default Rewards;
