import React from 'react'
import '../../src/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus, faBell, faUserCircle, faToggleOff  } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
      <div className="maincontainer">
          <h1 className="icon">&#9776;</h1>
        <div className="box">
            <FontAwesomeIcon icon={faSearch} className="searchicon"/>
            <input type="text" name="" className="search" placeholder="dfin"></input>
        </div>
        <div className="rightmenus">
        <FontAwesomeIcon icon={faUserPlus} className=""/>
        <button type="button" className="invitebtn">INVITE TEAM MEMBER</button>
        <FontAwesomeIcon icon={faBell} className=""/>
        <FontAwesomeIcon icon={faUserCircle} className="fausercircle"/>
        </div>
        <br></br><br></br>
        <div className="sidemenu2">
          <table>
            <tr>
              <td>Dark mode <FontAwesomeIcon icon={faToggleOff} className="toggle"/></td>
            </tr>
            <tr>
              <td>Profile</td>
            </tr>
            <tr>
              <td style={{backgroundColor: '#D3D3D3'}}>what's new</td>
            </tr>
            <tr>
              <td>Help</td>
            </tr>
            <tr>
              <td>Send feedback</td>
            </tr>
            <tr>
              <td>Hints and shortcuts</td>
            </tr>
            <tr>
              <td>Logout</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
  
  export default Header;