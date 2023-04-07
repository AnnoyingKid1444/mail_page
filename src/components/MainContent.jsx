import Tab from "./TabTest";
import Avatar from "./Avatar";
import Navbar from "./navbar";
import "../styles/MainContent.css"

export default function MainContent() {
    return(
    <div className = "PageWrapper">

        <div className="nav-wrapper">
            <Avatar/>
            <Navbar/>
        </div>
    
        <div className="Page">
            <Tab/>
        </div>

    </div>
    )
}