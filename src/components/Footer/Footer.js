import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Bio } from '../../data/details'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer>
            <div id='contact' className="container text-center">
                <div className='row justify-content-around align-items-center'>
                    <div className='col-12 col-md-6 order-md-2 icon-container'>
                        <a href='tel: +917339003664'><FontAwesomeIcon icon={faPhone} /></a>
                        <a href='mailto: deebanyathiraja2002@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href={Bio.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href={Bio.github}><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <div className='col-12 col-md-6 order-md-1'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.85351527315!2d78.69287527533967!3d10.822520089329107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5a9344eee6f%3A0x2a9faa5344bd29e6!2sSamaspiran%20St%2C%20Singarathope%2C%20Tharanallur%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620002!5e0!3m2!1sen!2sin!4v1698046879204!5m2!1sen!2sin" className='embed-responsive' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='myHome'></iframe>
                    </div>
                </div>
                <div className='row copyright'>
                    <p>
                        Copyright &copy; 2023 - <a href={Bio.github}>Deeban Yathiraja</a> - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer