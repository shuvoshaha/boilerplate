import React, { Dispatch, useRef } from "react";
import ProfileIcon from "@images/Icon-Update.svg";
import Arrow from "@images/Icon-Arrow-Right.svg";
import PolicyNote from "@images/Icon-PolicyNote.svg";
import Component from '@images/Component 1153 – 3.svg';
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

// props types
type props = {
  isSidebar?: boolean | undefined,
  setIsSidebar?: Dispatch<boolean> | any

}


const Sidebar: React.FC<props> = ({ isSidebar, setIsSidebar }: props) => {

  // sidbar drawer ref
  const ref = useRef<HTMLDivElement>(null)

  // on click outside handle
  const onClickOutside = (e: React.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsSidebar(false)
    }
  }


  return (
    <div className="side__bar" onClick={onClickOutside}>

      <div className="profile" style={{ width: isSidebar ? `${325}px`: "0"  }} ref={ref}>

        <div className="img-div">
          <div className="profile-image">
            <img src={ProfileIcon} alt="" className="profile-icon" />
            <div className="profile-image-edit-icon">
              {/* <img src={ProfileIcon} alt="" className='profile-icon'/>    */}
            </div>
          </div>
        </div>

        <div className="name-div">
          <div>
            <h1 className="profile-name">Jiniya Shikder</h1>
          </div>
          <div>
            <h1 className="designation">Financial Associate</h1>
          </div>
          <div className="profile-button">
            <h1 className="profile-button-text">My Profile</h1>
            <img src={Arrow} alt="" className="profile-button-icon" />
          </div>
        </div>

        {/* horizontal line */}
        <div className="horizontal-line-div">
          <div className="horizontal-line"></div>
        </div>

        {/* sidebar options */}
        <div className="sidebar-options">
          <div>
            <h1 className="options-header">Customer, Policy & KPIs</h1>
          </div>
          <div>

            <div className="side__link">
              <ul>
                <li >
                  <NavLink className="option-div"
                    onClick={() => setIsSidebar(false)}
                    to="/policy"
                  >
                    <img src={PolicyNote} alt="" />
                    <h1 className="option">Policy 360</h1>
                  </NavLink>
                </li>

                <li >
                  <NavLink
                    onClick={() => setIsSidebar(false)}
                    to="/agent"
                    className="option-div"
                  >
                    <img src={Component} alt="" />
                    <h1 className="option" >Agent 360</h1>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
