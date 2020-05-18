import React from 'react';
import './style.css';
import myImage from "./imageInSrc.jpg"
import myVideo from "./video.mp4"

function App() {
  return (
    <div>
         <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
            <h1 className="title red">Radhi Harrar</h1>
            
            <div className="space">
              <img src={myImage} alt="lac"/>
              <img src="/imageInPublic.jpg" alt="verdure"/>
            </div>
         </div> 
         <div className="video">
            <video width="320" height="240" controls>
              <source src={myVideo} type="video/mp4"/>
            </video>
        </div>
    </div>
  );
}

export default App;
