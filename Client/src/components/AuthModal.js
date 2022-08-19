import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

const AuthModal = ({ setShowModal, isSignUp }) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    let navigate = useNavigate()

    // console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError("Passwords Need To Match!")
                return
            }

            console.log('posting', email, password)
            const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { email, password })

            setCookie('AuthToken', response.data.token)
            setCookie('userId', response.data.userId)

            const success = response.status === 201

            if (success && isSignUp) navigate("/onboard")
            if (success && !isSignUp) navigate("/dashboard")
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>X</div>
            <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
            <p>By Clicking Log In, You Agree To Our Terms And Conditions, Learn How We Process Data In Our Privacy And Cookie Policy</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="Email"
                    id="Email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}></input>

                <input
                    type="Password"
                    id="Password"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}></input>

                {isSignUp && <input
                    type="Password"
                    id="Password-Check"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}></input>}

                <input className="secondary-button" type="submit">
                </input>

            </form>
            <hr />
            <h2>GET THE APP</h2>

            AUTH MODAL
        </div>
    )
}
export default AuthModal