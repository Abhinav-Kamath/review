import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { useRecoilState, useRecoilValue } from 'recoil'
import {  SearchTextAtom } from "./NavBar.state";
import { FavDataAtom } from "../../Screens/Dashboard/Favorites.state";
function NavBar() {
  const [SearchText, setSearchText] = useRecoilState(SearchTextAtom);
  const FavData = useRecoilValue(FavDataAtom);
  const hover = "hover:text-subMain trasitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          {/* Logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img src="/images/logo-no-background.png" alt="logo" className="w-40 h-25 object-contain" />
            </Link>
          </div>

          {/* Search Form */}
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-subMain text-white w-12 flex-colo h-12 rounded"
                >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search your music from here"
                onChange={e=>setSearchText(e.target.value)}
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              ></input>
            </form>
          </div>

          {/* Menu */}
          <div className="col-span-3 font-medium text-sm xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/songs" className={Hover}>
              Songs
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorites" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                {FavData.length}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
