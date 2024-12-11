import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { TERipple } from "tw-elements-react";
import Header from "../Components/Header";
import logo from "../img/logo.png";
import bag1 from "../img/bag1.png";
import bag2 from "../img/bag2.png";
import bag3 from "../img/bag3.png";
import bag4 from "../img/bag4.png";
import bag5 from "../img/bag5.png";
import bag6 from "../img/bag6.png";
import bag7 from "../img/bag7.png";
import bag8 from "../img/bag8.png";
import bag9 from "../img/bag9.png";
import bag10 from "../img/bag10.png";
import bag11 from "../img/bag11.png";
import bag12 from "../img/bag12.png";
import bag13 from "../img/bag13.png";
import brand1 from "../img/brand1.png";
import brand2 from "../img/brand2.png";
import brand3 from "../img/brand3.png";
import brand4 from "../img/brand4.png";
import why1 from "../img/why1.jpg";
import member1 from "../img/member1.jpg";
import member2 from "../img/member2.jpg";
import member3 from "../img/member3.jpg";
import about1 from "../img/about1.jpg";
import about2 from "../img/about2.jpg";
import about3 from "../img/about3.jpg";
import about4 from "../img/about4.jpg";
import about5 from "../img/about5.jpg";
import about6 from "../img/about6.jpg";
import video from "../img/tirth.mp4";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { SlDiamond } from "react-icons/sl";
import { CiMobile3 } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsPlusCircle } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { PiMedal } from "react-icons/pi";
import { IoBasketball } from "react-icons/io5";
import { FaStumbleupon } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [current, setCurrent] = useState({ startPoint: 0, endPoint: 8 });
  const [isMap, setIsMap] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const bags = [
    { id: 1, img: bag1, title: "Eastpak Padded Pak'P", price: 68 },
    { id: 2, img: bag2, title: "Cayler And Sons Milano", price: 38 },
    { id: 3, img: bag3, title: "Mi-Pac Floral Tapestry", price: 16 },
    { id: 4, img: bag4, title: "Spiral Floral Backpack", price: 20 },
    { id: 5, img: bag5, title: "Cayler And Sons Milano", price: 53 },
    { id: 6, img: bag6, title: "Reclaimed Vintage African", price: 32 },
    { id: 7, img: bag7, title: "Herschel Woodlands", price: 78 },
    { id: 8, img: bag8, title: "River Island Backpack", price: 55 },
    { id: 9, img: bag9, title: "Herschel Woodlands", price: 15 },
    { id: 10, img: bag10, title: "River Island Black Satchel", price: 38 },
    { id: 11, img: bag11, title: "Polo With Zip Neck and", price: 53 },
    { id: 12, img: bag12, title: "Sandqvist Jimmy Backpack", price: 45 },
    { id: 13, img: bag13, title: "Reclaimed Vintage African", price: 79 },
  ];

  const handlenext = () => {
    if (current.endPoint < bags.length) {
      setCurrent({
        startPoint: current.startPoint + 1,
        endPoint: current.endPoint + 1,
      });
    } else {
      if (current.endPoint == bags.length) {
        setCurrent({
          startPoint: 0,
          endPoint: 8,
        });
      }
    }
  };

  const handleprev = () => {
    if (current.startPoint > 0) {
      setCurrent({
        startPoint: current.startPoint - 1,
        endPoint: current.endPoint - 1,
      });
    } else {
      setCurrent({
        startPoint: 0,
        endPoint: 8,
      });
    }
    // console.log(current.startPoint);
    //   console.log(current.endPoint);
  };
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* banner-sectionn */}
      <div>
        <div className="bg-img bg-center bg-no-repeat h-screen bg-cover	">
          <div>
            <Header />
          </div>
          <div
            style={{ height: "80vh" }}
            className=" flex flex-col items-center justify-center"
          >
            <h1
              data-aos="fade-down"
              className="overflow-y-hidden ss:text-[40px] mm:text-[45px] sm:text-[45px] rt:text-[50px] md:text-[55px] lg:text-[55px] xl:text-[55px] text-center text-6xl text-white mb-4"
            >
              THE STYLE FOR TODAY
            </h1>
            <p
              data-aos="fade-down"
              className="mb-6  text-white text-center font-semi-bold"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing. Vel
              pellentesque consequat.
            </p>
            <button
              data-aos="fade-up"
              className="  bg-primary hover:bg-gray700 w-40 transition-all	duration-300 text-white font-bold py-2 px-4 rounded-3xl"
            >
              CHECK IT
            </button>
          </div>
        </div>
      </div>
      {/* product-section */}
      <div className=" container">
        <div className="text-center ss:text-[40px] mm:text-5xl sm:text-5xl rt:text-5xl md:text-5xl lg:text-5xl xl:text-5xl	pt-20 pb-14">
          <h1>WE MAKE YOU AWESOME</h1>
          {/* <div className="flex ">
            <button onClick={handleprev}>
              <FaArrowLeft />
            </button>
            <button onClick={handlenext}>
              <FaArrowRight />
            </button>
          </div> */}
        </div>
        <div data-aos="fade-right">
          <div className="overflow-x-hidden w-screen flex justify-center">
            <div className="grid base:grid-cols-1 ss:grid-cols-1 mm:grid-cols-1 sm:grid-cols-1 rt:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:gap-4 rt:gap-4 md:gap-4  lg:gap-4 xl:gap-8">
              {bags.slice(current.startPoint, current.endPoint).map((e) => {
                return (
                  <>
                    <div className="shadow-xl relative group">
                      <img
                        className="relative  ss:w-[260px] mm:w-[270px] sm:w-[300px] rt:w-[230px] md:w-[230px] lg:w-[230px] xl:w-[230px] transition-all duration-300 group-hover:opacity-50"
                        src={e.img}
                        alt=""
                      />
                      <div className="flex gap-2 justify-center ss:top-[140px] ss:left-[80px] mm:top-[140px] mm:left-[90px] sm:top-[150px] sm:left-[100px] rt:top-[120px] rt:left-[70px] md:top-[120px] md:left-[70px] lg:top-[120px] lg:left-[70px] xl:top-[120px] xl:left-[70px] absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                          <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                            <PiMagnifyingGlassBold />
                          </div>
                        </div>
                        <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                          <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                            <FaPlus />
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-5">
                        <h1>{e.title}</h1>
                        <h4>${e.price}.00</h4>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag1}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Eastpak Padded Pak'R</h1>
                <h4>$68.00</h4>
              </div>
            </div>
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag2}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Cayler And Sons Milano</h1>
                <h4>$38.00</h4>
              </div>
            </div>
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag3}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Mi-Pac Floral Tapestry</h1>
                <h4>$16.00</h4>
              </div>
            </div>
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag4}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Mi-Pac Floral Tapestry</h1>
                <h4>$16.00</h4>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-8">
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag5}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Cayler And Sons Milano</h1>
                <h4>$53.00</h4>
              </div>
            </div>
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag6}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Reclaimed Vintage African</h1>
                <h4>$32.00</h4>
              </div>
            </div>
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag7}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>Herschel Woodlands</h1>
                <h4>$78.00</h4>
              </div>
            </div>
            <div className="shadow-xl relative group">
              <img
                className="relative transition-all duration-300 group-hover:opacity-50"
                src={bag8}
                alt=""
              />
              <div className="flex gap-2 justify-center top-40 left-24 absolute z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="border-black border-2 hover:bg-primary hover:border-none   rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-2">
                    <PiMagnifyingGlassBold />
                  </div>
                </div>
                <div className="border-black border-2 hover:bg-primary hover:border-none rounded-full w-12 h-12">
                  <div className="text-2xl text-black hover:text-white flex justify-center content-center pt-3">
                    <FaPlus />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>River Island Backpack</h1>
                <h4>$55.00</h4>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* brand-section */}
      <div className="pt-20 pb-14">
        <div className="flex justify-center">
          <div className="grid ss:grid-cols-1 mm:grid-cols-1 sm:grid-cols-1 rt:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 rt:gap-8  md:gap-16 lg:gap-8 xl:gap-16">
            <div
              data-aos="fade-right"
              className="overflow-x-hidden ss:pb-5 mm:pb-5 sm:pb-5"
            >
              <img src={brand1} alt="" />
            </div>
            <div
              data-aos="fade-right"
              className="overflow-x-hidden ss:pb-5 mm:pb-5 sm:pb-5"
            >
              <img src={brand2} alt="" />
            </div>
            <div
              data-aos="fade-left"
              className="overflow-x-hidden grayscale ss:pb-5 mm:pb-5 sm:pb-5 hover:grayscale-0 transition-all duration-300"
            >
              <img src={brand3} alt="" />
            </div>
            <div
              data-aos="fade-left"
              className="overflow-x-hidden grayscale ss:pb-5 mm:pb-5 sm:pb-5 hover:grayscale-0 transition-all	duration-300"
            >
              <img src={brand4} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* people-section */}
      <div className="bg-[#eeeced] ">
        <h1 className="ss:text-[40px] mm:text-[40px] sm:text-[45px] md:text-[45px] lg:text-[45px] xl:text-[45px] text-center pt-20 pb-14">
          WHY PEOPLE CHOOSE TRIABLO
        </h1>
        <div className="flex justify-center ">
          <div className="grid justify-center mm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 lg:gap-4 xl:gap-16">
            <div data-aos="fade-right" className="overflow-x-hidden px-0">
              <div className=" pt-10 pb-10 flex">
                <div className="ss:ps-[30px] mm:ps-[40px] sm:ps-[40px]">
                  <h4 className="ss:text-center mm:text-center sm:text-center text-2xl md:text-end lg:text-end	xl:text-end pb-4">
                    PREORDER <br />
                    SYSTEM
                  </h4>
                  <h5 className="ss:text-center mm:text-center sm:text-center md:text-end lg:text-end xl:text-end">
                    Donec fermentum vulputate nisl non
                    <br />
                    sollicitudin.Vivamus sagittis
                    <br />
                    fermentum dolor, porta adipiscing
                    <br />
                    magna.
                  </h5>
                </div>
                <div className="text-6xl ss:hidden mm:hidden sm:hidden md:block lg:block xl:block  md:flex lg:flex xl:flex md:items-center lg:items-center xl:items-center ps-2">
                  <IoPricetagOutline />
                </div>
              </div>
              <div className="pt-10 pb-10 flex">
                <div className="ss:ps-[30px] mm:ps-[40px] sm:ps-[40px]">
                  <h4 className="ss:text-center mm:text-center sm:text-center text-2xl md:text-end lg:text-end	xl:text-end pb-4">
                    RETINA <br />
                    READY
                  </h4>
                  <h5 className="ss:text-center mm:text-center sm:text-center md:text-end lg:text-end xl:text-end">
                    Donec fermentum vulputate nisl non
                    <br />
                    sollicitudin.Vivamus sagittis
                    <br />
                    fermentum dolor, porta adipiscing
                    <br />
                    magna.
                  </h5>
                </div>
                <div className="text-6xl ss:hidden mm:hidden md:block lg:block xl:block sm:hidden md:flex lg:flex xl:flex md:items-center lg:items-center xl:items-center ps-2">
                  <SlDiamond />
                </div>
              </div>
            </div>
            <div className=" px-0 md:pt-[150px] lg:pt-[0px] xl:pt-[0px]">
              <div className="text-center">
                <img src={why1} alt="" />
              </div>
            </div>
            <div data-aos="fade-left" className="overflow-x-hidden px-0">
              <div className="pt-10 pb-10 ss:ps-[30px] mm:ps-[40px] sm:ps-[40px] md:ps-0 flex">
                <div className="text-6xl ss:hidden mm:hidden md:block lg:block xl:block sm:hidden md:flex lg:flex xl:flex md:items-center lg:items-center xl:items-center ps-2 ">
                  <CiMobile3 />
                </div>
                <div>
                  <h4 className="ss:text-center mm:text-center sm:text-center text-2xl md:text-start lg:text-start	xl:text-end pb-4">
                    RESPONSIVE <br />
                    LAYOUT
                  </h4>
                  <h5 className="ss:text-center mm:text-center sm:text-center  md:text-start lg:text-start xl:text-end">
                    Donec fermentum vulputate nisl non
                    <br />
                    sollicitudin.Vivamus sagittis
                    <br />
                    fermentum dolor, porta adipiscing
                    <br />
                    magna.
                  </h5>
                </div>
              </div>
              <div className="pt-10 pb-1 ss:ps-[30px] mm:ps-[40px] sm:ps-[40px] md:ps-0 flex">
                <div className="text-6xl ss:hidden mm:hidden md:block lg:block xl:block sm:hidden md:flex lg:flex xl:flex md:items-center lg:items-center xl:items-center ps-2">
                  <IoLayersOutline />
                </div>
                <div>
                  <h4 className="ss:text-center mm:text-center sm:text-center text-2xl md:text-start lg:text-start	xl:text-end pb-4">
                    MATERIAL <br />
                    DESIGN
                  </h4>
                  <h5 className="ss:text-center mm:text-center sm:text-center md:text-start lg:text-start xl:text-end">
                    Donec fermentum vulputate nisl non
                    <br />
                    sollicitudin.Vivamus sagittis
                    <br />
                    fermentum dolor, porta adipiscing
                    <br />
                    magna.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team-section */}
      <div className="pt-14 pb-20">
        <h1 className="text-center text-[45px] pb-4">OUR TEAM</h1>
        <h5 className="textslate400 text-[15px] text-center pb-14">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          esse, inventore incidunt consequatur magni animi autem veniam neque
          <br />
          laudantium quod, nihil illo unde nemo odio sint, itaque quidem ea
          suscipit.
        </h5>
        <div className="flex justify-center">
          <div className="grid md:gap-4 lg:gap-10  xl:gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              className="overflow-x-hidden relative pb-6 md:w-[230px] lg:w-[300px] xl:w-[300px] group"
            >
              <div className="relative">
                <img src={member1} alt="" className="w-full h-auto " />
                <h3 className="text-[18px] text-center group-hover:hidden">
                  Tyler Tong
                </h3>
                <p className="text-center group-hover:hidden">Manager</p>
              </div>
              <div className="absolute inset-0 flex items-end justify-center gap-7 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <FaFacebookF />
                <FaGoogle />
                <FaTwitter />
                <RiInstagramFill />
              </div>
            </div>

            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              className="relative pb-6 md:w-[230px] lg:w-[300px] xl:w-[300px] group"
            >
              <div className="relative">
                <img src={member2} alt="" className="w-full h-auto" />
                <h3 className="text-[18px] text-center group-hover:hidden">
                  Joseph Abraham
                </h3>
                <p className="text-center group-hover:hidden">Photographer</p>
              </div>
              <div className="absolute inset-0 flex items-end justify-center gap-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaFacebookF />
                <FaGoogle />
                <FaTwitter />
                <RiInstagramFill />
              </div>
            </div>

            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              className="relative pb-6 md:w-[230px] lg:w-[300px] xl:w-[300px] group"
            >
              <div className="relative">
                <img src={member3} alt="" className="w-full h-auto" />
                <h3 className="text-[18px] text-center group-hover:hidden">
                  Aaron Beet
                </h3>
                <p className="text-center group-hover:hidden">Photographer</p>
              </div>
              <div className="absolute inset-0 flex items-end justify-center gap-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaFacebookF />
                <FaGoogle />
                <FaTwitter />
                <RiInstagramFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* checkout-section */}
      <div className="bg-[#eeeced] py-12">
        <div>
          <div className="ss:text-center mm:text-center sm:text-center  md:flex lg:flex xl:flex md:gap-8 lg:gap-60 xl:gap-60 justify-center items-center">
            <h4 className="mm:pb-3 sm:pb-3">
              Excited about what's waiting for you? Check out our new summer
              collection.
            </h4>
            <div>
              <button className="bg-primary hover:bg-gray700 w-40 transition-all	duration-300 text-white py-2 px-4 rounded-3xl">
                CHECK IT OUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* about-section */}
      <div className="bg-[#eeeced] pb-20">
        <h1 className="ss:text-[40px] mm:text-[45px] sm:text-[45px] md:text-[45px] lg:text-[45px] xl:text-[45px] text-center pb-4">
          THINK ABOUT IT
        </h1>
        <h5 className="text-center pb-14 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          <br />
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis <br /> autem vel eum iriure dolor in hendrerit in vulputate
          velit.
        </h5>
        <div className="flex justify-center">
          <div className="grid ss:gap-4 mm:gap-8 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 ss:grid-cols-1 mm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
            <div
              data-aos="fade-left"
              class="overflow-x-hidden relative bg-white ss:w-[290px] mm:w-[340px] sm:w-[400px] md:w-[230px] lg:w-[300px] xl:w-[300px]"
            >
              <div class="relative group">
                <img class="block w-full h-auto" src={about1} alt="Image" />
                <div class="absolute inset-0 bg-primary bottom-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
                  <div class="text-white text-[40px] flex justify-center items-center h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
              <p class="px-6 py-4 text-slate-600">3 September 2014</p>
              <h4 class="text-[18px] px-6 pb-4 hover:text-primary transition-all duration-300">
                John Doe Nabs Lead in Adaptation of 'Paper Towns'
              </h4>
              <p class="px-6 text-[13px] text-slate-600">
                John Doe just added a major role to her quickly growing acting
                resume. As if teens (and, okay, quite a few adults) needed
                another reason to idolize the Brit, she just signed on to play
                the female lead in the film adaptation of The Fault in Our Stars
                author John Green’s YA book, Paper Towns.
              </p>
            </div>
            <div
              data-aos="fade-left"
              class="overflow-x-hidden relative bg-white ss:w-[290px] mm:w-[340px] sm:w-[400px] md:w-[230px] lg:w-[300px] xl:w-[300px]"
            >
              <div class="relative group">
                <img class="block w-full h-auto" src={about2} alt="Image" />
                <div class="absolute inset-0 bg-primary bottom-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
                  <div class="text-white text-[40px] flex justify-center items-center h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
              <p class="px-6 py-4 text-slate-600">4 September 2014</p>
              <h4 class="text-[18px] px-6 pb-4 hover:text-primary transition-all duration-300">
                How to Nail Swedish, French, and American Style All at Once
              </h4>
              <p class="px-6 text-[13px] text-slate-600">
                At this point, French illustrator, photographer, and
                all-around-cool-lady Garance Doré doesn't just run a blog, she
                runs a brand. Her wispy illustrations, once loved by only a
                corner of the Internet, decorate Gap T-shirts, Kate Spade bags.
              </p>
            </div>
            <div
              data-aos="fade-left"
              class="overflow-x-hidden relative bg-white ss:w-[290px] mm:w-[340px] sm:w-[400px] md:w-[230px] lg:w-[300px] xl:w-[300px]"
            >
              <div class="relative group">
                <img class="block w-full h-auto" src={about3} alt="Image" />
                <div class="absolute inset-0 bg-primary bottom-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
                  <div class="text-white text-[40px] flex justify-center items-center h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
              <p class="px-6 py-4 text-slate-600">6 September 2014</p>
              <h4 class="text-[18px] px-6 pb-4 hover:text-primary transition-all duration-300">
                High School's Super-Strict Dress Code
              </h4>
              <p class="px-6 pb-3 text-[13px] text-slate-600">
                Here's a list of clothing that can land you in detention at
                Tottenville High School: spaghetti-strap tank tops, short
                shorts, miniskirts, leggings, skinny jeans, halter tops, and
                even headbands. The Staten Island, New York school is cracking
                down on its dress code in a big way—and that's left students
                outraged.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <div className="grid ss:gap-4 mm:gap-8 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 ss:grid-cols-1 mm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <div
              data-aos="fade-right"
              class="overflow-x-hidden relative bg-white ss:w-[290px] mm:w-[340px] sm:w-[400px] md:w-[230px] lg:w-[300px] xl:w-[300px]"
            >
              <div class="relative group">
                <img class="block w-full h-auto" src={about4} alt="Image" />
                <div class="absolute inset-0 bg-primary bottom-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
                  <div class="text-white text-[40px] flex justify-center items-center h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
              <p class="px-6 py-4 text-slate-600">8 September 2014</p>
              <h4 class="text-[18px] px-6 pb-4 hover:text-primary transition-all duration-300">
                23 SPRING TRENDS FROM THE RUNWAYS
              </h4>
              <p class="px-6 text-[13px] text-slate-600">
                There are plenty of reasons why we are excited for next spring,
                but digesting the trends from the runway of New York Fashion
                Week has us positively giddy. Check out all of the great things
                to look forward to next season. A few of them you might be able
                to try out right now.
              </p>
            </div>
            <div
              data-aos="fade-right"
              class="overflow-x-hidden relative bg-white ss:w-[290px] mm:w-[340px] sm:w-[400px] md:w-[230px] lg:w-[300px] xl:w-[300px]"
            >
              <div class="relative group">
                <img class="block w-full h-auto" src={about5} alt="Image" />
                <div class="absolute inset-0 bg-primary bottom-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
                  <div class="text-white text-[40px] flex justify-center items-center h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
              <p class="px-6 py-4 text-slate-600">11 September 2014</p>
              <h4 class="text-[18px] px-6 pb-4 hover:text-primary transition-all duration-300">
                THE BEST OF LONDON STREET STYLE
              </h4>
              <p class="px-6 text-[13px] text-slate-600">
                The fashion month marathon runs on! Our man on the street, Dan
                Roberts, is capturing all the action at London Fashion Week,
                from Somerset House and beyond. Here are the best street style
                snaps from the first stop across the pond.
              </p>
            </div>
            <div
              data-aos="fade-right"
              class="overflow-x-hidden relative bg-white ss:w-[290px] mm:w-[340px] sm:w-[400px] md:w-[230px] lg:w-[300px] xl:w-[300px]"
            >
              <div class="relative group">
                <img class="block w-full h-auto" src={about6} alt="Image" />
                <div class="absolute inset-0 bg-primary bottom-full h-0 transition-all duration-500 ease-in-out group-hover:bottom-0 group-hover:h-full">
                  <div class="text-white text-[40px] flex justify-center items-center h-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <BsPlusCircle />
                  </div>
                </div>
              </div>
              <p class="px-6 py-4 text-slate-600">1 September 2014</p>
              <h4 class="text-[18px] px-6 pb-4 hover:text-primary transition-all duration-300">
                AllSaints Reinvents the Fashion Show Formula
              </h4>
              <p class="px-6 pb-3 text-[13px] text-slate-600">
                New York Fashion week has come and gone, but one brand was
                conspicuously absent from the fray. In lieu of showing at
                Lincoln Center, as they have the past two seasons, It
                girl-beloved London brand AllSaints elected instead to host a
                digital runway show set against an airport backdrop (a metaphor
                for global expansion and freedom).
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* video-section */}
      <div className="pb-14">
        <video
          className="w-[100%]"
          type="video/mp4"
          controls
          src={video}
        ></video>
      </div>
      {/* 4things-section */}
      <div className="pb-14">
        <div className="flex justify-center">
          <div className="grid mm:grid-cols-2 sm:grid-cols-2 rt:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 lg:gap-28 xl:gap-40">
            <div data-aos="fade-left" className="overflow-x-hidden text-center">
              <div className="text-[70px] hover:cursor-pointer text-slate flex justify-center transition-all duration-300 hover:text-primary">
                <FiSend />
              </div>
              <h3 className="text-[25px] pt-2">24h</h3>
              <p className="text-sm	text-slate pt-2">AVARAGE DELIVERY TIME</p>
            </div>
            <div data-aos="fade-left" className="overflow-x-hidden text-center">
              <div className="text-[70px] hover:cursor-pointer text-slate flex justify-center transition-all duration-300 hover:text-primary">
                <MdOutlineShoppingBag />
              </div>
              <h3 className="text-[25px] pt-2">2443</h3>
              <p className="text-sm	text-slate pt-2">PRODUCTS SOLD</p>
            </div>
            <div
              data-aos="fade-right"
              className="overflow-x-hidden text-center"
            >
              <div className="text-[70px] hover:cursor-pointer text-slate flex justify-center transition-all duration-300 hover:text-primary">
                <HiOutlineHandThumbUp />
              </div>
              <h3 className="text-[25px] pt-2">98%</h3>
              <p className="text-sm	text-slate pt-2">HAPPY CLIENTS</p>
            </div>
            <div
              data-aos="fade-right"
              className="overflow-x-hidden text-center"
            >
              <div className="text-[70px] hover:cursor-pointer text-slate flex justify-center transition-all duration-300 hover:text-primary">
                <PiMedal />
              </div>
              <h3 className="text-[25px] pt-2">20</h3>
              <p className="text-sm	text-slate pt-2">YEARS OF EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
      {/* map-section */}
      <div className="pb-8  bg-[#f1f1f1]">
        <h1 className="text-center py-10 ss:text-[35px] mm:text-[45px] sm:text-[45px] rt:text-[50px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
          CONTACT OR FIND US ON
          <span
            className="hover:cursor-pointer text-primary ps-3 underline relative group "
            onClick={() => {
              setIsMap(!isMap);
            }}
          >
            THE MAP
            <div className="ss:right-[-25px] mm:right-[-90px] sm:right-[-15px] rt:right-[-110px] md:right-[80px] lg:right-[60px] xl:right-[60px] absolute mt-2">
              {isMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1540844097512!2d72.79435409999999!3d21.186037100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d00527738cd%3A0xedc9ef1ac3a4d555!2sCorenet%20Tech%20-%20Leading%20Digital%20Marketing%20%26%20Software%20Development%20Agency!5e0!3m2!1sen!2sin!4v1726739839247!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="ss:w-[300px] ss:h-[300px] mm:w-[350px] mm:h-[300px] sm:w-[350px] sm:h-[300px] rt:w-[500px] rt:h-[300px] md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[400px] xl:w-[600px] xl:h-[400px]"
                ></iframe>
              ) : (
                <></>
              )}
            </div>
          </span>
        </h1>

        <div className="flex justify-center">
          <div className="grid ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div className="overflow-x-hidden flex flex-col	">
              <label className="pb-2">Name</label>
              <input
                className="mb-3 ss:w-[300px] mm:w-[350px] sm:w-[350px] rt:w-[450px] md:w-[350px] lg:w-[450px] xl:w-[450px] h-[40px] bg-[#DDDDDD]"
                type="text"
              />
              <label className="pb-2">E-mail</label>
              <input
                className="mb-3 ss:w-[300px] mm:w-[350px] sm:w-[350px] rt:w-[450px] md:w-[350px] lg:w-[450px] xl:w-[450px] h-[40px] bg-[#DDDDDD]"
                type="email"
              />
              <label className="pb-2">Subject</label>
              <input
                className="mb-3 ss:w-[300px] mm:w-[350px] sm:w-[350px] rt:w-[450px] md:w-[350px] lg:w-[450px] xl:w-[450px] h-[40px] bg-[#DDDDDD]"
                type="text"
              />
            </div>
            <div className="overflow-x-hidden flex flex-col	">
              <label>Message</label>
              <textarea
                className="ss:w-[300px] mm:w-[350px] sm:w-[350px] rt:w-[450px] md:w-[350px] lg:w-[450px] xl:w-[450px] h-[217px] bg-[#DDDDDD]"
                type="text"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex  pt-7 justify-center gap-10 text-2xl">
          <div className="hover:text-primary transition-all duration-300">
            <RiInstagramFill />
          </div>
          <div className="hover:text-primary transition-all duration-300">
            <FaTwitter />
          </div>
          <div className="hover:text-primary transition-all duration-300">
            <FaFacebookF />
          </div>
          <div className="hover:text-primary transition-all duration-300">
            <IoBasketball />
          </div>
          <div className="hover:text-primary transition-all duration-300">
            <FaStumbleupon />
          </div>
        </div>
      </div>
      {/* footer-section */}
      <div className="bg-gray700">
        <div className="flex  justify-center">
          <div
            className="grid  xl:gap-16 ss:grid-cols-1
          sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-5"
          >
            <div className="md:ps-5 ss:ps-4 ss:pb-5 mm:pb-5 sm:pb-5">
              <h3 className="text-white ">
                e-mail:
                <span className="text-[#B2B2B2]">clothes_shop@triablo.com</span>
              </h3>
              <h3 className="text-white">
                address:
                <span className="text-[#B2B2B2]">
                  New York, Saint Nicholas Avenue 13/1
                </span>
              </h3>
              <h3 className="text-white">
                fax:
                <span className="text-[#B2B2B2]"> +91 0123-4567-8900 </span>
              </h3>
            </div>
            <div className="flex justify-center ss:pb-5 mm:pb-5 sm:pb-5">
              <img src={logo} alt="" />
            </div>
            <div className="flex items-center ss:ps-4 md:pe-2">
              <h3 className="text-white ">
                © Triablo 2014. All Rights Reserved
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* bottomTotop-Button */}
      {showButton && (
        // <TERipple rippleColor="light">
        <button
          type="button"
          onClick={backToTop}
          className={` ${
            showButton
              ? `inline-block base:hidden ss:hidden mm:hidden sm:hidden rt:block md:block :block xl:block rt:fixed md:fixed lg:fixed lgxl:fixed rt:bottom-[100px] rt:left-[550px] md:bottom-[110px] md:left-[700px] lg:bottom-[100px] lg:left-[950px] xl:bottom-[80px] xl:left-[1360px] p-3 bg-primary text-white font-medium text-xs  rounded-full shadow-md hover:bg-white hover:text-primary hover:border-2 transition duration-150 ease-in-out`
              : `hidden`
          }`}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
        // </TERipple>
      )}

      {/* <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-e313c03a1f22ae7746a5d52205239d5a/"
        frameborder="0"
        className="w-[100%] h-[500px]"
      ></iframe> */}
    </div>
  );
};

export default Home;
