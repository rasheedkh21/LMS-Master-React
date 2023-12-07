import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import img from "../../assets/wallpaperbetter.png";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Navdiv = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;

  .nav-right {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav-right input {
    border-radius: 25px;
    background: rgba(166, 166, 166, 0.5);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    width: 250px;
    height: 45px;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    padding-left: 15px;
  }

  .themechanger svg {
    width: 40px;
    height: 20px;
    cursor: pointer;
  }
`;

export const MainHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
`;

export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const WelcomingWords = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 5;
  animation: ${fadeInUp} 1s ease-in-out;

  h1 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  h2 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    width: 250px;
    height: 60px;
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
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  width: 250px;
  height: 100%;
  border-radius: 0px 50px 50px 0px;
  background: var(--bg-dark-secondary, linear-gradient(180deg, rgba(51, 50, 59, 0.5) 0%, rgba(118, 118, 118, 0) 100%));
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  transition: width 0.3s ease;
`;

export const MenuProfileCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  p {
    color: var(--color-typo-dark-theme, #c0c0c0);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MenuuIconsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;

  div {
    display: inline-flex;
    align-items: center;
    gap: 15px;
  }

  div:hover {
    display: flex;
    transform: translateY(-10px) scale(1.13);
    transition: all 0.5s ease;
  }

  p {
    color: #c0c0c0;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  div:hover {
    transform: rotateX("angle");
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    background: var(--Background-boton-setect, linear-gradient(180deg, rgba(187, 150, 150, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%));
    p {
      color: var(--Primary-Color, #00f5fc);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const MenuComponentDiv = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`;
