import React from 'react'
import { InfoDivs, MyPageBigCont, ProfileItems, ProfileLeft, ProfileRight } from './myPagestyle';
import Navbar from '../../home/navbar';
import { LinkButtonWrap, MenuComponents } from '../introduction/introStyle';
import MenuContainer from '../../home/menuContainer';
import { MenuComponentDiv } from '../../home/styleHome';
import AccImg from "../../../assets/accountimg.jpg"
import PopUp from '../../home/popup';
import { Button, Stack } from '@mui/material';
import img1 from "../../../assets/img5.png"
import img2 from "../../../assets/img6.png"
import img3 from "../../../assets/img7.png"
import noteicon from "../../../assets/noteIcon.svg"
import medalicon from "../../../assets/cupIcon.svg"
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
const MyPage = () => {
  return (
    <MenuComponents>
      <Navbar/>
      <MyPageBigCont>
        <MenuComponentDiv>
          <MenuContainer/>
        </MenuComponentDiv>
        <ProfileItems>
          <Fade top>
          <ProfileLeft>
            <img src={AccImg} alt="profile Photo" />
            <ul>
                Username
                <li>User fee</li>
                <li>User email</li>
                <li>User contact number</li>
                <li>User address</li>
             </ul>
             <div>
              <p>Your Points</p>
             </div>
             <Stack spacing={2} direction={"column"}>
             <PopUp/>
             <Button className='edit-profile'>Update Key</Button>
             </Stack>
          </ProfileLeft>
          </Fade>
          <ProfileRight>
            <Fade right>
            <InfoDivs>
            <img style={{ height: 180 }} src={img1} alt="none" />
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding:15
                  }}
                  >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                     <label>0%</label>
                      <div style={{background: '#C0C0C0', width: 350, height:10}}></div>
                  </div>
                  <p>
                      Course name can be multi lines.{" "}
                  </p>
                  <p>Teacher's name</p>
                  <Stack spacing={2} direction="row">
                     <Button className="course-buttons" variant="outlined">Course certificate <img src={medalicon} alt="none" /></Button>
                     <Button className="course-buttons" variant="outlined">Course Notes <img src={noteicon} alt="none" /> </Button>
                  </Stack>
               </div>
              <div>
                <Link to="/videolesson">
                <LinkButtonWrap>
               <button>Curso</button> 
                </LinkButtonWrap>     
                </Link>  
              </div>{" "}
            </InfoDivs>
            </Fade>
            <Fade right>
            <InfoDivs>
     
            <img style={{ height: 180 }} src={img3} alt="none" />
        
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding:15
                  }}
                  >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                     <label>0%</label>
                      <div style={{background: '#C0C0C0', width: 350, height:10}}></div>
                  </div>
                  <p>
                      Course name can be multi lines.{" "}
                  </p>
                  <p>Teacher's name</p>
                  <Stack spacing={2} direction="row">
                     <Button className="course-buttons" variant="outlined">Course certificate <img src={medalicon} alt="none" /></Button>
                     <Button className="course-buttons" variant="outlined">Course Notes <img src={noteicon} alt="none" /> </Button>
                  </Stack>
               </div>
              <div>
                <Link to="/videolesson">
                <LinkButtonWrap>
               <button className='garidient-button'>Curso</button> 
                </LinkButtonWrap>     
                </Link>  
              </div>{" "}
            </InfoDivs>
            </Fade>
            <Fade right>
            <InfoDivs>
            <img style={{ height: 180 }} src={img2} alt="none" />
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding:15
                  }}
                  >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                     <label>0%</label>
                      <div style={{background: '#C0C0C0', width: 350, height:10}}></div>
                  </div>
                  <p>
                      Course name can be multi lines.{" "}
                  </p>
                  <p>Teacher's name</p>
                  <Stack spacing={2} direction="row">
                     <Button className="course-buttons" variant="outlined">Course certificate <img src={medalicon} alt="none" /></Button>
                     <Button className="course-buttons" variant="outlined">Course Notes <img src={noteicon} alt="none" /> </Button>
                  </Stack>
               </div>
              <div>
                <Link to="/videolesson">
                <LinkButtonWrap>
               <button>Curso</button> 
                </LinkButtonWrap>    
                </Link>   
              </div>{" "}
            </InfoDivs>
            </Fade>
          </ProfileRight>
        </ProfileItems>
      </MyPageBigCont>
    </MenuComponents>
  )
}

export default MyPage;