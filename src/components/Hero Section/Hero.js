import { Bio } from "../../data/details";
import ProfilePic from "../../image/ProfilePic3.jpg"
import './Hero.css'

function Hero() {
    return (
        <div id="about" className="hero-container">
            <div className="container">
                <div className="row text-center text-lg-start">
                    <div className="col-12 col-lg-6 order-lg-2 hero-container-right d-flex justify-content-end">
                        <img src={ProfilePic} alt="Deeban Yathiraja" className="m-auto img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 hero-container-left mt-3">
                        <p className="name">Hi, I am <br /> {Bio.name}</p>
                        <p className="role">{Bio.roles}</p>
                        <p className="description">{Bio.description}</p>
                        <a href={Bio.resume} target="blank"><button>Check Resume</button></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero