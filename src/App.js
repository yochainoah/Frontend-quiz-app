import { useState } from 'react';
import { AppContext } from './app-context';
import ScorePage from './pages/ScorePage';
import data from './data.json';
import ToggleSwitch from './components/ToggleSwitch';
import Welcome from './pages/Welcome';
import { Route,Routes, useLocation } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import { useEffect } from 'react';

// /score?correct=8&total=12    or      /score/8/12

function App() {

    function getHeaderSVG() {
        setHeader((prevState)=>{
            if (location.pathname.startsWith('/score')) {
                const indexOfSubject = location.pathname.lastIndexOf('/')+1;
                const subject = location.pathname.slice(indexOfSubject);
                prevState.headerSubject = subject;
                prevState.headerSvg = `/assets/images/icon-${subject.toLowerCase()}.svg`;
                return {...prevState}
            } 
            switch(location.pathname) {
                case '/javascript':
                    break
                case '/html':
                    prevState.headerSubject = 'HTML';
                    prevState.headerSvg = '/assets/images/icon-html.svg';
                    break
                case '/css':
                    break
                case '/accessibility':
                    prevState.headerSubject = 'Accessibility';
                    prevState.headerSvg = '/assets/images/accessibility-icon.svg';
                    break;
                case '/':

                    break
                default:
                    break;
            }
            return {...prevState};
        })
    }

    let location = useLocation()

    useEffect(getHeaderSVG,[location])
    useEffect(getHeaderSVG, [])

    const [header,setHeader] = useState({
        headerSubject:'',
        headerSvg:'',
    })
    const [theme,setTheme] = useState('light');
    const subjects = data.quizzes.map((subject)=>subject.title);
    const ctxValue = {themeColor:theme,setThemeColor:setTheme,header:header,setHeader:setHeader}
    return <AppContext.Provider value={ctxValue}>
            <main className={`root ${theme}`}>
                <section className='header-container container'>
                    <div className='header-subject'>
                        {header.headerSvg ? (
                            <>                            
                                <img src={header.headerSvg} alt="subject svg" className={`svg-box ${header.headerSubject}`}/>
                                <p>{header.headerSubject}</p>
                            </>
                        ): <span></span>}
                    </div>
                    <ToggleSwitch theme={theme} setTheme={setTheme}/>
                </section>
{                <Routes>
                    <Route path="/" element = {<Welcome theme={theme}/>}/>
                    <Route path="/html" element={<Quiz subject={subjects[0]} subjectIndex={0}/>}/>
                    <Route path="/css" element={<Quiz subject={subjects[1]} subjectIndex={1}/>}/>
                    <Route path="/javascript" element={<Quiz subject={subjects[2]} subjectIndex={2}/>}/>
                    <Route path="/accessibility" element={<Quiz subject={subjects[3]} subjectIndex={3}/>}/>
                    <Route path="/score/:correct/:total/:subject" element={<ScorePage />}/>
                </Routes>}
            </main>
            </AppContext.Provider>
  
}

export default App;
