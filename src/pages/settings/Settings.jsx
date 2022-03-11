import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
       <div className="settingsWrapper">
         <div className="settingsTitle">
           <span className="settingsUpdateTitle">Update Your Account</span>
           <span className="settingsDeleteTitle">Delete Account</span>
         </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Northrop_Grumman_Bat_UAV_in_flight_in_June_2014.JPG" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>UserName</label>
            <input type="text" placeholder="Eusoff" />
            <label>Email</label>
            <input type="email" placeholder="Eusoff@usm.my" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
       </div>
       <Sidebar/>
    </div>
  )
}
