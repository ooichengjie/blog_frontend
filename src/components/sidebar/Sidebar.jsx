import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <span className='sidebarTitle'>About Me</span>
      	<div className='sidebarItem'>
        
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/49/8f/f4/vietnam-drip-rp20000.jpg" alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium eros nisi, ut aliquet leo commodo sit amet. Sed massa est, porttitor quis ante sed</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sport</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem'>
                <span className="sidebarTitle">FOLLOW US</span>
                <div className='sidebarSocial'>
                  <i className="sidebarIcon fab fa-brands fa-facebook-square"></i>
                  <i className="sidebarIcon fab  fa-brands fa-twitter-square"></i>
                  <i className="sidebarIcon fab  fa-brands fa-pinterest-square"></i>
                  <i className="sidebarIcon fab  fa-brands fa-instagram-square"></i>
                  </div>
          </div>
    </div>
  )
}
