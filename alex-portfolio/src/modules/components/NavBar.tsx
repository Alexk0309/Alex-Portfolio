import "./styles.css";

const navigation = [
  {
    title: "ABOUT",
  },
  {
    title: "SKILLS",
  },
  {
    title: "EXPERIENCE",
  },
  {
    title: "CONTACT",
  },
];

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-items">
        {navigation.map((item, index) => (
          <div key={index} className="nav-bar-item">
            <a id="nav-bar-link" href="#">{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
