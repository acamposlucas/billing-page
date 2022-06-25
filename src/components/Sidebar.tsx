import "../sass/components/Sidebar.scss";
import userImg from "../assets/userImg.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="userContainer">
        <img src={userImg} alt="" className="userContainer__avatar" />
        <div className="userContainer__userInfo">
          <strong>Ildiko Gaspar</strong>
          <a href="">@igaspar</a>
        </div>
      </div>
      <nav className="sidebar__nav">
        <ul className="nav__list">
          <li className="nav__list__item">
            <a href="#">General</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Password</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Invitations</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Billings</a>
          </li>
          <li className="nav__list__item">
            <a href="#">Apps</a>
          </li>
        </ul>
      </nav>
      <a href="" className="sidebar__logOutButton">
        Log out
      </a>
    </aside>
  );
}
