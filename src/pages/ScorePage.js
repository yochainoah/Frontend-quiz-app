import {useParams} from 'react-router-dom';
import './ScorePage.css';
import { AppContext } from '../app-context';
import { useContext } from 'react';
function Score(){
    const {themeColor,header} = useContext(AppContext);
    const {correct,total} = useParams();
    console.log(header.headerSvg)
    return (
        <div className='score container'>
            <h1 className={`heading medium `}>Quiz Completed<br/><span>You scored...</span></h1>
            <div className={`score-card ${themeColor}`}>
                <img src={header.headerSvg} alt='subject svg'/>
                <p>{correct}</p>
                <p>{`out of ${total}`}</p>
            </div>
            <button className='button card'>Play Again</button>
        </div>
    )
}
export default Score;