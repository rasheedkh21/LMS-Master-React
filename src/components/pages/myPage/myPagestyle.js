import styled from "styled-components";

export const MyPageBigCont =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

export const ProfileItems=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    height: 80vh;
    width: 80vw;
`
export const ProfileLeft =styled.div`
  display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    justify-content: center;
    img{
        width: 250px;
height: 250px;
flex-shrink: 0;
        border-radius: 40px;
border: 6px solid #FCE300;
background: lightgray -171.064px 0.064px / 177.778% 100% no-repeat;
    }
    ul {
    list-style-type: none;
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    line-height: 30px;
    padding: 0px;
  }
  li {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  p {
    color: var(--Primary-Color, #00f5fc);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .edit-profile{
      width: 250px;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(92deg, #00f5fc 0.68%, #3290ff 99.28%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    text-align: center;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: none !important;
  }
  .edit-profile:hover{
    border: 3px solid var(--Primary-Gradiant, #00f5fc);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: var(--Primary-Color, #00f5fc);
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: none !important;
  }
`

export const ProfileRight =styled.div`
 display: flex;
    flex: 3;
    gap: 30px;
    flex-direction: column;
    border-left: solid 2px white;
    justify-content: center;
    padding-left: 50px;
    border-left-color: #C0C0C0;
   
`
export const InfoDivs=styled.div`
 display: grid;
 grid-template-columns: auto auto;
    justify-content: space-around;
    position: relative;
    border-radius: 20px;
    background: var(
      --bg-dark-secondary,
      linear-gradient(
        180deg,
        rgba(51, 50, 59, 0.5) 0%,
        rgba(118, 118, 118, 0) 100%
      )
    );
    .course-buttons{
        color: var(--Primary-Color, #00F5FC);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
        display: inline-flex;
padding: 10px;
align-items: center;
gap: 15px;
        border-radius: 10px;
background: var(--Background-boton-setect, linear-gradient(180deg, rgba(187, 150, 150, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%));
    }
p{
    color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal; 
}
`