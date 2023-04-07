import {ReactComponent as Logout} from '../svg/logout.svg';
import {ReactComponent as Home} from '../svg/Home_icon.svg';
import {ReactComponent as User} from '../svg/user.svg';
import {ReactComponent as Materials} from '../svg/materials.svg';
import {ReactComponent as Internalship} from '../svg/Internalship.svg';
import {ReactComponent as Tickets} from '../svg/Tickets.svg';
import {ReactComponent as Mail} from '../svg/Mail.svg';
import {ReactComponent as Services} from '../svg/Services.svg';
import Dropdown from './drobar';
import "../styles/NavBar.css"


export default function Navbar() {
    return(
        <div className="NavBar">

        <div className='navbarItem'>
          <Home/>
          <span>Home</span>
        </div>

        <div className='navbarItem'>
            <User/>
          <span>Profile</span>
        </div>

        <div>
            <Dropdown/>
        </div>

        <div className='navbarItem'>
        <Materials/>
        <span>Materials</span>
        </div>

        <div className='navbarItem'>
        <Internalship/>
        <span>Internalship</span>
        </div>

        <div className='navbarItem'>
        <Tickets/>
        <span>Tickets</span>    
        </div>

        <div className='navbarItem'>
        <Mail/>
        <span>Mail</span>
        </div>

        <div className='navbarItem'>
        <Services/>
        <span>Services</span>
        </div>

        <div className="logout">
        <Logout/>
        <span>Log out</span>
        </div>

        </div>
    )
}