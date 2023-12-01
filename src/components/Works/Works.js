import { works } from "../../data/details"
import './Works.css'

function Works() {
    return (
        <div id='works' className='works-container container'>
            <p className='title'>View my Works</p>
            <div className='works-inner-container'>
                {works.map((item) => (
                    <div class="card works-box col-10 col-md-8 col-lg-5 mb-3 m-auto">
                        <div class="card-body">
                            <h5 class="card-title text-light">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                            <a href={item.link} target="blank" class="btn">View My Works</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works