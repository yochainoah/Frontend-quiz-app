import './ToggleSwitch.css';
import { AppContext } from '../app-context';
import { useContext } from 'react';
function ToggleSwitch(){
    const appCtx = useContext(AppContext);
    function handleTheme(){
        
        appCtx.setThemeColor((prevTheme)=>{
            if(prevTheme === 'light'){
                return 'dark';
            }
            return 'light';
        });
    }
    return (
        <div className='toggleContainer'>
            {appCtx.themeColor === 'light' ? <img src="./assets/images/icon-sun-dark.svg" className='dark-sun' alt="icon of dark sun"/> : <img src="./assets/images/icon-sun-light.svg"  className='light-sun' alt="icon of light sun"/>}
            <label className="switch">
                <input type="checkbox" onChange={handleTheme}/>
                <span className="slider round"></span>
            </label>
            {appCtx.themeColor === 'light' ? <img  src = "./assets/images/icon-moon-dark.svg" className='dark-moon' alt="icon of dark moon"/>: <img src="./assets/images/icon-moon-light.svg" className='light-moon' alt="icon of light moon"/>}
        </div>
    )
}
export default ToggleSwitch;