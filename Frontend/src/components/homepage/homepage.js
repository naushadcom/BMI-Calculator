import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
            <h1>Now, Calculate your BMI</h1>
        </div>
    )
}

export default Homepage