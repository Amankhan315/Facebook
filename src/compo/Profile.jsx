import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "./Data";
import Main from "./Main";
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
import { FaVideo } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { BsFlagFill } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { IoHomeSharp } from "react-icons/io5";
import { HiEmojiHappy } from "react-icons/hi";
import { FaCamera } from "react-icons/fa6";
function Profile() {
  const { id } = useParams();
  const [data, setData] = useState(Data);
  console.log(id);

  return (
    <>
      <div class="h-[auto] w-[100%] bg-rgb(240,242,245) ">
        <main>
          {/* <div id="device-bar-1">
            <button></button>
            <button></button>
            <button></button>
          </div> */}
          <nav class="bg-white p-1 h-[auto]   drop-shadow">
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3 space-x-2 ">
                <FaFacebook
                  style={{ color: "rgb(24, 119, 242)", fontSize: "50px" }}
                />

                <div class="h-[40px] w-[auto] flex  justify-center   items-center rounded-full bg- bg-gray-200">
                  <FaSearch
                    style={{
                      color: "gray",
                      fontSize: "28px",
                      marginLeft: "6%",
                    }}
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

              <div class="relative flex justify-between w-1/3 hidden sm:hidden md:flex lg:flex  xxl:flex items-center ">
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

              <div class="flex justify-evenly w-50   gap-1 ">
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
          <div id="profile-upper">
            <div id="profile-banner-image">
              <img
                src={
                  data[id]
                    ? data[id].backgrundimg
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-E9VOQt8EE8HjWQK2bdytXZKj40t6PfqosQ&usqp=CAU"
                }
                alt="Banner image"
              />
            </div>
            <div id="profile-d">
              <div id="profile-pic">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={
                    data[id]
                      ? data[id].profileimg
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                  }
                />
              </div>
              <div id="u-name">{data[id] ? data[id].name : "Ali Khan"}</div>
              <div
                class="h-[auto] w-[auto] flex flex-col gap-5 "
                id="m-btns"
              >
                <div class="td flex">
                  <div class="m-btn flex gap-2">
                    <HiEmojiHappy
                      style={{
                        color: "white",
                        fontSize: "20px",
                      }}
                    />
                    <span
                      style={{
                        color: "white",
                      }}
                    >
                      Create with avatar
                    </span>
                  </div>
                </div>
                <div class="td">
                  <div class="m-btn flex gap-2">
                    <FaCamera
                      style={{
                        color: "white",
                        fontSize: "20px",
                      }}
                    />
                    <span
                      style={{
                        color: "white",
                      }}
                    >
                      Edit cover photo
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="black-grd"></div>
          </div>
          <div id="main-content">
            <div class="tb">
              <div class="h-[auto] w-[100%] ">
                <div class="h-[auto] w-[100%] bg-white ">
                  <div class="cnt-label">
                    <span
                      style={{
                        fontSize: "20px",
                        color: "black",
                        fontWeight: "600",
                        marginLeft:"3%",
                      }}
                    >
                      Intro
                    </span>
                  </div>
                  <div class="h-[auto] w-[auto] flex flex-col justify-center gap-5 pr-5 ">
                    <button class="h-[5vh] w-[70%] ml-2 rounded bg-[rgb(228,230,235)] ">
                      Add Bio
                    </button>
                    <div class="h-[auto] w-[289px] ml-2  flex gap-5 ">
                      <MdOutlineWork
                        style={{
                          color: "rgb(140,147,157)",
                          fontSize: "25px",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        {" "}
                        Works at Punjab Group Of Colleges
                      </span>
                    </div>
                    <div class="h-[auto] w-[auto] ml-2 flex gap-5 ">
                      <PiStudentDuotone
                        style={{
                          color: "rgb(140,147,157)",
                          fontSize: "25px",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        {" "}
                        Studied at Punjab Group Of Colleges
                      </span>
                    </div>
                    <div class="h-[auto] w-[auto] ml-2 flex gap-3 ">
                      <PiStudentDuotone
                        style={{
                          color: "rgb(140,147,157)",
                          fontSize: "25px",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        {" "}
                        Went to Model High School
                      </span>
                    </div>
                    <div class="h-[auto] w-[auto] ml-2 flex gap-3 ">
                      <IoHomeSharp
                        style={{
                          color: "rgb(140,147,157)",
                          fontSize: "25px",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        {" "}
                        Lives in Lahore, Pakistan
                      </span>
                    </div>
                    <div class="h-[auto] w-[auto] flex flex-col  mb-3 justify-center items-center gap-4 ">
                      <button class="h-[5vh] w-[70%] rounded bg-[rgb(228,230,235)] ">
                        Edit details
                      </button>
                      <button class="h-[5vh] w-[70%] rounded bg-[rgb(228,230,235)] ">
                        Add Hobbies
                      </button>
                      <button class="h-[5vh] w-[70%] rounded bg-[rgb(228,230,235)] ">
                        Add Featured
                      </button>
                    </div>
                  </div>
                </div>
                <div class="l-cnt l-mrg">
                  <div class="cnt-label ">
                    <i class="l-i" id="l-i-p"></i>
                    <span>Photos</span>
                  </div>
                  <div id="photos">
                    <div class="tb">
                      <div class="tr">
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                      </div>
                      <div class="tr">
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                      </div>
                      <div class="tr">
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                        <div class="td">
                        <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="l-cnt l-mrg ">
                  <div class="cnt-label flex flex-col">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Friends
                    </span>
                    <span>151 Friends</span>
                  </div>
                  <div>
                    <div class="h-[auto] w-[auto] flex flex-wrap  gap-5">
                      {data.map((item, id) => {
                        // console.log(item,"item");
                        return (
                          <Link to={item.frd1url}>
                            <div class="h-[100px] w-[100px] rounded-[10px] bg-[red]">
                              <img
                                className="h-[100%] rounded-[10px]"
                                src={data[id].frd1}
                                alt=""
                              />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div id="t-box">
                  <a href="#">Privacy</a> <a href="#">Terms</a>{" "}
                  <a href="#">Advertising</a> <a href="#">Ad Choices</a>{" "}
                  <a href="#">Cookies</a>{" "}
                  <span id="t-more">
                    More<i class="material-icons">arrow_drop_down</i>
                  </span>
                  <div id="cpy-nt">
                    Facebook &copy; <span id="curr-year"></span>
                  </div>
                </div>
              </div>
              <div class="td" id="m-col">
                <div class="m-mrg" id="p-tabs">
                  <div class="tb">
                    <div class="td">
                      <div class="tb" id="p-tabs-m">
                        <div class="td active">
                          <i class="material-icons"></i>
                          <span>Post</span>
                        </div>
                        <div class="td">
                          <i class="material-icons"></i>
                          <span>About</span>
                        </div>
                        <div class="td">
                          <i class="material-icons"></i>
                          <span>Friends</span>
                        </div>
                        <div class="td">
                          <i class="material-icons"></i>
                          <span>Photos</span>
                        </div>
                        <div class="td">
                          <i class="material-icons"></i>
                          <span>Videos</span>
                        </div>
                        <div class="td">
                          <i class="material-icons"></i>
                          <span>Reels</span>
                        </div>
                        <div class="td">
                          <i class="material-icons"></i>
                          <span>More</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-mrg" id="composer">
                  <div class="flex flex-col gap-5" id="c-c-main">
                    <div class="tb ml-2 ">
                      <div class="td" id="p-c-i">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                          src={
                            data[id]
                              ? data[id].spic
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                          }
                        />
                      </div>
                      <div class="td" id="c-inp">
                        <input type="text" placeholder="What's on your mind?" />
                      </div>
                    </div>

                    <div id="c-tabs-cvr">
                      <div class="tb ml-2" id="c-tabs">
                        {/* <div class="td active "> */}
                        <div class="h-[auto] w-[150px] flex gap-2 items-center  ">
                          <FaVideo
                            style={{
                              color: "rgb(240,40,73)",
                              fontSize: "20px",
                            }}
                          />
                          <span>Live Video</span>
                        </div>

                        {/* </div> */}
                        <div class="td">
                          <div class="h-[auto] w-[150px] flex gap-2 items-center  ">
                            <GrGallery
                              style={{
                                color: "rgb(69,189,98)",
                                fontSize: "20px",
                              }}
                            />
                            <span>Photo/Video</span>
                          </div>
                        </div>
                        <div class="td">
                          <div class="h-[auto] w-[150px] flex gap-2 items-center  ">
                            <BsFlagFill
                              style={{
                                color: "rgb(0,165,244)",
                                fontSize: "20px",
                              }}
                            />
                            <span>Life even</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-mrg" id="composer">
                  <div class="h-[auto] w-[100%] ">
                    <div class="h-[10vh] w-[95%] flex justify-between items-center ml-2 ">
                      <span
                        style={{
                          fontSize: "18px",
                          fontFamily: "sans-serif",
                          fontWeight: "600",

                        }}
                      >
                        Posts
                      </span>

                      <div class="h-[auto] w-[50%] flex justify-center items-center gap-5 ">
                        <LuSettings2 />
                        <button
                          style={{
                            width: "20%",
                            height: "7vh",
                          }}
                        >
                          Filters
                        </button>
                        <IoSettingsSharp />
                        <button
                          style={{
                            width: "20%",
                            height: "7vh",
                          }}
                        >
                          Manage
                        </button>
                      </div>
                    </div>

                    <div class="h-[auto] w-[100%] ">
                      <div class="h-[auto] w-[100%] flex  justify-between ">
                        <div class="h-[auto] w-[250px] flex justify-center items-center gap-5 items-center  ">
                          <FaBars />
                          <span>List View</span>
                        </div>

                        <div class="td">
                          <div class="h-[auto] w-[250px] flex justify-center items-center gap-5 items-center  ">
                            <span>Grid View</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div> */}
                <div class="h-[auto] w-[72%] ">
                  <div class="h-[auto] w-[533px] bg-white ">
                    <a href="#" class="td p-p-pic">
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                    </a>
                    <div class="td p-r-hdr">
                      <div class="p-u-info">
                        <a href="#">Neol khan</a> shared a memory with{" "}
                        <a href="#">Himalaya Singh</a>
                      </div>
                      <div class="p-dt">
                        <span>January 28, 2015</span>
                      </div>
                    </div>
                  </div>

                  <div class="h[100%] w-[100%] ">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      alt=""
                    />
                  </div>

                  <div class="h-[auto] ">
                    {/* <div class="p-acts">
                      <div class="p-act like">
                      <AiOutlineLike />
                        <span>25</span>
                      </div>
                      <div class="p-act comment">
                      <FaRegComment />
                        <span>1</span>
                      </div>
                      <div class="p-act share">
                      <TbShare3 />
                      </div>
                    </div> */}
                  </div>
                </div>

                <div class="h-[auto] w-[72%]   ">
                  <div class="h-[auto] w-[533px] bg-white ">
                    <a href="#" class="td p-p-pic">
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                    </a>
                    <div class="td p-r-hdr">
                      <div class="p-u-info">
                        <a href="#">Neol khan</a> shared a memory with{" "}
                        <a href="#">Himalaya Singh</a>
                      </div>
                      <div class="p-dt">
                        <span>January 28, 2015</span>
                      </div>
                    </div>
                  </div>

                  <div class="h[100%] w-[100%] ">
                  <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic3
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                  </div>

                  <div class="h-[auto] ">
                    <div class="h-[8vh] w-[100%] flex  bg-white justify-around items-center ">
                      <div class="h-[auto] flex  justify-center gap-1 items-center w-[auto] ">
                        <AiOutlineLike
                          style={{
                            fontSize: "20px",
                            color: "rgb(5,102,255)",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "rgb(5,102,255)",
                          }}
                        >
                          Like
                        </span>
                      </div>
                      <div class="h-[auto] w-[auto] flex  justify-center gap-1 items-center ">
                        <FaRegComment
                          style={{
                            fontSize: "20px",
                            // color:'rgb(5,102,255)'
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            fontWeight: "400",
                            // color:'rgb(5,102,255)'
                          }}
                        >
                          comment
                        </span>
                      </div>
                      <div class="h-[auto] w-[auto] flex  justify-center gap-1 items-center ">
                        <PiShareFatLight
                          style={{
                            fontSize: "20px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            fontWeight: "400",
                            // color:'rgb(5,102,255)'
                          }}
                        >
                          Share
                        </span>
                      </div>
                    </div>
                    {/* <div class="p-acts">
                      <div class="p-act like">
                      <AiOutlineLike />
                        <span>25</span>
                      </div>
                      <div class="p-act comment">
                      <FaRegComment />
                        <span>1</span>
                      </div>
                      <div class="p-act share">
                      <TbShare3 />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div class="h-[auto] w-[72%] ">
                  <div class="h-[auto] w-[534px] bg-white ">
                    <a href="#" class="td p-p-pic">
                    <img
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={
                          data[id]
                            ? data[id].spic2
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                    </a>
                    <div class="td p-r-hdr">
                      <div class="p-u-info">
                        <a href="#">Neol khan</a> shared a memory with{" "}
                        <a href="#">Himalaya Singh</a>
                      </div>
                      <div class="p-dt">
                        <span>January 28, 2015</span>
                      </div>
                    </div>
                  </div>

                  <div class="h[100%] w-[100%] ">
                  <img
                        // style={{
                        //   height: "100%",
                        //   width: "100%",
                        // }}
                        src={
                          data[id]
                            ? data[id].spic3
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                        }
                      />
                  </div>

                  <div class="h-[auto] ">
                    <div class="h-[8vh] w-[100%] flex  bg-white justify-around items-center ">
                      <div class="h-[auto] flex  justify-center gap-1 items-center w-[auto] ">
                        <AiOutlineLike
                          style={{
                            fontSize: "20px",
                            color: "rgb(5,102,255)",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "rgb(5,102,255)",
                          }}
                        >
                          Like
                        </span>
                      </div>
                      <div class="h-[auto] w-[auto] flex  justify-center gap-1 items-center ">
                        <FaRegComment
                          style={{
                            fontSize: "20px",
                            // color:'rgb(5,102,255)'
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            fontWeight: "400",
                            // color:'rgb(5,102,255)'
                          }}
                        >
                          comment
                        </span>
                      </div>
                      <div class="h-[auto] w-[auto] flex  justify-center gap-1 items-center ">
                        <PiShareFatLight
                          style={{
                            fontSize: "20px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            fontWeight: "400",
                            // color:'rgb(5,102,255)'
                          }}
                        >
                          Share
                        </span>
                      </div>
                    </div>
                    {/* <div class="p-acts">
                      <div class="p-act like">
                      <AiOutlineLike />
                        <span>25</span>
                      </div>
                      <div class="p-act comment">
                      <FaRegComment />
                        <span>1</span>
                      </div>
                      <div class="p-act share">
                      <TbShare3 />
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Profile;
