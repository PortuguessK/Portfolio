import { MoonSVG } from "../components/moon"
import { SunSVG } from "../components/sun" 
import { ChangeModeShared } from "./ModeContext" 
import "../css/Nav.css"


export function Nav(){
    const {isDark, toggleisDark} = ChangeModeShared()
    return(
        <nav>
        <span className="ModeContainer" onClick={toggleisDark}>
        {isDark? <MoonSVG /> : <SunSVG />}
        </span>
        </nav>
    )
}