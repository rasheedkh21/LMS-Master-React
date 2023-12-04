import React from "react";
import {
  DetailWrapper,
  Feedbacks,
  Trascript,
  VideoPlay,
  VidioWrapper,
} from "./introStyle";
import MenuContainer from "../../home/menuContainer";
import { Tabs } from "@mui/material";
import { MenuComponentDiv } from "../../home/styleHome";
import Navbar from "../../home/navbar";
import img from "../../../assets/img1.png";
const VideoLesson = () => {
  return (
    <DetailWrapper>
      <Navbar />
      <MenuComponentDiv>
        <MenuContainer />
      </MenuComponentDiv>
      <VidioWrapper>
        <VideoPlay>
          <div className="vidioWrap-left">
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",

                width: "35vw",
              }}
            >
              <h2>Lesson name</h2>
              <div style={{ display: "flex", gap: 20 }}>
                <p>Course name</p>
                <img
                  src={img}
                  alt="none"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </div>
            </div>
            <div className="vidio">
              <iframe
                width="600"
                height="330"
                src="https://www.youtube.com/embed/H2Jij5HUfOE"
                title="3 Soatlik Haqiqat — AQSH&#39;dagi O‘zbeklarning Real Hayoti | SUBYEKTIV"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <Trascript>
              <p>
                {" "}
                The standard Lorem Ipsum passage, used since the 1500s "Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </p>
            </Trascript>
          </div>
          <Feedbacks>
            <Tabs />
          </Feedbacks>
        </VideoPlay>
      </VidioWrapper>
    </DetailWrapper>
  );
};

export default VideoLesson;
