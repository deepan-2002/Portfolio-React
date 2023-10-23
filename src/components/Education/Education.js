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
                            <div className='col-12 col-md-10'>
                                <div className='edu-card row align-items-center'>
                                    <div className='col-12 col-md-4 col-lg-3 text-center'>
                                        <img src={item.image} alt={item.course} className='m-4' style={{ width: '100px' }} />
                                    </div>
                                    <div className='col-12 col-md-8 col-lg-9'>
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