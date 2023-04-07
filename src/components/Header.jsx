import "../styles/Header.css"
import SearchBar from "./SearchBar"
import LangToggler from "./langSelect"
import KiutLogo from '../img/KiutLogo1.png';
import {ReactComponent as IconBell} from '../svg/icon_bell.svg';
import DarkMode from "./toggler";


export default function Header() {
    return (
        <header>

<div className="uniLogo">
  <img src={KiutLogo} alt="" />
</div>

<SearchBar/>

<div className="selectors">

<div className="ThemeChanger">

<DarkMode/>
  
</div>

<div className="languageChanger">

<LangToggler/>

</div>

<div className="notification">

<IconBell/>

</div>

</div>

</header>
    )
}
