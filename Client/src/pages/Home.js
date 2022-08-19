import Nav from "../components/Nav"
import AuthModal from "../components/AuthModal"
import { useState } from "react"


const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const authtoken = false

    const handleClick = () => {
        console.log("clicked")
        setShowModal(true)
        setIsSignUp(true)

    }
    return (
        <div className="overlay">
            <Nav minimal={false} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp} />
            <div className="home">
                <h1 className="primary-title">Swipe Right To Something Epic.</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authtoken ? "Sign Out" : "Create Account"}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
                )}

            </div>
        </div>
    )
}
export default Home