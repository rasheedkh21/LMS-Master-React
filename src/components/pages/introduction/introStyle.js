import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(
    --bg-dark-1,
    linear-gradient(120deg, #070a15 7.55%, #2b3042 100%)
  );
`;
export const CoursesIntro = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 48px;
  flex: 4;
  border: 5px solid green;
  width: 100%;
  height: 100vh;
  align-items: center;
`;
export const BigContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;
export const Courseleft = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  /* align-items: start;
  justify-content: start; */

  gap: 20px;
`;
export const InformationTable = styled.div`
  display: flex;
  border-radius: 20px;
  background: var(
    --bg-dark-secondary,
    linear-gradient(
      180deg,
      rgba(51, 50, 59, 0.5) 0%,
      rgba(118, 118, 118, 0) 100%
    )
  );
  
  p{
    color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
`;
export const LinkButtonWrap = styled.div`
  position: absolute;
  bottom: 30px;
  left: 100px;
  
  button {
    z-index: 1;
    border: none;
    border-radius: 5px;
    background: linear-gradient(91deg, #ffd833 0.43%, #48b266 99.46%);
    width: 150px;
    height: 30px;
    cursor: pointer;
    color: #fff;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button:hover{ 
  transform: translateY(-10px) scale(1.13);
  transition: all .50s ease; 
  }
  .garidient-button {
    border-radius: 5px;
    background: linear-gradient(91deg, #ff33d2 0.43%, #4893b2 99.46%);
  }
`;
//videoLesson Style
export const SideLink = styled(Link)`
  text-decoration: none;
`;
export const DetailWrapper = styled.div`
  display: flex;
  height: 100vh;
  background: var(
    --bg-dark-1,
    linear-gradient(120deg, #070a15 7.55%, #2b3042 100%)
  );
  :hover{
  display: flex;
  transform: translateY(-5px) scale(1.03);
  transition: all .50s ease;
}
`;
export const VidioWrapper = styled.div`
  display: flex;
  flex: 5;
  justify-content: center;
  align-items: center;
  width: 100%;
  .vidioWrap-left {
    display: flex;
    align-items: end;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    border-right: solid 5px #00f5fc;
  }

  .vidio {
    padding: 20px 30px 30px 0px;
    width: 600px;
    height: 300px;
    border-top: solid 1px #c0c0c0;
    border-bottom: solid 1px #c0c0c0;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const VideoPlay = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  padding-right: 60px;
`;
export const Trascript = styled.div`
  background: var(
    --bg-dark-secondary,
    linear-gradient(
      180deg,
      rgba(51, 50, 59, 0.5) 0%,
      rgba(118, 118, 118, 0) 100%
    )
  );
  width: 600px;
  padding: 25px;
  p {
    color: var(--color-typo-dark-theme, #c0c0c0);
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Feedbacks = styled.div`
  display: flex;
  width: 15%;
  flex: 0.5;
  border-radius: 10px;
  background: var(
    --bg-dark-secondary,
    linear-gradient(
      180deg,
      rgba(51, 50, 59, 0.5) 0%,
      rgba(118, 118, 118, 0) 100%
    )
  );
`;
