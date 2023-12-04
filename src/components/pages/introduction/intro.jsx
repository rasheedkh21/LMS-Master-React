import React from "react";
import {
  BigContainer,
  Courseleft,
  CoursesIntro,
  InformationTable,
  LinkButtonWrap,
  MenuComponents,
} from "./introStyle";
import Navbar from "../../home/navbar";
import { MenuComponentDiv, Welcome } from "../../home/styleHome";
import MenuContainer from "../../home/menuContainer";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <MenuComponents>
      <Navbar />
      <Welcome>
        <MenuComponentDiv>
          <MenuContainer />
        </MenuComponentDiv>
        <CoursesIntro>
          <BigContainer>
            <Courseleft>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img1} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="108"
                      height="8"
                      viewBox="0 0 108 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H104"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button>Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img2} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#C0C0C0"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button className="garidient-button">Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img3} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button>Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
            </Courseleft>
            <Courseleft>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img4} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button>Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img5} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button className="garidient-button">Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img6} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button>Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
            </Courseleft>
            <Courseleft>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img7} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button>Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
              <InformationTable>
                <div style={{ display: "flex", position: "relative" }}>
                  <img src={img8} alt="img" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 15,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="208"
                      height="8"
                      viewBox="0 0 208 8"
                      fill="none"
                    >
                      <path
                        d="M4 4H204"
                        stroke="#00F5FC"
                        stroke-width="7"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p>
                      Nombre del curso puede <br />
                      ser multi líneas.{" "}
                    </p>
                    <p>Number 1 Professors</p>
                  </div>
                  <LinkButtonWrap>
                    <Link to="/videolesson">
                      <button className="garidient-button">Course</button>
                    </Link>
                  </LinkButtonWrap>
                </div>
              </InformationTable>
            </Courseleft>
          </BigContainer>
        </CoursesIntro>
      </Welcome>
    </MenuComponents>
  );
};

export default Menu;
