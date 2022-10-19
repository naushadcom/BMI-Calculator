// import React from "react"
import "./homepage.css"

// const Homepage = ({setLoginUser}) => {
//     return (
//         <div className="homepage">
//             <div className="button" onClick={() => setLoginUser({})} >Logout</div>
//             <h1>Now, Calculate your BMI</h1>

            
//         </div>
//     )
// }

// export default Homepage


import React, { useState } from 'react';
// import '../../index.css'

function Homepage({setLoginUser}) {

    // state
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')



    let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()

        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height')
        } else {
            let bmi = (weight * 10000) / (height * height)
            setBmi(bmi.toFixed(1))

            // Logic for message

            if (bmi < 25) {
                setMessage('You are underweight')
            } else if (bmi >= 25 && bmi < 30) {
                setMessage('You are a healthy')
            } else {
                setMessage('You are overweight')
            }
        }
    }

    //  show image based on bmi calculation
    let imgSrc;

    if (bmi < 1) {
        imgSrc = null
    } else {
        if (bmi < 25) {
            imgSrc = "https://image.shutterstock.com/image-vector/illustration-underweight-man-skin-bones-260nw-1329921086.jpg"
        } else if (bmi >= 25 && bmi < 30) {
            imgSrc = "https://image.shutterstock.com/image-photo/fitness-people-healthy-lifestyle-concept-260nw-249902236.jpg"
        } else {
            imgSrc = "https://cdn5.vectorstock.com/i/1000x1000/47/49/flat-overweight-obese-unhappy-man-at-scale-vector-23814749.jpg"
        }
    }


    let reload = () => {
        window.location.reload()
    }

    return (
        <div className="app">
        <div className="button" onClick={() => setLoginUser({})} >Logout</div>
            <div className='container'>
                <h2 className='center'>Now, Calculate your BMI</h2>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight (kg)</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input value={height} onChange={(event) => setHeight(event.target.value)} />
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                        {/* <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button> */}
                    </div>
                </form>

                <div className='center'>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>

                <div className='img-container'>
                    <img src={imgSrc} alt=''></img>
                </div>
            </div>
        </div>
    );
}

export default Homepage;