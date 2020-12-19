import headerLogo from './img/Header_Logo.png'
import item1 from './img/design-5.png'
import item2 from './img/design-6.png'
import item3 from './img/design-7.png'
import shape from './img/Shape9.png'
import image from './img/pic1.jpg'
import img from './img/pic2.jpg'
import twitter from './img/tw.png'
import youtube from './img/yb.png'
import facebook from './img/fb.png'
import instagram from './img/in.png'

import './App.css';

function App() {
  return (


    <div>
      <div className="header">
        <div className="container">
          <div className="header_block">
            <div className="about">
              <div className="logo">
                <a href="#"><img src={headerLogo} alt="logo" /></a>
              </div>
              <ul className="logo_ul">
                <li className="logo_li"><a href="#">HOME</a></li>
                <li className="logo_li"><a href="#">ABOUT</a></li>
                <li className="logo_li"><a href="#">PORTFOLIO</a></li>
                <li className="logo_li"><a href="#">TEAM</a></li>
                <li className="logo_li"><a href="#">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="items">
            <div className="foto1">
              <img src={item1} alt="#" />
              <h3>Resources</h3>
              <p>Lorem, ipsum dolor sit amet consectetur<br />
            adipisicing elit. Iure, nesciunt, possi <br />
            molestiae asperiores beatae enim <br />
            vel voluptatum adipisci eum quos <br />
            cumque unde? Quasi, rerum?</p>
              <a href="#">Explorer more &rarr;</a>
            </div>
            <div className="foto1">
              <img src={item2} alt="#" />
              <h3>Resources</h3>
              <p>Lorem, ipsum dolor sit amet consectetur<br />
            adipisicing elit. Iure, nesciunt, possim <br />
            molestiae asperiores beatae enim <br />
            vel voluptatum adipisci eum quos ipsa<br />
            cumque unde? Quasi, rerum?</p>
              <a href="#">Explorer more &rarr;</a>
            </div>
            <div className="foto1">
            <img src={item3} alt="#"/>
                <h3>Resources</h3>
                <p>Lorem, ipsum dolor sit amet consect<br />
            adipisicing elit. Iure, nesciunt,<br />
            molestiae asperiores beatae enim <br />
            vel voluptatum adipisci eum <br />
            cumque unde? Quasi, rerum?</p>
                <a href="#">Explorer more </a>
            </div>
            </div>
            <div className="info_block">
              <div className="info">
                <h4>Its all about</h4>
                <h2>FITNESS FIRST</h2>
                <img src={shape} alt="#"/>
                  <p>Lorem ipsum dolor sit amet consectetur<br />
            adipisicing elit. Consequuntur sint necessitatibus <br />
            pariatur placeat temporibus autem officia corrupti<br />
            quos earum eveniet.</p>
                  <a href="#">READ MORE</a>
        </div>
                <div className="image">
                  <img src={image} alt="#"/>
        </div>
                </div>
                <div className="info_block1">
                  <div className="img">
                    <img src={img} alt="#"/>
          </div>
                    <div className="info1">
                      <h4>Its all about</h4>
                      <h2>YOUR BODY</h2>
                      <img src={shape} alt="#"/>
                        <p>Lorem ipsum dolor sit amet consectetur<br />
            adipisicing elit. Consequuntur sint necessitatibus <br />
            pariatur placeat temporibus autem officia corrupti<br />
            quos earum eveniet.</p>
                        <a href="#">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer_info">
                <div className="container">
                  <div className="footer_block">
                    <div className="text">
                      <h4>RESURCES</h4>
                      <div className="a1">
                        <p>Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Dicta recusandae ipsum <br />
                obcaecati quibusdam ad labore doloribus <br />
                debitis eos illo incidunt.</p>
                      </div>
                    </div>
                    <div className="footer_foto">
                      <p>Stay in touch</p>
                    <a className="tw" href="#"><img src={twitter} alt="google"/></a>
                    <a className="yb" href="#"><img src={youtube} alt="google"/></a>
                    <a className="fb" href="#"><img src={facebook} alt="google"/></a> 
                    <a className="in" href="#"><img src={instagram} alt="google"/></a>
                </div>
              </div>
            </div>     
  </footer>
</div>
  );
}

export default App;
