import { MainHome,MenuComponentDiv,Welcome, WelcomingWords } from "./styleHome";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import MenuContainer from "./menuContainer";



const Home = () => {
  return (
    <div>
      <MainHome>
        <Navbar />
        <Welcome>
          <MenuComponentDiv>
          <MenuContainer/>
          </MenuComponentDiv>
          <WelcomingWords>
            <h1>Welcome Student </h1>
            <h2>Wen invite you to know the LMS experience</h2>
            <Link to="/intro">
              <button>Explore</button>
            </Link>
          </WelcomingWords>
        </Welcome>
      </MainHome>
    </div>
  );
};

export default Home;
