import { education } from '../../data/details'
import './Education.css'

function Education() {
    return (
        <div id='education' className='education-container'>
            <div className='container'>
                <p className='title'>Education</p>
                <div className='edu-inner-container'>
                    {education.map((item) => (
                        <div className='row m-4 justify-content-center'>
                            <div className='col-8'>
                                <div className='card d-flex flex-row align-items-center'>
                                    <div>
                                        <img src={item.image} alt={item.course} className='mx-4' style={{width: '100px'}}/>
                                    </div>
                                    <div>
                                        <p className='institute'>{item.institution}</p>
                                        <p className='course'>{item.course}</p>
                                        <p className='year'>{item.year}</p>
                                        <p className='grade'>{item.grade}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education