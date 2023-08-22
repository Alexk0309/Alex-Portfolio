import "./styles.css";

const navigation = [
  {
    title: "ABOUT",
  },
  {
    title: "PROJECT",
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
        {navigation.map((item) => (
          <div className="nav-bar-item">
            <a href="#">{item.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
