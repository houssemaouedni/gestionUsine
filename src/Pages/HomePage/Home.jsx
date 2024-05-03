import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setStatusMenu as setMenu } from '../../Configs/action';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const Home = ({ children }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const statusMenu = useSelector(state => state.statusMenu);



  useEffect(() => {


    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    if (windowWidth < 800) {
      dispatch(setMenu(false));
    } else {
      dispatch(setMenu(true));
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth])

  return (
    <>
      <div className='main-container min-h-screen text-black dark:text-white-dark navbar-sticky'>
        <SideBar />
        <div className={`main-content bg-gray-100 flex min-h-screen flex-col ${statusMenu ? 'md:ml-260 xs:z-10' : ''} `}>
          <Header />
          {children}
          {/* <!-- start footer section --> */}
          <div className="mt-auto text-sm p-6 pt-0 text-left dark:text-white-dark">
            © <span id="footer-year">2024</span>. DigitaleTech All rights reserved.
          </div>
          {/* <!-- end footer section --> */}
        </div>
      </div>

    </>
  )
}

export default Home