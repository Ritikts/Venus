import React from "react";
import Logo from "../img/logo.svg";
import { SidebarNavItem } from "./dashboardComponent/SidebarNavItem";
import {
  Wavethree,
  Finger,
  Bar,
  Wave,
} from "./dashboardComponent/animateIcon/Icon";
import "./dashboardComponent/button.css";
import "./dashboard.css";
import dashboardIcon from "../img/dashboard-icon.svg";
import activityIcon from "../img/activity.svg";
import libraryIcon from "../img/Library.svg";
import payoutsIcon from "../img/Payouts.svg";
import scheduleIcon from "../img/Schedules.svg";
import securityIcon from "../img/Security.svg";
import settingIcon from "../img/Settings.svg";
import search from "../img/search.svg";
import bar2 from "../img/bar-2.svg";
import earn from "../img/earn.svg";
import client from "../img/client.svg";
import wave2 from "../img/wave2.svg";
import card from "../img/card.png";
import user1 from "../img/user-1.png";
import user2 from "../img/user2.png";
import user3 from "../img/user3.png";
import right from "../img/right.svg";
import avatar from "../img/Avatar.png";
import location from "../img/location.svg";
import out from "../img/out.svg";

export const Dashboard = () => {
  const navList = [
    {
      icon: dashboardIcon,
      navName: "Dashboard",
      id: 1,
    },
    {
      icon: activityIcon,
      navName: "Activity",
      id: 2,
    },
    {
      icon: libraryIcon,
      navName: "Library",
      id: 3,
    },
    {
      icon: securityIcon,
      navName: "Security",
      id: 4,
    },
    {
      icon: scheduleIcon,
      navName: "Schedules",
      id: 5,
    },
    {
      icon: payoutsIcon,
      navName: "Payouts",
      id: 6,
    },
    {
      icon: settingIcon,
      navName: "Settings",
      id: 7,
    },
  ];
  return (
    <>
      <div className="flex">
        <aside className="w-1/5 bg-white h-auto relative hidden xl:block">
          <div className="logo-name flex items-center pl-12 pt-16 pb-7 border-b-[1px] border-[#F4F7FE]">
            <div className="logo w-[58px] h-[58px]">
              <img src={Logo} alt="logo" className="w-full" />
            </div>
            <div className="name ml-4">
              <h1 className="font-bold text-4xl poppins text-color-1">VENUS</h1>
              <h3 className="font-medium text-md poppins text-color-1 ml-1 -mt-1">
                DASHBOARD
              </h3>
            </div>
          </div>
          <nav>
            <ul className="space-y-6 px-12 pt-8">
              {navList.map((navListItem) => {
                return (
                  <SidebarNavItem
                    key={navListItem.id}
                    icon={navListItem.icon}
                    navName={navListItem.navName}
                  />
                );
              })}
            </ul>
          </nav>
          <div className="log-out px-12 absolute bottom-10">
            <a href="#!" className="text-xl font-medium flex text-color-3 px-3">
              {" "}
              <img src={out} alt="log-out" className="mr-5" />{" "}
              <span>Log Out</span>
            </a>
          </div>
        </aside>
        <section className="xl:w-4/5 lg:p-10 p-5">
          <div className="grid lg:grid-cols-2 pt-6">
            <div className="overflow-hidden">
              <h5 className="text-lg font-bold text-color-5">Hi Andrei,</h5>
              <h2 className="text-[44px] font-bold text-color-4 drop-in leading-tight lg:leading-normal mt-5 lg:mt-0">
                Welcome to Venus!
              </h2>
            </div>
            <div className="search-input text-right self-end mt-4 lg:mt-0">
              <div className="relative inline-block w-full lg:w-auto">
                <input
                  type="text"
                  className="lg:w-[465px] w-full text-base h-16 focus:outline-none rounded-xl pl-14 placeholder:text-color-7 placeholder:text-base"
                  placeholder="Search"
                />
                <div className="flex items-center absolute top-0 bottom-0 left-7 ">
                  <img src={search} alt="search" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-4 mt-10 gap-x-7 ">
            <div className="flex justify-between items-center rounded-3xl bg-white px-9 py-6 mt-4 lg:mt-0">
              <div className="month">
                <h3 className="text-lg text-color-3 font-medium">
                  Spent this month
                </h3>
                <h2 className=" mt-2 text-3xl font-semibold text-color-6">
                  $682.5
                </h2>
              </div>
              <div className="icon">
                <Bar />
              </div>
            </div>
            <div className="flex space-x-6 items-center rounded-3xl bg-white px-9 py-6 mt-4 lg:mt-0">
              <div className="icon">
                <img src={earn} alt="earn" />
              </div>
              <div className="earn">
                <h3 className="text-lg text-color-3 font-medium">Earnings</h3>
                <h2 className=" mt-2 text-3xl font-semibold text-color-6">
                  $350.40
                </h2>
              </div>
            </div>
            <div className="flex space-x-6 items-center rounded-3xl bg-white px-9 py-6 relative mt-4 lg:mt-7 2xl:mt-0">
              <div className="icon">
                <img src={client} alt="client" />
              </div>
              <div className="client">
                <h3 className="text-xl text-color-3 font-semibold">
                  New clients
                </h3>
                <h2 className=" text-2xl font-semibold -mt-.5 text-color-6">
                  321
                </h2>
              </div>
              <div className="absolute right-6">
                <Wave />
              </div>
            </div>
            <div className="flex  space-x-11 items-center rounded-3xl  gradient px-9 py-6 mt-4 lg:mt-7 2xl:mt-0">
              <div className="month">
                <h3 className="text-xl text-color-8 font-medium">Activity</h3>
                <h2 className=" mt-2 text-3xl font-semibold text-white">
                  $540.50
                </h2>
              </div>
              <div className="icon">
                <img src={wave2} alt="wave" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-6 mt-7 gap-x-7 ">
            <div className="lg:col-span-4 bg-white flex items-center justify-between flex-col 2xl:flex-row rounded-3xl p-6 lg:px-10 xl:px-16 lg:py-12">
              <div className="2xl:w-3/6">
                <h2 className="text-4xl lg:text-5xl font-bold text-color-6 leading-tight">
                  Reach financial goals faster
                </h2>
                <p className="leading-relaxed mt-3 text-xl font-medium text-color-3">
                  Use your Venus card around the world with no hidden fees.
                  Hold, transfer and spend money.
                </p>
                <div className="text-center lg:text-start">
                  <button className="h-[60px] w-[full]  flex items-center justify-center mt-8 py-4 px-16 bg-color-1 text-white rounded-full text-lg btn-shadow">
                    <span class="span-mother flex overflow-hidden hover:absolute">
                      <span>L</span>
                      <span>E</span>
                      <span>A</span>
                      <span>R</span>
                      <span>N</span>&nbsp;&nbsp;
                      <span>M</span>
                      <span>O</span>
                      <span>R</span>
                      <span>E</span>
                    </span>
                    <span class="span-mother2 flex absolute overflow-hidden">
                      <span>L</span>
                      <span>E</span>
                      <span>A</span>
                      <span>R</span>
                      <span>N</span>&nbsp;&nbsp;
                      <span>M</span>
                      <span>O</span>
                      <span>R</span>
                      <span>E</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="md:w-3/6 lg:w-4/5 2xl:w-3/6 flex lg:justify-start xl:justify-center justify-center mt-7 2xl:mt-0">
                <img
                  src={card}
                  alt="card"
                  className="w-100 hover:scale-[1.1] hover:rotate-[-30deg] ease-in-out duration-300"
                />
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-3xl lg:p-10 p-6 mt-4 lg:mt-0 h-full">
              <div className="flex justify-center lg:justify-start">
                <Finger />
              </div>
              <div className="lg:pr-[20px]">
                <p className="mt-8 text-[35px] font-bold text-color-6 leading-tight">
                  Control card security in-app with a tap
                </p>
                <p className="leading-relaxed mt-3 text-lg font-medium text-color-3">
                  Discover our cards benefits, with one tap.
                </p>
              </div>
              <button className="w-full mt-8 py-4 px-16 bg-color-1 text-white rounded-full text-lg btn-shadow">
                Cards
              </button>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-7 gap-x-7">
            <div className="bg-white rounded-3xl  text-center py-20 relative h-[453px] mt-4 lg:mt-0">
              <img src={bar2} alt="bar" className="top-7 absolute right-7" />
              <h4 className="text-lg font-medium text-color-3">
                This month earnings
              </h4>
              <h2 className="mt-3 text-5xl font-bold text-color-6">$682.5</h2>
              <div className="mt-7 text-[#05CD99] text-lg font-bold bg-[#05CD9910] inline-block py-1 px-3 rounded-full">
                +2.45%
              </div>

              <div className="w-[full] absolute bottom-0">
                <Wavethree />
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl relative h-[600px] md:h-[453px] mt-4 lg:mt-0">
              <h2 className="text-[28px] font-bold text-color-6">
                Your Transfers
              </h2>
              <ul className="mt-6 space-y-6">
                <li>
                  <div className="flex justify-between md:items-center flex-col md:flex-row">
                    <div className="flex items-center">
                      <div className="img mr-5">
                        <img src={user1} alt="user" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-color-6">
                          From Alex Manda
                        </h4>
                        <h5 className="text-base font-medium text-color-3">
                          Today, 16:36
                        </h5>
                      </div>
                    </div>
                    <div className="text-[#05CD99] text-lg font-bold bg-[#05CD9910] inline-block py-1 px-3 rounded-lg text-center mt-3 md:mt-0">
                      +$50
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between md:items-center flex-col md:flex-row">
                    <div className="flex  items-center">
                      <div className="img mr-5">
                        <img src={user2} alt="user" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-color-6">
                          To Laura Santos
                        </h4>
                        <h5 className="text-base font-medium text-color-3">
                          Today, 08:49
                        </h5>
                      </div>
                    </div>
                    <div className="text-[#EE5D50] text-lg font-bold bg-[#EE5D5010] inline-block py-1 px-3 text-center rounded-lg mt-3 md:mt-0">
                      -$27
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between md:items-center flex-col md:flex-row">
                    <div className="flex  items-center">
                      <div className="img mr-5">
                        <img src={user3} alt="user" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-color-6">
                          From Jadon S.
                        </h4>
                        <h5 className="text-base font-medium text-color-3">
                          Yesterday, 14:36
                        </h5>
                      </div>
                    </div>
                    <div className="text-[#05CD99] text-lg font-bold bg-[#05CD9910] inline-block py-1 px-3 text-center rounded-lg mt-3 md:mt-0">
                      +$157
                    </div>
                  </div>
                </li>
              </ul>
              <div className="view">
                <a
                  href="#!"
                  className="absolute  xl:bottom-5 xl:right-5 bottom-8 right-8 2xl:bottom-8 2xl:right-8 flex text-color-1 text-2xl font-bold"
                >
                  View all <img src={right} alt="right" className="ml-3" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl px-5 md:px-10 2xl:px-20 h-[453px] mt-4 md:mt-7  xl:mt-0">
              <div className="avatar pt-9">
                <img src={avatar} alt="avatar" className="mx-auto " />
              </div>
              <div className="text-center mt-6">
                <h2 className="text-3xl text-color-6 font-bold ">
                  Charles Robbie
                </h2>
                <h4 className="flex justify-center text-xl font-medium text-color-3">
                  {" "}
                  <img src={location} alt="location" className="mr-2" /> New
                  York, USA
                </h4>
              </div>
              <div className="flex justify-between mt-10">
                <div className="text-center">
                  <div className="text-md text-color-3 ">Projects</div>
                  <div className="text-3xl text-color-6 font-bold">28</div>
                </div>
                <div className="text-center">
                  <div className="text-md text-color-3 ">Followers</div>
                  <div className="text-3xl text-color-6 font-bold">643</div>
                </div>
                <div className="text-center">
                  <div className="text-md text-color-3 ">Following</div>
                  <div className="text-3xl text-color-6 font-bold">76</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
