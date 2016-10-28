import React from "react";
import {Link } from "react-router";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
          <div className="header_top">
            <div className="h_back"> <img src="/images/header/back.png"></img> </div>
            <div className="h_logo"> logo</div>
            <div className="h_content"> 
              <div className="h_title">Super Gas</div>
              <div className="h_s_title">Online</div>
            </div>
            <div className="h_options">  <img src="/images/header/back.png"></img> </div>
          </div>
        </div>
    );
  }
}
