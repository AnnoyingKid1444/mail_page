import React, { useState } from "react";
import TableGrades from "./tableGrades";
import "../styles/Tab.css"

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

    const [toggleTabState, setToggleTab] = useState(1);

  const toggleSemestrTab = (index) => {
    setToggleTab(index);
  };

    const getActiveTab = (index, className) =>
    toggleTabState === index ? className : "";

  return (
    <div className="container">
      <ul className="courseList">
        <li
          className={`courseTab ${getActiveClass(1, "active-tabs")}`}
          onClick= {() => {
            toggleTab(1);
            toggleSemestrTab(1);
          }}
        >
          <span>1 course</span>
        </li>
        <li
          className={`courseTab ${getActiveClass(2, "active-tabs")}`}
          onClick= {() => {
            toggleTab(2);
            toggleSemestrTab(3);
          }}
        >
          <span>2 course</span>
        </li>
        <li
          className={`courseTab ${getActiveClass(3, "active-tabs")}`}
          onClick= {() => {
            toggleTab(3);
            toggleSemestrTab(5);
          }}
        >
          <span>3 course</span>
        </li>
        <li
          className={`courseTab ${getActiveClass(4, "active-tabs")}`}
          onClick= {() => {
            toggleTab(4);
            toggleSemestrTab(7);
          }}
        >
          <span>4 course</span>
        </li>

      </ul>

      <div className="content-container">

      {/* course 1 */}

        <div className={`tabContent ${getActiveClass(1, "active-content")}`}>

      <ul className="semestrList">

        <li
          className={`SemestrTab ${getActiveTab(1, "active-tabs")}`}
          onClick={() => toggleSemestrTab(1)}
        >
          <span>1 semestr</span>
        </li>

        <li
          className={`SemestrTab ${getActiveTab(2, "active-tabs")}`}
          onClick={() => toggleSemestrTab(2)}
        >
          <span>2 semestr</span>
        </li>

      </ul>

      <div className="content-container">
        
      <div className={`tabContent ${getActiveTab(1, "active-content")}`}>
          <TableGrades/>
        </div>

        <div className={`tabContent ${getActiveTab(2, "active-content")}`}>
          <TableGrades/>
        </div>

      </div>

        </div>

      {/* course 2 */}

        <div className={`tabContent ${getActiveClass(2, "active-content")}`}>
        
        <ul className="semestrList">

          <li
            className={`SemestrTab ${getActiveTab(3, "active-tabs")}`}
            onClick={() => toggleSemestrTab(3)}
          >
          <span>1 semestr</span>
          </li>

          <li
            className={`SemestrTab ${getActiveTab(4, "active-tabs")}`}
            onClick={() => toggleSemestrTab(4)}
          >
          <span>2 semestr</span>
          </li>

        </ul>

        <div className="content-container">

          <div className={`tabContent ${getActiveTab(3, "active-content")}`}>
            <TableGrades/>
          </div>

          <div className={`tabContent ${getActiveTab(4, "active-content")}`}>
            <TableGrades/>
          </div>

        </div>

        </div>

        {/* semestr 3 */}

        <div className={`tabContent ${getActiveClass(3, "active-content")}`}>
          
          <ul className="semestrList">

            <li
              className={`SemestrTab ${getActiveTab(5, "active-tabs")}`}
              onClick={() => toggleSemestrTab(5)}
            >
            <span>1 semestr</span>
            </li>

            <li
            className={`SemestrTab ${getActiveTab(6, "active-tabs")}`}
            onClick={() => toggleSemestrTab(6)}
            >
            <span>2 semestr</span>
            </li>

          </ul>

          <div className="content-container">

            <div className={`tabContent ${getActiveTab(5, "active-content")}`}>
              <TableGrades/>
            </div>

            <div className={`tabContent ${getActiveTab(6, "active-content")}`}>
              <TableGrades/>
            </div>

          </div>

        </div>

        {/* semestr 4 */}

        <div className={`tabContent ${getActiveClass(4, "active-content")}`}>
          
          <ul className="semestrList">

            <li
              className={`SemestrTab ${getActiveTab(7, "active-tabs")}`}
              onClick={() => toggleSemestrTab(7)}
            >
            <span>1 semestr</span>
            </li>

            <li
            className={`SemestrTab ${getActiveTab(8, "active-tabs")}`}
            onClick={() => toggleSemestrTab(8)}
            >
            <span>2 semestr</span>
            </li>

          </ul>

          <div className="content-container">

            <div className={`tabContent ${getActiveTab(7, "active-content")}`}>
              <TableGrades/>
            </div>

            <div className={`tabContent ${getActiveTab(8, "active-content")}`}>
              <TableGrades/>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Tab