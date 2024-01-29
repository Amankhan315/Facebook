import React from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { CiFlag1 } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiShop } from "react-icons/ci";
import { CgGames } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
function Nav() {
  return (
    <>
      <nav class="bg-white p-1 h-[auto]   drop-shadow">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3 space-x-2">
            <FaFacebook
              style={{ color: "rgb(24, 119, 242)", fontSize: "50px" }}
            />

            <div class="h-[40px] w-[auto] flex  justify-center   items-center rounded-full bg- bg-gray-200">
              <FaSearch
                style={{ color: "gray", fontSize: "28px", marginLeft: "6%" }}
              />

              <input
                class="rounded-full h-10 w-[250px] hidden sm:hidden md:hidden lg:inline-block xl:inline-block xxl:inline-block  bg- bg-gray-200 p-4 text-xs text-gray-400 text-[16px] outline-none"
                type="text"
                placeholder="Search Facebook"
              />
            </div>
            <TiThMenu
              class="sm:flex md:flex lg:hidden xl:hidden xxl:hidden "
              style={{
                color: "gray",
                fontSize: "28px",
                marginLeft: "6%",
              }}
            />
          </div>

          <div class="relative flex justify-between w-1/3 hidden sm:hidden md:flex lg:flex  xxl:flex items-center">
            <div class="relative group">
              <div class="group-hover:bg-gray-200 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                <GoHomeFill
                  style={{
                    color: "rgb(24, 119, 242)",
                    fontSize: "28px",
                  }}
                />
              </div>
              <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
            </div>
            <div class="relative group">
              <div class="group-hover:bg-gray-200 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                <HiOutlineUsers
                  style={{
                    fontSize: "28px",
                  }}
                />
              </div>
              <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out"></div>
            </div>
            <div class="relative group">
              <div class="group-hover:bg-gray-200 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                <CiFlag1
                  style={{
                    fontSize: "28px",
                  }}
                />
              </div>
              <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
            </div>
            <div class="relative group">
              <div class="group-hover:bg-gray-200 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                <CiShop
                  style={{
                    fontSize: "28px",
                  }}
                />
              </div>
              <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
            </div>
            <div class="relative group">
              <div class="group-hover:bg-gray-200 p-1 group-hover:rounded-lg transition-all ease-in-out duration-300">
                <CgGames
                  style={{
                    fontSize: "25px",
                  }}
                />
              </div>
              <div class="absolute group-hover:border-b-2 group-hover:cursor-pointer mt-2 border-blue-500 w-full transition-all duration-100 ease-in-out "></div>
            </div>
          </div>

          <div class="flex justify-evenly w-50   gap-1">
            <div class="h-[45px] w-[45px] sm: h-[29px] w-[25px] md:h-[30px] w-[30px] lg:h-[35px] w-[35px] xl:h-[40px] w-[40px]    flex justify-center items-center  rounded-full bg-gray-300">
              <CgMenuGridR
                style={{
                  fontSize: "25px",
                }}
              />
             
            </div>

            
            <div class="h-[45px] w-[45px] sm: h-[29px] w-[25px] md:h-[30px] w-[30px] lg:h-[35px] w-[35px] xl:h-[40px] w-[40px]  flex justify-center items-center  rounded-full bg-gray-300">
              <FaFacebookMessenger
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
            <div class="h-[45px] w-[45px] sm: h-[29px] w-[25px] md:h-[30px] w-[30px] lg:h-[35px] w-[35px] xl:h-[40px] w-[40px]  flex justify-center items-center  rounded-full bg-gray-300">
              <FaBell
                style={{
                  fontSize: "25px",
                }}
              />
            </div>
            <div class="h-[45px] w-[45px] sm: h-[29px] w-[25px] md:h-[30px] w-[30px] lg:h-[35px] w-[35px] xl:h-[40px] w-[40px]  flex justify-center items-center  rounded-full bg-gray-300">
              <img
                class="h-[100%] w-[100%]  rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
