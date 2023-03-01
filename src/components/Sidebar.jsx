import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5  pt-3 pb-2.5 rounded-lg text-white mr-2 text-md  flex justify-end mr-0 ml-0';
  const normalLink = 'flex items-center gap-5  pt-3 pb-2.5 rounded-lg text-md mr-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray  flex justify-end hover: mr-2 ml-0 dark:hover:mr-4 ml-0';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-scroll">
      {activeMenu && (
        <>
          <div className="flex justify-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-yellow-800">
              <SiShopware /> <span>Visa-SN</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden mr-0 ml-0"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="">
            {links.map((item) => (
              <div key={item.title} className=''>
                <p className="dark:text-yellow-400 m-1 mt-4 uppercase flex justify-end mr-5 ">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="capitalize ">{link.name}</span>
                    {link.icon}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
