import { useState } from "react"
import TinderCard from "react-tinder-card"
import ChatContainer from "../components/ChatContainer"

const Dashboard = () => {

    const characters = [

        {
            name: "nitik ",
            url: "https://imgur.com/ZDDPRhi.jpg"
        },
        {
            name: "Erlich Bachmen",
            url: "https://imgur.com/hvVOLUk.jpg"
        },
        {
            name: "Monica Hall",
            url: 'https://imgur.com/tcTCWJ7.jpg'
        },
        {
            name: "Jared Dunn",
            url: "https://imgur.com/PiqO7JL.jpg"
        },
        {
            name: 'Ryan Gosling',
            url: 'https://imgur.com/GgiL45S.jpg'
        }
    ]

    const [lastdirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen')

    }

    return (
        <div className="dashboard">
            <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                        <TinderCard className="swipe"
                            key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className="card">
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastdirection ? <p>You Swiped {lastdirection}</p> : <p />}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dashboard