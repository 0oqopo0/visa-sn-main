import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData,links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="absolute bg-[#bebbb3]  dark:bg-[#434d42] p-4 rounded-lg w-70">
      <div className="p-1 flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Userrr Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(207, 200, 35)"
          bgHoverColor="light-gray"
          size="3xl"
          borderRadius="50%"
        
        />
      </div>
       <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-5">
        <img
          className="rounded-full h-22 w-20"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Michael Roberts </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div> 
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5  border-b-1  border-orange-200 p-4 hover:bg-green-200 hover:rounded-md cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
