import React from "react";
import "./HTFooter.css";

function HTFooter() {


  return (
    <div className="footer">
      <div className="container">
        <h2>
          <img src="images/logo-b.png" alt="" />
        </h2>
        <div className="links">
          <a href="#">개인정보처리방침</a>
          <a href="#">이메일주소 무단 수집 거부</a>
          <a href="#">고객문의</a>
          <br />
          <span>COPRYRIGHT</span>
        </div>
        <div className="familysite">
          <div>
            FAMILY SITE
          </div>
        </div>
        <img className="webaward" src="images/webaward.png" alt="" />
      </div>
    </div>
  );
}

export default HTFooter;
