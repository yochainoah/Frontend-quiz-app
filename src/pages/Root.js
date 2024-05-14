// import './Root.css';
// import { useState } from "react";
// import ToggleSwitch from "../components/ToggleSwitch";
// import Welcome from './Welcome';
// import Subject from '../components/SubjectCard';
// import data from '../data.json';
// import { ThemeContext } from '../theme-context';
// function RootPage(){
    
//     const SUBJECTS = data.quizzes;
//     const [theme,setTheme] = useState('light');

//     const ctxValue = {themeColor:theme,setThemeColor:setTheme}
//     return <ThemeContext.Provider value={ctxValue}>
//             <main className={`root ${theme}`}>
//                 <section className='heading-container'>
//                     <ToggleSwitch theme={theme} setTheme={setTheme}/>
//                 </section>
//                 <section className='content'>
//                     <Welcome theme={theme}/>
//                     <ul className='subjects-container'>
//                         {SUBJECTS.map((subject,index)=><li key={index}><Subject subject={subject.title} path={`${subject.icon.slice(1)}`}/></li>)}
//                     </ul>
//                 </section>
//             </main>
//             </ThemeContext.Provider>

// }

// export default RootPage;