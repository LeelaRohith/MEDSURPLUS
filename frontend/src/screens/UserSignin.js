import React, { useState } from 'react'

function UserSignin() {
  const [isSignup, setsignup] = useState(0)
  function handleSignup() {
    setsignup(1)
  }
  function handleSignin() {
    setsignup(0)
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isSignup === 0 ? (
          <div className="signin">
            <h1>Signin</h1>
            <form>
              <input />
            </form>
            <button onClick={handleSignup}>not yet registered? signup</button>
          </div>
        ) : (
          <div className="signup">
            <h1>Signup</h1>
            <form>
              <input />
            </form>
            <button onClick={handleSignin}>sign in</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserSignin
