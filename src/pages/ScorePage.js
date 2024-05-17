import {useParams} from 'react-router-dom';
import './ScorePage.css';
import { AppContext } from '../app-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
function Score(){
    const {themeColor,header} = useContext(AppContext);
    const {correct,total} = useParams();
    console.log(header.headerSvg)
    return (
        <div className="score container">
            <h1 className={`heading medium `}>Quiz Completed<br/><span>You scored...</span></h1>
            <div className="score-content">
                <div className={`score-card ${themeColor}`}>
                    <div className='header-subject'>
                        <img className={`svg-box ${header.headerSubject}`} src={header.headerSvg} alt='subject svg'/>
                        <p>{header.headerSubject}</p>
                    </div>
                    <p>{correct}</p>
                    <p>{`out of ${total}`}</p>
                </div>
                <Link to='/'>
                    <button className='button card'>Play Again</button>
                </Link>
            </div>
        </div>
    )
}
export default Score;