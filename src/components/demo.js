// import React, { useEffect, useState, createRef } from "react";
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { MdLightbulb } from 'react-icons/md';
// import About from './About';
// import WorkExperience from './WorkExperience';
// import Skills from './Skills';
// import Projects from './Projects/index';
// import Education from './Education';
// import Certifications from './Certifications';

// const sideMenu = [
//     { title: 'About' ,id:1,href:'#1'},
//     { title: 'Work' ,id:2,href:'#2'},
//     { title: 'Skills' ,id:3,href:'#3'},
//     { title: 'Projects',id:4 ,href:'#4'},
//     { title: 'Education' ,id:5,href:'#5'},
//     { title: 'Awards' ,id:6,href:'#6'},
//     { title: 'Talks' ,id:7,href:'#7'},
//   ];
// const SideBar= () => {
//   const [themeColorChange,setThemeColorChange]=useState(false);
//   const [activeId, setActiveId] = useState(0);
//   const [menuRefs, setmenuRefs] = useState([]);





//   const ThemeChange = ()=>{
//     setThemeColorChange(!themeColorChange)
//   }

//   const menuSelection =(id)=>{
//     setActiveId(id);
//     scrollToHeading(id);
//   }

//   const scrollToHeading = (id) => {
//     window.scroll({
//       top: menuRefs[id].current.offsetTop - 100,
//       behavior: "smooth",
//     });
//   };
//   return (
// <>
//     <div className='col-lg-2'>
//     <div className='sideBar'>
//     <div> 
//       <div className='slds-grid_vertical-align-center'>
//         <span className='slds-avatar_xlarge'><img src={require('../assets/Subhash.jpg')}/></span>
//       <h4 className='profilename'>Subhash Ghorpade</h4>
//       </div>
//       <ul>
//             {sideMenu.map((val,index)=>
//               <li key={index} className='slds-nav-vertical__item slds-is-active' onClick={()=>menuSelection(val.id)}><a href={val.href} className='sideMenuTitle'>{val.title}</a></li>
//             )}
//            </ul>
//            <MdLightbulb className={`lighticon ${themeColorChange?`darktheme`:``}`} size={'30px'} onClick={ThemeChange}/>
//         </div>
//     </div>
//     </div>
//     <div className='col-lg-10'>
//       <About id={1}/>
//       <WorkExperience id={2}/>
//        <Skills/>
//       <Projects/>
//       <Education />
//       <Certifications/> 
//     </div>
//     </>
//   );
// }

// export default SideBar;




import React, { useEffect, useState, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const sideMenu = [
  { link: 'About' ,id:1,
  content: [
    <ul style={{ listStyleType: "decimal" }} className="pl-12">
     <div>dasdasdasdasd</div>
    </ul>,
  ]
},
  { link: 'Work' ,id:2,
  content: [
    <ul style={{ listStyleType: "decimal" }} className="pl-12">
     <div>dasdasdasdasd</div>
    </ul>,
  ]
},
  { link: 'Skills' ,id:3, content: [
    <ul style={{ listStyleType: "decimal" }} className="pl-12">
     <div>dasdasdasdasd</div>
    </ul>,
  ]},
  { link: 'Projects',id:4 , content: [
    <ul style={{ listStyleType: "decimal" }} className="pl-12">
     <div>dasdasdasdasd</div>
    </ul>,
  ]},
  { link: 'Education' ,id:5, content: [
    <ul style={{ listStyleType: "decimal" }} className="pl-12">
     <div>dasdasdasdasd</div>
    </ul>,
  ]},
  { link: 'Awards' ,id:6, content: [
    <ul style={{ listStyleType: "decimal" }} className="pl-12">
     <div>dasdasdasdasd</div>
    </ul>,
  ]}
];

const SideBar = () => {
  // const [isMobile, setIsMobile] = useState(false);

  const [activeId, setActiveId] = useState(0);

  const setActive = (id) => {
    setActiveId(id);
    scrollTo(id);
  };

  const setActiveHeading = (id) => {
    setActiveId(id);
    scrollToHeading(id);
  };

  // useEffect(() => {
  //   const hideMenu = () => {
  //     if (window.innerWidth <= 768) {
  //       setIsMobile(true);
  //     } else {
  //       setIsMobile(false);
  //     }
  //   };

  //   window.addEventListener("load", hideMenu);
  //   window.addEventListener("resize", hideMenu);

  //   return () => {
  //     window.removeEventListener("resize", hideMenu);
  //   };
  // });
  // const arrLength = terms.length;
  const [menuRefs, setmenuRefs] = React.useState([]);

  React.useEffect(() => {
    const refsArray = [];
    (sideMenu || []).forEach((policy, index) => {
      refsArray[index] = refsArray[index] || createRef();
      (policy.menus || []).forEach((subMenu, subIndex) => {
        refsArray[index + "." + subIndex] =
          refsArray[index + "." + subIndex] || createRef();
        (subMenu.subMenus || []).forEach((_, innerIndex) => {
          refsArray[index + "." + subIndex + "." + innerIndex] =
            refsArray[index + "." + subIndex + "." + innerIndex] || createRef();
        });
      });
    });
    setmenuRefs(refsArray);
  }, []);

  //****************************************** */

  const [isOpenMenu, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isOpenMenu);
  // };

  // let BiChevronDownClassName = ["text-2xl"];
  // if (isOpenMenu) BiChevronDownClassName.push("hidden");

  // let BiChevronUpClassName = ["text-2xl"];
  // if (!isOpenMenu) BiChevronUpClassName.push("hidden");

  const scrollTo = (id) => {
    window.scroll({
      top: menuRefs[id].current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const scrollToHeading = (id) => {
    window.scroll({
      top: menuRefs[id].current.offsetTop - 150,
      behavior: "smooth",
    });
  };


  const desktopMenu = (
    <div className="resources-menu-container col-md-4 col-lg-3 hidden md:block">
      <div className="menu-policies-menu-container sticky overflow-y-auto menu-sroll top-24">
        <ul id="menu-policies-menu" className="nav policies_nav">  
     {(sideMenu || []).map((val, index) => {   
    return (
      <div key={index} className="w-full">
        <li
          onClick={() => setActiveHeading(index)}
          className={
            activeId === index
              ? "text-base xl:text-lg mt-3 px-2 py-1 font-medium w-full active-link cursor-pointer"
              : "text-base xl:text-lg mt-3 px-2 font-medium w-full inactive-link cursor-pointer overflow-hidden whitespace-nowrap"
          }
          key={index}
        >
          {val.link}
        </li>
        {/* {submenu} */}
      </div>
    );
  })}
        </ul>
      </div>
    </div>
  );

  const content = (sideMenu || []).map((policy, index) => {
    const mainItems = (policy.content || []).map((item, innerMainItemIndex) => (
      <div className="pl-4" key={"iM" + innerMainItemIndex}>
        {item}
      </div>
    ));
    const subContent = (policy.menus || []).map((subMenu, subIndex) => {
      const subItems = (subMenu.content || []).map(
        (item, innerSubItemIndex) => (
          <div className="pl-12" key={"s" + innerSubItemIndex}>
            {item}
          </div>
        )
      );
      const innerContent = (subMenu.subMenus || []).map(
        (innerMenu, innerIndex) => {
          const innerItems = (innerMenu.content || []).map(
            (item, innerItemIndex) => (
              <div className="pl-16" key={"iI" + innerItemIndex}>
                {item}
              </div>
            )
          );
          return (
            <div
              className="pl-12"
              key={index + "." + subIndex + "." + innerIndex}
              ref={menuRefs[index + "." + subIndex + "." + innerIndex]}
            >
             
              <p className="title text-white text-xs sm:text-sm md:text-base font-medium pt-4">
        {innerMenu.link}
      </p>
              {innerItems}
            </div>
          );
        }
      );
      return (
        <div key={index + "." + subIndex}>
          <div
            className="pl-4"
            key={index + "." + subIndex}
            ref={menuRefs[index + "." + subIndex]}
          >
            {/* <PointSubHeading
              key={"m" + index + "." + subIndex}
              text={subMenu.link}
            /> */}
          </div>
          {subItems}
          {innerContent}
        </div>
      );
    });
    return (
      <div key={index}>
        <div key={index} ref={menuRefs[index]}>
          <div>{policy.link}</div>
        </div>
        {mainItems}
      </div>
    );
  });
  return (
    <>
      <section
        className="policies-section page-header policies-header text-white font-medium text-left text-4xl pb-10 px-10 
      m-auto max-w-screen-2xl"
      >
        <p
          role="doc-subtitle"
          className="page-title pb-2 flex justify-center text-xl md:text-2xl"
        >
          TERMS AND CONDITION OF USE
        </p>
        <div className=" block md:flex">
        
          {desktopMenu}
          <div className="page-content md:col-lg-9">{content}</div>
        </div>

        {/* <BiChevronUp
          className="fixed right-2 bottom-5 bg-pink rounded cursor-pointer"
          onClick={scrollToTop}
        /> */}
      </section>
    </>
  );
};

export default SideBar;


















.slds-progress_vertical{
  max-width: none;
  position: relative;
  /* max-width: 70%; */
  width: 100%;
  flex: 1 1 auto;
  margin: auto;
}
.slds-progress__list{
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: auto;
  position: relative;
  z-index: 1;
  display: block;
}
.slds-progress_vertical .slds-progress__item {
  position: relative;
  display: flex;
  align-self: left;
  align-items: center;
  padding: 0;
}
.slds-progress__item.slds-is-completed .slds-progress__marker {
  background: #fff;
  border-color: #1589ee;
}
.slds-progress_vertical .slds-progress__marker {
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  min-width: 1rem;
  z-index: 5;
}
.slds-progress__marker {
  width: 1rem;
  height: 1rem;
  position: relative;
  border-radius: 50%;
  background: #dddbda;
  border: 4px solid #fff;
  vertical-align: middle;
}
.slds-grid {
  display: flex;
}
.slds-has-dividers_bottom>.slds-progress__item>.slds-progress__item_content {
  border-bottom: 1px solid #dddbda;
}
.slds-progress_vertical .slds-progress__item_content {
  flex: 1;
  align-items: center;
  margin-top: 0.75rem;
  padding-bottom: 0.75rem;
}

