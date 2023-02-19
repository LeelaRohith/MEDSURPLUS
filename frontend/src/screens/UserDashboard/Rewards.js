import { useEffect, useState } from 'react'
import UserNavbar from './Navbar'
import { Axios } from '../../utils/Axios'
function Rewards() {
  const rewarddetails = [
    { text: 'Get 50 % Off', code: '', shopname: '763789DFST' },
  ]

  const [rewards, setrewards] = useState()
  useEffect(() => {
    async function getRewards() {
      try {
        const res = await Axios.get('/rewards')
        setrewards(res.data)
      } catch (err) {
        console.log(err.response.data.message)
      }
    }
    getRewards()
  }, [])

  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div style={{ backgroundColor: 'var(--themecolor)', minHeight: '81vh' }}>
        <p
          style={{
            textAlign: 'left',
            color: 'white',
            fontSize: '20px',
            paddingTop: '20px',
            marginLeft: '20px',
          }}
        >
          Discounts
        </p>
        <div
          className="grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            minHeight: '88vh',
          }}
        >
          {rewards &&
            rewards.map((item, index) => {
              return (
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '300px',
                    width: '280px',
                    margin: '34px',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}
                >
                  <div>
                    <img
                      src={`data:image/png;base64,${item.image}`}
                      width="250px"
                      height="80px"
                      style={{
                        marginLeft: '20px',
                        paddingTop: '5px',
                      }}
                      alt=""
                    ></img>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    {item.reward}
                    <br></br> Code : {item.orderId} <br></br> Medical Shop :{' '}
                    {item.organisation}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default Rewards
