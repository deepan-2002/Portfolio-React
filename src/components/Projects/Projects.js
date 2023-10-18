import { projects } from '../../data/details'
import './Project.css'

function Project() {
    return (
        <div id='projects' className='projects-container'>
            <div className='container'>
                <p>Projects</p>
                <div className='row justify-content-around'>
                    {projects.map((items) => (
                        <div className='project-card col-10 col-md-5 col-lg-3 m-2'>
                            <img src={items.image} class="img-fluid mb-2" alt={items.name} />
                            <p class="name">{items.name}</p>
                            <p>{items.description}</p>
                            <p className='skills d-flex flex-wrap'>
                                {items.skills.map((skill) => (
                                    <p className='skill'>{skill}</p>
                                ))}
                            </p>
                            <a href={items.code} target='blank'>
                                    <button className='code'>View Code</button>
                                </a>
                                <a href={items.link} target='blank'>
                                    <button className='view-app'>View App</button>
                                </a>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project