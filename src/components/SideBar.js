import React, { useRef, useEffect, useState, createRef } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import WorkExperience from './WorkExperience/index';
import Skills from './Skills';
import Projects from './Projects/Projects';
import Education from './Education';
import Certifications from './Certifications/index';
import { MdLightbulb } from 'react-icons/md';

const sideMenu = [
  { link: 'About', id: 1, content: [<About />] },
  { link: 'Work', id: 2, content: [<WorkExperience />] },
  { link: 'Skills', id: 3, content: [<Skills />] },
  { link: 'Projects', id: 4, content: [<Projects />] },
  { link: 'Education', id: 5, content: [<Education />] },
  { link: 'Awards', id: 6, content: [<Certifications />] }
];


const SideBar = () => {
  const [activeId, setActiveId] = useState(0);
  const [themeColorChange, setThemeColorChange] = useState(false)
  const [menuRefs, setmenuRefs] = useState([]);
  const ref = useRef(null)

  React.useEffect(() => {
    const refsArray = [];
    (sideMenu || []).forEach((policy, index) => {
      refsArray[index] = refsArray[index] || createRef();
      // (policy.menus || []).forEach((subMenu, subIndex) => {
      //   refsArray[index + "." + subIndex] =
      //     refsArray[index + "." + subIndex] || createRef();
      //   (subMenu.subMenus || []).forEach((_, innerIndex) => {
      //     refsArray[index + "." + subIndex + "." + innerIndex] =
      //       refsArray[index + "." + subIndex + "." + innerIndex] || createRef();
      //   });
      // });
    });
    setmenuRefs(refsArray);
  }, []);

  const setActiveHeading = (id) => {
    setActiveId(id);
    scrollToHeading(id);
  };

  const ThemeChange = () => {
    setThemeColorChange(!themeColorChange)
  }

  // const menuSelection = (id) => {
  //   setActiveId(id);
  //   scrollToHeading(id);
  // }

  const scrollTo = (id) => {
    window.scroll({
      top: menuRefs[id].current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const scrollToHeading = (id) => {
    //console.log('call me  '+menuRefs[id])
    window.scroll({
      top: menuRefs[id].current?.offsetTop - 10,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className='col-sm-5 col-md-4 col-lg-3 col-xl-2'>
        <div className='sideBar'>
          <div className="sidebar_section">
            <div className='slds-grid_vertical-align-center'>
              <span className='slds-avatar_xlarge'><img src={require('../assets/Subhash.jpg')} /></span>
              <h4 className='profilename'>Subhash Ghorpade</h4>
            </div>
            <ul>
              {(sideMenu || []).map((val, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveHeading(index)}
                    className={activeId === index ? `slds-nav-vertical__item slds-is-active` : ``}
                  >
                    <div className='sideMenuTitle'>{val.link}</div>
                  </li>
                );
              })}
            </ul>
            {/* <MdLightbulb className={`lighticon ${themeColorChange ? `darktheme` : ``}`} size={'30px'} onClick={ThemeChange} /> */}
          </div>
        </div>
      </div>
      <div className='col-sm-7 col-md-8 col-lg-9 col-xl-10'>
        {(sideMenu || []).map((val, index) =>
          <div className="page-content" ref={menuRefs[index]}>{val.content}</div>
        )}
      </div>
    </>
  );
}

export default SideBar;
