import {useState} from 'react';
import data from '../data.json';
import './Quiz.css';
import {useNavigate} from 'react-router-dom';
import { AppContext } from '../app-context';
import {useContext} from 'react';
function Quiz({subjectIndex}){
    const {themeColor} = useContext(AppContext);
    const  navigate = useNavigate();
    const questions = data.quizzes[subjectIndex].questions;
    const [correct,setCorrect] = useState(false);
    const [inCorrect, setInCorrect] = useState(false);
    const [selected,setSelected] = useState('');
    const [questionAnswered,setQuestionAnswered] = useState(false);
    const [showError, setShowError] = useState(false);
    const [questionsState,setQuestionsState] = useState({
        currentQuestion:0,
        optionSelected:'',
        correctIndex:'',
        score:0,
        answers: []
      })
      
    // console.log('current question',questionsState.currentQuestion)
    // console.log('correct/incorrect:', correct, inCorrect)
    const question = questions[questionsState.currentQuestion]
    
    
    const answer = question.answer;
    function handleSubmit(){
        if (selected === '') {
            setShowError(true);
            return;
        }
        setQuestionAnswered(true);
        const answer = question.answer;
        if(answer === questionsState.optionSelected){
            questionsState.score++;
            setCorrect(true);
        }
        else if(answer !== questionsState.optionSelected){
            setInCorrect(true);
            setCorrect(true);
        }
        // if(questionsState.currentQuestion === questions.length-1){
        //     navigate(`/score/${questionsState.score}/${questions.length}/${data.quizzes[subjectIndex].title}`);
        // }

    }
    function handleChoice(choice,index){
        setCorrect(false);
        setInCorrect(false);
        setSelected(index);
        setQuestionsState((prevState)=>{
            prevState.answers[prevState.currentQuestion] = choice;
            prevState.optionSelected = choice;
            return {...prevState};
        })
    }

    // console.log(questions);

    function handlePassQuestion(){
        setQuestionAnswered(false);
        setCorrect(false);
        setInCorrect(false);
        setSelected('');
        setShowError(false);
        if(questionsState.currentQuestion === questions.length-1){
            navigate(`/score/${questionsState.score}/${questions.length}/${data.quizzes[subjectIndex].title}`);
        }
        setQuestionsState((prevState)=>{
            return {
                ...prevState,
                currentQuestion: prevState.currentQuestion + 1
            };
        })
        // console.log('questionState',questionsState);
    }

    return (
        <div className='question container'>
            <p className={`body mobile ${themeColor}`}>{`Question ${questionsState.currentQuestion+1} of ${questions.length}`}</p>
            <h1>{question.question}</h1>
            <progress value={questionsState.currentQuestion+1} max={questions.length}></progress>
            <div className='options-container'>
                <ul className='options-container'>
                    {question.options.map((option,index)=>{
                        const isCorrectAnswer = answer === option
                        const showGreenBorder = correct && selected===index
                        const showCheckmark = (correct && isCorrectAnswer) || (inCorrect && isCorrectAnswer)
                        // console.log("isCorrectAnswer", option, answer, isCorrectAnswer)
                        // console.log("showCheckmark", showCheckmark)
                        const showX = inCorrect && selected===index
                        return (
                            <li key={option} >
                                <button onClick={()=>handleChoice(option, index)} className={`option-button card ${themeColor} text ${selected===index?'selected':''} ${showGreenBorder ? 'correct':''} ${inCorrect && selected===index? 'inCorrect': ''}`}>
                                    <span className='svg-box abc'>{String.fromCharCode(65 + (index))}</span>
                                    <span className='option-text'>{option}</span>
                                    {/* use grid for the correct or wrong svg */}
                                    {showX && <img src='./assets/images/icon-incorrect.svg' alt='incorrect mark svg'/>}
                                    {showCheckmark &&  <img src='./assets/images/icon-correct.svg' alt='checkmark svg' />}
                                    
                                </button>
                            </li>
                        )
                    })}
                </ul>
                {!questionAnswered && <button onClick ={handleSubmit} className='button card'>Submit Answer</button>}
                {questionAnswered && <button onClick={handlePassQuestion} className='button card'>Next Question</button>}
                {showError && (
                    <div className='error-message'>
                        <img src='./assets/images/icon-incorrect.svg' alt='incorrect mark svg'/>
                        <p>Please select an answer</p>
                    </div>
                )}
            </div>

        </div>
   )

}

export default Quiz;