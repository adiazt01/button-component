import "/src/style/Navbar.scss";

export const Navbar = () => {
  const links = [
    { link: "Home" },
    { link: "Profile" },
    { link: "Options" },
    { link: "About" },
    { link: "Exit" }
  ];
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Programador AD</h1>
      <ul className="sidebar-ul">
        {links.map((item) => (
          <li className="sidebar-ul-item" key={item.link}>
            <a href="" className="sidebar-ul-item-link">
              {item.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
