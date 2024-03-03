import React, { ReactElement } from "react";
import { CiHome } from "react-icons/ci";
import { GoGlobe } from "react-icons/go";
import { CiServer } from "react-icons/ci";
import { FiUploadCloud } from "react-icons/fi";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { IoCubeOutline } from "react-icons/io5";
import { IoServerOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BiCodeBlock } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { LuBookMinus } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdCalculate } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";
import { RiWallet3Line } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";

const iconMap: { [key: string]: ReactElement } = {
  Home: <CiHome />,
  CDN: <GoGlobe />,
  Cloud_Server: <CiServer />,
  Objective_Storage: <FiUploadCloud />,
  Video_Platform: <PiYoutubeLogoThin />,
  Cloud_Container: <IoCubeOutline />,
  Managed_Database: <IoServerOutline />,
  Profile: <FaRegUser />,
  Bell: <GoBell />,
  Code: <BiCodeBlock />,
  Search: <IoSearchOutline />,
  More: <IoIosMore />,
  Menu: <RxHamburgerMenu />,
  Close: <MdClose />,
  ArrowLeft: <RiArrowDropLeftLine />,
  Setting: <IoMdSettings />,
  Book: <LuBookMinus />,
  HeadPhone: <TfiHeadphoneAlt />,
  Calculator: <MdCalculate />,
  Globe: <IoGlobeSharp />,
  Wallet: <RiWallet3Line />,
  Theme: <CgDarkMode />,
  // Add more icons as needed
};
interface Props {
  iconName: string;
}

export default function IconComponent({ iconName }: Props) {
  const selectedIcon = iconMap[iconName];

  if (!selectedIcon) {
    console.error(`Icon '${iconName}' not found.`);
    return null;
  }
  return <div>{selectedIcon}</div>;
}
