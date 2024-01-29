import React from "react";
import { PiClockClockwiseDuotone } from "react-icons/pi";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { FaPlus } from "react-icons/fa6";
import { Badge } from "@mui/icons-material";
import { IoSearchSharp } from "react-icons/io5";

function Right() {
  return (
    <>
      <div class="w-[30%] bg-red  ">
        <div class="h-[100] w-[100%] flex justify-start overflow-scroll ">
          <div class="w-[100%] h-[100vh] overflow-scroll">
            <body class="hidden md:hidden lg:flex xl:flex 2xl:flex min-h-screen bg-[#F0F2F5] flex">
              {/* <!-- Left Sidebar Start --> */}

              <div class="w-80 px-2 min-h-screen flex flex-col py-2">
                <div class="flex justify-around items-center">
                  <h1 class="font-bold  text-[#65676B]">Contacts</h1>
                  <IoSearchSharp
                    style={{ fontSize: "25px", color: "#65676B" }}
                  />
                </div>
                <div class="group">
                  <div class="text-white mt-1 ">
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4f6wnsNip4N-P-57m1bUYxRx7zsz7Q1uFA&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">nouman</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative  overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">usman</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative  overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCIq1WFIqckI69eGZ67ugLdfxchy96eLR7w&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">wajid</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    ></a>

                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_78fdpwlBA-MJAF3zvSdHx9T49LxxEym4g&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Kamran</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* <div class="border-t border-gray-700 my-2"></div> */}

                <div class="group flex-1">
                  {/* <div class="flex justify-between items-center">
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] text-blue-500 p-2 rounded-md opacity-0 group-hover:opacity-100"
                    >
                      Edit
                    </a>
                  </div> */}
                  <div class="text-white mt-1">
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX82h7Lcg9A0KIyF-miZu8hJTrxZ-_bs_RXg&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Sharoz butt</h2>
                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>

                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    >
                      <div class="w-12 h-12 rounded-full relative overflow-hidden">
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbZDN8TyUJnciE8U6huASQu2HenGk7u-r8VnloUldA0ljXIc1u18ZVlLinqg4eVAZ5VI&usqp=CAU"
                          alt=""
                        />
                        <div class="h-[10px] w-[10px] border border-white-1000 rounded-full bg-[#2F9A48] absolute left-[35px] top-[32px] z-[2000]"></div>
                      </div>
                      <div class="flex flex-col justify-center content-start">
                        <h2 class="font-semibold text-[black]">Zohaib khan</h2>

                        <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    ></a>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <div class="flex flex-col justify-center content-start">
                          <h3 class="text-gray-500 font-semibold text-lg">
                            Your Shortcuts
                          </h3>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <a
                          href="#"
                          class="hover:bg-[#E4E6E9] px-2.5 py-1.5  flex items-center space-x-3 rounded-md"
                        >
                          <div class="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden bg-[silver]">
                            <FaPlus style={{ fontSize: "20px" }} />
                          </div>
                          <div class="flex flex-col justify-center content-start">
                            <h2 class="font-semibold text-[black]">
                              Create New Group
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1"></div>
                          </div>
                        </a>

                        <div class="flex flex-col justify-center content-start">
                          <a
                            href="#"
                            class="hover:bg-[#E4E6E9] px-2.5 py-1.5  flex items-center space-x-3 rounded-md"
                          >
                            <h2 class="font-semibold text-[#1F2020]">
                              Chilakanda - English
                            </h2>
                            <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                              <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                              <span>9+ new</span>
                            </div>
                          </a>
                          <a
                            href="#"
                            class="hover:bg-[#E4E6E9] px-2.5 py-1.5  flex items-center space-x-3 rounded-md"
                          >
                            <div class="flex flex-col justify-center content-start">
                              <h2 class="font-semibold text-[#1F2020]">
                                BDSkills
                              </h2>
                              <div class="text-xs text-blue-400 flex justify-start items-center space-x-1">
                                <span class="w-2 h-2 bg-blue-400 inline-block rounded-full"></span>
                                <span>9+ new</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <a
                      href="#"
                      class="hover:bg-[#E4E6E9] px-2.5 py-1.5 flex items-center space-x-3 rounded-md"
                    ></a>
                  </div>
                </div>
              </div>
              {/* Left Sidebar End --> */}
            </body>
          </div>
          {/* <Story />
        <Friends/> */}
        </div>
      </div>
    </>
  );
}
export default Right;
