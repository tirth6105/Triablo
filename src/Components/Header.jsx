import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure ();
  const [isopen, setIsopen] = useState(false);
  const [placement, setPlacement] = React.useState("right");

  return (
    <div>
      <div className="container">
        <div className="ss:hidden mm:hidden sm:hidden rt:block md:block lg:block xl:block pt-10 rt:flex md:flex lg:flex xl:flex justify-evenly text-white items-center">
          <div data-aos="fade-down" data-aos-duration="800">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="transition-all hover:text-primary"
          >
            <Link to={"/"}>HOME</Link>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="transition-all hover:text-primary"
          >
            <Link to={"/cart"}>CART</Link>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1400"
            className="transition-all hover:text-primary"
          >
            <Link to={"/cart"}>ABOUT US</Link>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1600"
            className="transition-all hover:text-primary"
          >
            <Link to={"/signup"}>SIGNUP</Link>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1800"
            className="transition-all hover:text-primary"
          >
            <Link to={"/login"}>LOGIN</Link>
          </div>
        </div>
      </div>

      {/* <img src={logo} onClick={() => setOpen(!open)} /> */}
      <div
        className=" ss:block mm:block sm:block rt:hidden md:hidden lg:hidden xl:hidden "
        // className={` ${
        //   isopen ? "w-[50px]" : "w-0"
        // } bg-primary h-screen p-5 pt-8 relative duration-300`}
      >
        <div className="flex justify-between">
          <div className="ps-5 pt-5">
            <img src={logo} alt="" />
          </div>
          <div>
            <button
              className="pe-5 pt-5 text-[50px] text-white"
              onClick={() => setIsopen(!isopen)}
            >
              <IoMenuOutline />
            </button>
          </div>
        </div>
        {isopen ? (
          <div
            data-aos="fade-left"
            className="fixed text-end pe-5 ss:w-[320px] mm:w-[375px] sm:w-[425px] h-[100px]"
          >
            <div className="transition-all text-[20px] text-white hover:text-primary">
              <Link to={"/"}>HOME</Link>
            </div>
            <div className="transition-all text-[20px] text-white hover:text-primary">
              <Link to={"/cart"}>CART</Link>
            </div>
            <div className="transition-all text-[20px] text-white hover:text-primary">
              <Link to={"/cart"}>ABOUT US</Link>
            </div>
            <div className="transition-all text-[20px] text-white hover:text-primary">
              <Link to={"/signup"}>SIGNUP</Link>
            </div>
            <div className="transition-all text-[20px] text-white hover:text-primary">
              <Link to={"/login"}>LOGIN</Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
