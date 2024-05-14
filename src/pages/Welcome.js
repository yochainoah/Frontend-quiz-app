import './Welcome.css';
import Subject from '../components/SubjectCard';
import data from '../data.json';

function Welcome({theme}){

    const SUBJECTS = data.quizzes;
    return (
        <section className='content container'>
            <main className="welcome-heading">
                <h1 className={`heading medium ${theme}`}>Welcome to the <span>Frontend quiz!</span></h1>
                <p className={`body mobile ${theme}`}>Pick a subject to get started.</p>
            </main>
            <ul className='subjects-container'>
                {SUBJECTS.map((subject,index)=><li key={index}><Subject subject={subject.title} path={`${subject.icon.slice(1)}`}/></li>)}
            </ul>
        </section>
    ) 
}

export default Welcome;