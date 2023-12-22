import "./styles.css";

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
    link: "#contact"
  }
];

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-items">
        {navigation.map((item, index) => (
          <div key={index} className="nav-bar-item">
            <a id="nav-bar-link" href={item.link}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
