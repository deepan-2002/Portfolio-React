import { Bio } from "../../data/details";
import './Hero.css'

function Hero(){
    return(
        <div id="about" className="hero-container">
            <div className="hero-container-left">
                <p className="name">Hi I am <br/> {Bio.name}</p>
                <p className="role">{Bio.roles}</p>
                <p className="description">{Bio.description}</p>
                <a href={Bio.resume}><button>Check Resume</button></a>
            </div>
        </div>
    )
}

export default Hero