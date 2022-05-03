import React from "react";
import  "./HTHoneyStory.css";

function HTHoneyStory() {
  return (
    //   background
    <div className="HTHoneyStory">
      <img className="backgroundImg" src="images/bg-main3.jpeg" alt=""/>
      <img className="backgroundImg2" src="images/img-bg-main2-0.png" alt="" />
      <img className="titleImg" src="images/tit-main2-0.png" alt="honeystory"/>
      <p className="caption">
        제품의 특성을 살린 귀여운 해태제과 캐릭터들의 탄생! <br /> 달콤한
        세상으로 여러분을 이끌어줄 해태제과 캐릭터를 소개합니다.
      </p>


    <div className="honeypot">
        <div className="bee1">
            <img src="images/img-bg-main2-0-0.png" alt="" />
        </div>
        <div className="bee2">
            <img src="images/img-bee0.png" alt=""/>
        </div>
    </div>

    <div className="honeypot2">
        <div className="bee3">
            <img src="images/img-honeybee0.png" alt=""/>
        </div>
            <img className="pot" src="images/img-bg-main2-0-1.png" alt=""/>
        </div>  
    </div>
  );
}

export default HTHoneyStory;