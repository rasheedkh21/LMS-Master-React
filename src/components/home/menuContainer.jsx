import React, { useState } from "react";
import { Menu, MenuProfileCont, MenuuIconsCont } from "./styleHome";
import MenuICon from "../../assets/menuicon.svg";
import ChatIcon from "../../assets/ChatIcon.svg";
import CupIcon from "../../assets/cupIcon.svg";
import HelloIcon from "../../assets/helloIcon.svg";
import NoteIcon from "../../assets/noteIcon.svg";
import ProfileIcon from "../../assets/profileIcon.svg";
import YouTubeIcon from "../../assets/youtubeIcon.svg";
import accimg from "../../assets/accountimg.jpg";
import LongLogo from "../../assets/longLogo.svg";
import ShortLogo from "../../assets/shortLogo.svg";
import { Link } from "react-router-dom";

const MenuContainer = () => {
  const [showExtendedMenu, setShowExtendedMenu] = useState(false);

  const handleMenuClick = () => {
    setShowExtendedMenu(!showExtendedMenu);
  };

  return (
    <Menu style={{ width: showExtendedMenu ? "250px" : "80px" }}>
      <Link to="/">
      <div>
        <img src={showExtendedMenu ? LongLogo : ShortLogo} alt="logo" />
      </div>
      </Link>
      <MenuProfileCont style={{ display: showExtendedMenu ? "flex" : "none" }}>
        <img src={accimg} alt="img" />
        <p>User:</p>
        <p>Number:</p>
      </MenuProfileCont>
      <MenuuIconsCont>
        <div onClick={handleMenuClick}>
          <img src={MenuICon} alt="menuicon" />
        </div>
        <Link to="/">
        <div>
          <img src={HelloIcon} alt="menuicon" />
          {showExtendedMenu && <p>Welcomings</p>}
        </div>
        </Link>
        <Link to="/intro">
        <div>
          <img src={YouTubeIcon} alt="menuicon" />
          {showExtendedMenu && <p>My Programmas</p>}
        </div>
        </Link>
        <Link to="/profile">
        <div>
          <img src={ProfileIcon} alt="menuicon" />
          {showExtendedMenu && <p>My Account</p>}
        </div>{" "}
        </Link>
        <div>
          <img src={NoteIcon} alt="menuicon" />
          {showExtendedMenu && <p>My Notes</p>}
        </div>
        <div>
          <img src={ChatIcon} alt="menuicon" />
          {showExtendedMenu && <p>Chatting</p>}
        </div>{" "}
        <div>
          <img src={CupIcon} alt="menuicon" />
          {showExtendedMenu && <p>Table of Actives</p>}
        </div>
      </MenuuIconsCont>
    </Menu>
  );
};

export default MenuContainer;

