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

    let location = useLocation()

    useEffect(()=>{
        setHeader((prevState)=>{
            switch(location.pathname) {
                case '/javascript':
                    break
                case '/html':
                    break
                case '/css':
                    break
                case '/accessibility':
                    break;
                case '/':
                        prevState.headerSubject = '';
                        prevState.headerSvg = '';
                    break
                default:
                    break;
            }
            return {...prevState};
        })
    },[location])

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
                    <Route path="/score/:correct/:total" element={<ScorePage />}/>
                </Routes>}
            </main>
            </AppContext.Provider>
  
}

export default App;
