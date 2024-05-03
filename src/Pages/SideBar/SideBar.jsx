import React, { useEffect, useState } from 'react';
import { SlArrowRight, SlArrowDown, SlArrowLeft } from "react-icons/sl";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import menu from '../../Components/Menu/MenuAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusMenu as setActive, setUserName } from '../../Configs/action';
import { Link } from 'react-router-dom';
import { logo } from '../../Utils/Config';
function SideBar(props) {
  const activeMenu = useSelector(state => state.statusMenu);
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(activeMenu);
  const setActiveMenu = (e) => {
    e.preventDefault();
    dispatch(setActive(false));
  }
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };



  return (
    <>
      <div className={`${activeMenu ? 'active' : ''} sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] `}>
        <div className="h-full bg-white dark:bg-[#0e1726]">
          <div className="px-4 py-3">
            <div className="main-logo flex items-center justify-between shrink-0 ">
              <img className="ml-[5px] w-min-full flex-none" src={logo} alt="image" />
              {/* <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">VRISTO</span> */}
              <button onClick={(e) => setActiveMenu(e)}><AiOutlineDoubleLeft size={30} />
              
              </button>
            </div>
          </div>
          <ul className="perfect-scrollbar relative h-[calc(100vh-80px)] space-y-0.5 overflow-y-auto overflow-x-hidden p-4 py-0 font-semibold text-gray-500">
            {menu.map((menu, index) => (
              <li className="menu nav-item" key={index}>
                {
                  menu.subMenu ? <>
                    <div className={`nav-link group  mb-4  ${activeDropdown === menu.name ? 'mb-2 bg-gray-300 ' : ''} rounded-md p-1`}>
                      <button onClick={(e) => toggleDropdown(menu.name)} className="w-full flex items-center justify-center">
                        <div className="flex  items-center space-x-1 w-full ">
                          <div className='mr-2'>{menu.icon}</div>
                          <span className={`text-sm text-justify ${activeDropdown === menu.name ? 'text-black' : 'text-gray-800 '} uppercase`}>{menu.name}</span>
                        </div>
                        {
                          activeDropdown === menu.name ? <SlArrowDown /> : <SlArrowRight />
                        }
                      </button>

                    </div>
                    <ul className={`sub-menu m-2 text-gray-500 ${activeDropdown === menu.name ? '' : 'hidden'}`}>
                      {menu.subMenu.map((submenu, index) => (
                        <li  key={index} className="mb-2 px-1 py-1 hover:bg-slate-500 rounded-md hover:text-white w-full cursor-pointer ">
                          <a href={submenu.link} className="active  ">{submenu.name}</a>
                        </li>
                      ))}</ul>
                  </> :
                    <>
                      <a href={menu.link} className="flex  items-center space-x-1 w-full mt-2 mb-3 underline">
                        <div className='mr-2 ml-1'>{menu.icon}</div>
                        <span className=" text-sm text-justify text-gray-800 uppercase">{menu.name}</span>
                      </a>
                    </>


                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
