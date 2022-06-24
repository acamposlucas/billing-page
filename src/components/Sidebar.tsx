import "../sass/components/Sidebar.scss";
import userImg from "../assets/userImg.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="userContainer">
        <img src={userImg} alt="" className="userContainer__avatar" />
        <div className="userContainer__userInfo">
          <strong>Ildiko Gaspar</strong>
          <span>
            <a href="">@igaspar</a>
          </span>
        </div>
      </div>
      <nav>
        <ul>
          <li>General</li>
          <li>Password</li>
          <li>Invitations</li>
          <li>Billings</li>
          <li>Apps</li>
        </ul>
      </nav>
      <a href="">Log out</a>
    </aside>
  );
}
