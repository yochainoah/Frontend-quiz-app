import './SubjectCard.css';
import { AppContext } from '../app-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

function Subject({subject,path}){
    const appCtx = useContext(AppContext);
    function handleSubjectChoice(){
        appCtx.setHeader((prevState)=>{
            prevState.headerSubject = subject;
            prevState.headerSvg = path;
            return {...prevState};
        })
    }
    return (
        <Link to={`/${subject.toLowerCase()}`}>
            <button  onClick = {handleSubjectChoice} className={`subject card ${appCtx.themeColor}`}>
                <img src={path} alt=" current subject" className={`svg-box ${subject}`}/>
                <p>{subject}</p>
            </button>
        </Link>
    ) 
}

export default Subject;