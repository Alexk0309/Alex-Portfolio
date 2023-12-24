import styled from "styled-components";
import "./styles.css";
import { useState } from "react";

const navigation = [
  {
    title: "ABOUT",
    link: "#about-me",
  },
  {
    title: "PROJECTS",
    link: "#projects",
  },
  {
    title: "EXPERIENCE",
    link: "#experience",
  },
  {
    title: "CONTACT",
    link: "#contact",
  },
];

const NavBar = () => {
  const [showNavbar, setShowNavBar] = useState(false);

  const handleNavBar = () => {
    setShowNavBar(!showNavbar);
  };

  return (
    <div className="nav-bar-container">
      <NavBarButtonContainer onClick={handleNavBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          width="50"
          fill="#ffffff"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </NavBarButtonContainer>
      <NavBarItemsContainer $showNavBar={showNavbar}>
        {navigation.map((item, index) => (
          <div key={index} className="nav-bar-item">
            <a id="nav-bar-link" onClick={handleNavBar} href={item.link}>
              {item.title}
            </a>
          </div>
        ))}
      </NavBarItemsContainer>
    </div>
  );
};

export default NavBar;

const NavBarButtonContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(14, 13, 22);

  &:hover {
    cursor: pointer;
    background-color: rgb(19, 18, 30);
  }

  @media only screen and (max-width: 1250px) {
    display: flex;
  }
`;

const NavBarItemsContainer = styled.div<{ $showNavBar: boolean }>`
  display: flex;
  height: 30px;
  flex-direction: row;
  transition: bottom 0.3s ease;

  @media only screen and (max-width: 1250px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    background-color: rgb(14, 13, 22);
    bottom: ${(props) => (props.$showNavBar ? "-500px" : 0)};
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    z-index: -1;
  }
`;
