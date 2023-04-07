import "../styles/SearchBar.css"
import { ReactComponent as Search } from "../svg/search-normal.svg";

export default function SearchBar() {
    return(

        <div className="topBar">
            <input type="search" name="searchBar" className="searchBar" placeholder="Search"></input>
            <Search/>
        </div>
        
    )
}