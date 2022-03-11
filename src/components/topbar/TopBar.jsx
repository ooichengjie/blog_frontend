import './topbar.css'
import { Link } from 'react-router-dom';


export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className='topCenter'>
            <u1 className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/">
                      ABOUT
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/">
                      CONTACT
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/write">
                     WRITE
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/">
                      { user && "LOGOUT" }
                  </Link>
                </li>
            </u1>

        </div>
        <div className='topRight'>
            {user ? (
                <img 
                    className="topImg"
                    src="https://delightfulplate.com/wp-content/uploads/2018/11/Vietnamese-Coffee-Cafe-Sua-Nong-1-683x1024.jpg" alt=""/>

            ) : (
              <ul className='topList'>
                  <li className='topListItem'>
                    <Link className='link' to= "/login">
                        LOGIN
                    </Link>
                  </li>
                  <li className='topListItem'>
                    <Link className='link' to= "/register">
                        REGISTER
                    </Link>
                  </li>
              </ul>
            )}
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  );
}
