import blacklogo from "../Images/Logo/tinder black logo.png"
import whitelogo from "../Images/Logo/tinder whitelogo.png"

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authtoken = false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? blacklogo : whitelogo} alt=""></img>
            </div>
            {!authtoken && !minimal && <button className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >Log In</button>}
        </nav>
    )
}
export default Nav