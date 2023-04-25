export default function Sidebar({ links, viewChange }) {

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">FRAV</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <hr className="sidebar-divider my-0" />
        <ul style={{ padding: "0" }}>
          {links.map((link) => (
            <li
              key={link + "id"}
              style={{ color: "white", listStyle: "none" }}
              className="nav-item"
            >
              <a
                className="nav-link collapsed"
                href="#"
                onClick={() => { viewChange(link) }}
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>{link}</span>
              </a>
              <hr className="sidebar-divider" />
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
}
