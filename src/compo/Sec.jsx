import React from "react";
import { GoPlus } from "react-icons/go";
// import Proinput from "./Proinput";
// import { FaEarthAsia } from "react-icons/fa6";
// import { FaEllipsisH } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { AiFillLike } from "react-icons/ai";
// import { MdEmojiEmotions } from "react-icons/md";
// import { BiSolidMessageRounded } from "react-icons/bi";
// import { LuMessageCircle } from "react-icons/lu";
// import { TbShare3 } from "react-icons/tb";
import { FaVideo } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { BsFlagFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sec() {
  return (
    <>
      <div class="  w-[44%] h-screen overflow-scroll  flex bg-[#F0F2F5] p-2  flex-col gap-5 ">
        <div class=" w-[100%]   flex gap-1 p-1 xs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1  xl:col-span-1  ">
          <div class="h-[40vh] w-[25%] bg-[white]  overflow-hidden rounded-lg cursor-[pointer]">
            <div class="h-[80%] w-[100%] rounded-lg  transition-all  hover:scale-110 hover:opacity-90">
              <img
                style={{ height: "100%", width: "100%" }}
                src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjP4mjgxRQNw766egB0oQnskmAHLUt4RCBgw&usqp=CAU"
                alt=""
              />
            </div>
            <div class=" w-[100%] bg-white rounded-lg relative ">
              <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500 bg-[white]  rounded-full left-[50px] top-[-24px] cursor-pointer flex justify-center items-center">
                <GoPlus style={{ fontSize: "30px" }} />
              </div>
              <p class="absolute left-[25px] top-[25px] font-weigh  ">
                Create Story
              </p>
            </div>
          </div>
          <div class=" h-[auto] w-[25%]   rounded-lg cursor-[pointer] ">
            <div
              class="relative grid h-full w-full max-w-[28rem] 
            flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
            >
              <Link to={"/profile"}>
                <div class="absolute inset-0 m-0 h-full w-full  hover:scale-110 hover:opacity-80 overflow-hidden transition-all  rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Soui1IB2Ynk71x1fz1M8DLmLeQrFB-Sz7w&usqp=CAU')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>

                  <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500  rounded-full left-[10px] top-5 cursor-pointer">
                    <img
                      alt="Ali"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Soui1IB2Ynk71x1fz1M8DLmLeQrFB-Sz7w&usqp=CAU"
                      class="relative inline-block h-[100%] w-[100%] rounded-full "
                    />
                  </div>
                </div>
              </Link>
              <div class="relative p-3 px-3 py-1 md:px-12">
                <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[white]">
                  Ali khan
                </h5>
              </div>
            </div>
          </div>
          <div class=" w-[25%] bg-[aqua]  rounded-lg  ">
            <div class="relative grid h-full w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <Link to={"/profile/1"}>
                <div class="absolute inset-0 m-0 h-full w-full  hover:scale-110 hover:opacity-80 overflow-hidden transition-all  rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPQCNENLRFxCA9Yl7A7HKew3ix14MzfmLWQ&usqp=CAU')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>

                  <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500  rounded-full left-[10px] top-5 cursor-pointer">
                    <img
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPQCNENLRFxCA9Yl7A7HKew3ix14MzfmLWQ&usqp=CAU"
                      class="relative inline-block h-[100%] w-[100%] rounded-full "
                    />
                  </div>
                </div>
              </Link>
              <div class="relative p-3 px-3 py-1 md:px-12">
                <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[white]">
                  Usman
                </h5>
              </div>
            </div>
          </div>
          <div class=" w-[25%] bg-[aqua]  rounded-lg  ">
            <div class="relative grid h-full w-full max-w-[28rem]     flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <Link to={"/profile/0"}>
                <div class="absolute inset-0 m-0 h-full w-full  hover:scale-110 hover:opacity-80 overflow-hidden transition-all  rounded-none bg-transparent bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1RoJj3nGGAWYccu9-YGwhCfOfrHQUAtY2w&usqp=CAU')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                  <div class="absolute w-[45px] h-[45px] border-[5px]  border-blue-500  rounded-full left-[10px] top-5 cursor-pointer">
                    <img
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1RoJj3nGGAWYccu9-YGwhCfOfrHQUAtY2w&usqp=CAU"
                      class="relative inline-block h-[100%] w-[100%] rounded-full "
                    />
                  </div>
                </div>
              </Link>
              <div class="relative p-3 px-3 py-1 md:px-12">
                <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[white]">
                  nouman
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <Proinput /> */}
        <div class="h-[20vh] w-[90%] ml-2 bg-white rounded">
          <div class="flex flex-col gap-5 pr-2" id="c-c-main">
            <div class="tb ml-2">
              <div class="td" id="p-c-i">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                  alt="Profile pic"
                />
              </div>
              <div class="td" id="c-inp">
                <input type="text" placeholder="What's on your mind?" />
              </div>
            </div>

            <div id="c-tabs-cvr ">
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
        <div class="h-[auto] w-[80%] ml-2  ">
          <div class="h-[auto] w-[460px] bg-white ">
            <a href="#" class="td p-p-pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                alt="Rajeev's profile pic"
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
            <div class="h-[8vh] w-[100%] bg-white flex  justify-around items-center ">
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
        <div class="h-[auto] w-[80%] ml-2  ">
          <div class="h-[auto] w-[460px] bg-white ">
            <a href="#" class="td p-p-pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                alt="Rajeev's profile pic"
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
              src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div class="h-[auto] ">
            <div class="h-[8vh] w-[100%] bg-white flex  justify-around items-center ">
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
        <div class="h-[auto] w-[80%] ml-2  ">
          <div class="h-[auto] w-[460px] bg-white ">
            <a href="#" class="td p-p-pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5BAKfbVt4HIenjPb9U5q9k8ydxY5njFFdA&usqp=CAU"
                alt="Rajeev's profile pic"
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
              src="https://media.istockphoto.com/id/639695818/photo/photographer-workplace.webp?b=1&s=170667a&w=0&k=20&c=oQ-VULnquXvUl4s0pC_ezDlaiQvJYWcZGNs2qMnXbb4="
              alt=""
            />
          </div>

          <div class="h-[auto] ">
            <div class="h-[8vh] w-[100%] bg-white flex  justify-around items-center ">
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
      </div>
    </>
  );
}

export default Sec;
