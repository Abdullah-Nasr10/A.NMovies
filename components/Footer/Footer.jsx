import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 text-center text-sm-start">
          {/* -----------------logo------------------------ */}
          <div className="col">
            <div className="footerLogo">
              <div>
                <span>THE</span>
                <span className="Circle c1"></span>
              </div>
              <div>
                <span>M</span>
                <span className="Circle c2"></span>
                <span>VIE</span>
              </div>
              <div>
                <span className="Circle c3"></span>
                <span>DB</span>
              </div>
            </div>
          </div>
          {/* ------------------box1----------------------- */}
          <div className="col">
            <div className="footerBox">
              <ul>
                <li className="footBoxTitle">The Basics</li>
                <li>About TMDB</li>
                <li>Contact Us</li>
                <li>Support Forums</li>
                <li>API Documentation</li>
                <li>System Status</li>
              </ul>
            </div>
          </div>
          {/* ------------------box2----------------------- */}
          <div className="col">
            <div className="footerBox">
              <ul>
                <li className="footBoxTitle"> Get Involved</li>
                <li>Contribution Bible</li>
                <li>Add New Movie</li>
                <li>Add New TV Show</li>
              </ul>
            </div>
          </div>
          {/* -------------------box3---------------------- */}
          <div className="col">
            <div className="footerBox">
              <ul>
                <li className="footBoxTitle"> Community</li>
                <li>Guidelines</li>
                <li>Discussions</li>
                <li>Leaderboard</li>
              </ul>
            </div>
          </div>
          {/* --------------------box4--------------------- */}
          <div className="col">
            <div className="footerBox">
              <ul>
                <li className="footBoxTitle">Legal</li>
                <li>Terms of Use</li>
                <li>API Terms of Use</li>
                <li>Privacy Policy</li>
                <li>DMCA Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
