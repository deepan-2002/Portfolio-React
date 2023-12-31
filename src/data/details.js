import HTML1 from '../image/HTML.png'
import JavaScript from '../image/JavaScript.png'
import ToDoList from '../image/To Do List.png'
import Restaurant from '../image/Restaurant.png'
import Google from '../image/Google.png'
import Counter from '../image/Counter.png'
import LightSwitch from '../image/Light Switch.png'
import Resume from '../image/Resume Builder.png'
import SJC from '../image/SJC-logo.jpeg'
import SJMHSS from '../image/SJMHSS-logo.jpeg'
import FrontEnd from '../image/Front End.png'
import UI_UX from "../image/UI-UX.png";
import BMI from '../image/BMI.png'
import reactBasics from '../image/React Basics.png'

export const Bio = {
    name: "Deeban Yathiraja R",
    roles: [
        "Web Developer",
        'UI/UX Designer',
        'Graphic Designer'
    ],
    description: "Enthusiastic Web Developer with a passion for crafting captivating digital experiences. Committed to excellence, I thrive on merging creativity with technical precision to deliver user-centric solutions. Open to exciting opportunities in web development and design.",
    github: "https://github.com/deepan-2002",
    resume: "https://drive.google.com/file/d/1CrSjLVXTtuT1v0Tw4Vap8zXacnjwa3O5/view?usp=drivesdk",
    linkedin: "https://www.linkedin.com/in/deeban-yathiraja/",
    mobile: '7339003664',
    email: 'deebanyathiraja2002@gmail.com'
};

export const Skill=[
    {
        name: 'HTML',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png'
    },
    {
        name: 'CSS',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png'
    },
    {
        name: 'Bootstrap',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/240px-Bootstrap_logo.svg.png'
    },
    {
        name: 'Tailwind CSS',
        image: 'https://avatars.githubusercontent.com/u/30317862?s=280&v=4'
    },
    {
        name: 'JavaScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
    },
    {
        name: 'React js',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    },
    {
        name: 'Git',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png'
    },
    {
        name: 'GitHub',
        image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
        name: 'Photoshop',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png'
    },
    {
        name: 'Illustrator',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png'
    },
    {
        name: 'Figma',
        image: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format'
    }
]

export const Certifications=[
    {
        name: 'Introduction to Front-End Development',
        institution: 'Meta - Cousera',
        link: 'https://www.coursera.org/account/accomplishments/verify/D9XMV2MMQS5A',
        image: FrontEnd,
        skill: [
            'HTML',
            'CSS'
        ]
    },
    {
        name: 'HTML and CSS in depth',
        institution: 'Meta - Cousera',
        link: 'https://www.coursera.org/account/accomplishments/verify/AET7PL22SJTE',
        image: HTML1,
        skill: [
            'HTML',
            'CSS',
            'Bootstrap'
        ]
    },
    {
        name: 'Programming with JavaScript',
        institution: 'Meta - Cousera',
        link: 'https://www.coursera.org/account/accomplishments/verify/795BEFXJULQ5',
        image: JavaScript,
        skill: [
            'JavaScript'
        ]
    },
    {
        name: 'React Basics',
        institution: 'Meta - Cousera',
        link: 'https://www.coursera.org/account/accomplishments/verify/EDDR4M9VVYQT',
        image: reactBasics,
        skill: [
            'ReactJS'
        ]
    },
    {
        name: 'Principles of UX/UI Design',
        institution: 'Meta - Cousera',
        link: 'https://www.coursera.org/account/accomplishments/verify/ZVKPJXL29JTT',
        image: UI_UX,
        skill: [
            'Figma'
        ]
    }
]

export const projects = [
    {
        name:'To-Do List App',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Local Storage',
            'JSON'
        ],
        link: 'https://deepan-2002.github.io/ToDo-List/',
        code: 'https://github.com/deepan-2002/ToDo-List',
        image: ToDoList,
        description: 'This JavaScript-based to-do list app leverages local storage functionality for seamless task management.'
    },
    {
        name:'BMI Calculator',
        skills: [
            'HTML',
            'tailwindcss',
            'JavaScript'
        ],
        link: 'https://deepan-2002.github.io/BMI-Calculator/',
        code: 'https://github.com/deepan-2002/BMI-Calculator',
        image: BMI,
        description: 'Body Mass Index Calculator, built using JavaScript. Enter you Height and Weight to know your Body Mass Index'
    },
    {
        name:'Restaurant Table Booking Page',
        skills: [
            'ReactJS',
            'API',
            'Axios'
        ],
        link: 'https://restaurant-page14.netlify.app/',
        code: 'https://github.com/deepan-2002/Restaurant-Webpage',
        image: Restaurant,
        description: 'Just posting datas in API and fetching that data from that API shown like a Table booking App using ReactJS'
    },
    {
        name:'Counter App',
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        link: 'https://deepan-2002.github.io/Counter-App-JS/',
        code: 'https://github.com/deepan-2002/Counter-App-JS',
        image: Counter,
        description: 'Simple JavaScript Project in which we can just increase or decrease number'
    },
    {
        name:'Google Clone',
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        link: 'https://deepan-2002.github.io/Google-Dark-Mode/',
        code: 'https://github.com/deepan-2002/Google-Dark-Mode',
        image: Google,
        description: 'Clone of Google webpage with Dark Mode toggle button. Built using JavaScript'
    },
    {
        name:'Light Switch',
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        link: 'https://deepan-2002.github.io/Light-Switch-JS/',
        code: 'https://github.com/deepan-2002/Light-Switch-JS',
        image: LightSwitch,
        description: 'Simple Light Switch created where switch can be on and off. Built using JavaScript'
    },
    {
        name:'Resume Builder',
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        link: 'https://deepan-2002.github.io/Resume-Builder-JS/',
        code: 'https://github.com/deepan-2002/Resume-Builder-JS',
        image: Resume,
        description: 'SImple Resume Builder, Built using JavaScript.'
    }
]

export const education =[
    {
        institution: "St. Joseph's College (Autonomous), Trichy",
        course: "Bachelor of Commerce - B.Com",
        year: '2019 - 2022',
        grade: 'CGPA: 7.98',
        image: SJC
    },
    {
        institution: "Sri Jayendra Matriculation Higher Secondary School, Trichy",
        course: "HSC (XII)",
        year: '2018 - 2019',
        grade: '72.1%',
        image: SJMHSS
    },
    {
        institution: "Sri Jayendra Matriculation Higher Secondary School, Trichy",
        course: "SSLC (X)",
        year: '2016 - 2017',
        grade: '89%',
        image: SJMHSS
    }
    
]

export const works=[
    {
        title: 'React JS',
        link: 'https://deepan-react-tasks.netlify.app/',
        description: "Compilation of some of my works created using ReactJS"
    },
    {
        title: 'UI/UX Design',
        link: 'https://www.behance.net/gallery/185318967/SwipePay-Payment-App-UIUX-design',
        description: "UI/UX design Portfolio | Online mobile payment app | SwipePay"
    }
]