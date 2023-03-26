import React from "react";
import './styles/App.css'
import TabsTest from "./components/tabs";
import Navbar from "./components/navbar";
import LangToggler from "./components/langSelect";
import Avatar from "./components/Avatar";
import KiutLogo from './img/KiutLogo1.png';
import {ReactComponent as IconBell} from './svg/icon_bell.svg';



export default function App() {
  return (
<>  
<div className="topContent">

      <div className="uniLogo">
        <img src={KiutLogo} alt="" class=""/>
      </div>

<div className="topBar">
  <input type="search" name="searchBar" className="searchBar" placeholder="Search"></input>
</div>

<div className="selectors">

  <div className="themeChanger">

  </div>

<div className="languageChanger">

  <LangToggler/>

</div>

<div className="notification">

  <IconBell/>

</div>

</div>

</div>

<div className="Page-wrapper">

  <div className="nav-wrapper">
      <Avatar/>
      <Navbar/>
      </div>
    <div className="Page">
      <TabsTest/>
    </div>

</div>

</>
  );
}
