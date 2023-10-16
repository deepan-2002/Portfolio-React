import { Skill } from "../../data/details"
import './Skills.css'

function Skills() {
    return (
        <div id="skills" className="skills-container mt-2">
            <div className="container">
                <p>Skills</p>
                <div className="row">
                    <div className="col-10 col-lg-8 col-xl-4 d-flex m-auto align-items-center justify-content-around inner-container">
                        {Skill.map((item)=>(
                            <div className="skill-items-container d-flex m-2">
                                <img src={item.image} alt={item.name}/>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills