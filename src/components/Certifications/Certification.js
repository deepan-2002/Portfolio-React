import { Certifications } from "../../data/details"
import './Certification.css'

function Certification() {
    return (
        <div id="certification" className="certification-container mt-2">
            <div className="container">
                <p>Certifications</p>
                <div className="row justify-content-center">
                    {Certifications.map((certificate) => (
                        <div className="certificate-container col-10 col-lg-8 m-3">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <a href={certificate.link} target="blank">
                                        <img src={certificate.image} alt={certificate.name} className="img-fluid rounded" />
                                    </a>
                                </div>
                                <div className="col-12 col-lg-6 pt-3 ps-md-5 justify-content-center d-flex flex-column">
                                    <p className="title">{certificate.name}</p>
                                    <p className="institute">{certificate.institution}</p>
                                    <p className="skills d-flex flex-wrap"><strong>Skills: </strong>{certificate.skill.map((item) => (
                                        <p className="skill">  • {item}  </p>
                                    ))}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Certification