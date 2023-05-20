import OpenBelow1 from './OpenBelow1';
import OpenBelow2 from './OpenBelow2';
import OpenBelow3 from './OpenBelow3';
import OpenBelow4 from './OpenBelow4';
 

import star1 from './images/Star 4.png';
import star from './images/Star 4.png';
import button from './images/2b.png';
import heroimage from './images/Hero Image.png';
import burger from './images/Cheeseburger.png';
import bottom from './images/image 2.png';
import secure from './images/secure.png';
import bill from './images/bill.png';
import cred1 from './images/c1.png';
import cred2 from './images/c2.png';
import house from './images/9 1.png';
import arrow from './images/arrow.png';
import starblue from './images/starblue.png';
import q1 from './images/q1.png';
import q2 from './images/q2.png';
import q3 from './images/q3.png';
import mobile from './images/5 1.png';
import will from './images/william.png';
import rebecca from './images/rebecca.png';
import arr1 from './images/11.png';
import arr2 from './images/12.png';

import './App.css';


function App() {
  return (
  <>
  <body>
    <div className="main">
    <div className="tlog">
      <img src={star1} className="logo1" alt="star1"/>
      <h2>BANQUEE</h2>
      <div className="burger1">
        <img src={burger} className="cburger" alt="cburger"/>
      </div>
    </div>
      <div className="mainlogo">
        <div className="cont1">
          <div className="star">
            <img src={star} className="star1" alt="star1"/>
          </div>
          <h1>EASY WAY TO BANKING</h1>
          <h2>We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.</h2>
          <button className="getstart">
            Get Started
            <img src={button} className="startbutton" alt="button1"/>
          </button>
        </div>
      </div>
    </div>
    <div>
          <img src={heroimage} className="heroimage" alt="heroimage"/>
    </div>
    <div className="classb" alt="bottom class">
      <img src={bottom} className="bottomimage" alt="bottomimage"/>
    </div>
    <div className="feature">
      <h2>all features you need <br></br>in one plaCE</h2>
    </div>
    <div className="mainsecure">
      <div className="secureup">
        <div className="secure">
          <img src={secure} className="securitydiv" alt="securitydiv"/>
          <h2>Secure Online Banking</h2>
        </div>
        <div className="bill">
          <img src={bill} className="billdiv" alt="billdiv"/>
          <h2>Automatic Bill Payment</h2>
        </div>
      </div>
      <div className="securedown">
        <div className="fees">
          <img src={cred1} className="feesdiv" alt="feesdiv"/>
          <h2>No Hidden Fees</h2>
        </div>
        <div className="payments">
          <img src={cred2} className="paymentsdiv" alt="paymentsdiv"/>
          <h2>Card Payments Anytime</h2>
        </div>
      </div>
    </div>
    <div className="digital">
      <div className="housesection">
        <img src={house} className="housediv" alt="housediv"/>
      </div>
      <div className="digitalcontent">
        <h1>Go digital now!</h1>
        <h4>Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today</h4>
        <button className="getstart2">
            Get Started
            <img src={arrow} className="startbutton" alt="button1"/>
          </button>
      </div>
    </div>
    <div className="bussiness">
      <h2>designed for businesses of all sizes</h2>
    </div>
    <div className="images">
      <div className="image1">
        <img src={starblue} className="stardiv" alt="stardiv"/>
        <img src={q1} className="img1div" alt="img1div"/>
        <h2>for small businesses</h2>
      </div>
      <div className="image2">
        <img src={q2} className="img2div" alt="img2div"/>
        <h2>for startups</h2>
      </div>
      <div className="image3">
        <img src={q3} className="img3div" alt="img3div"/>
        <h2>for enterprises</h2>
      </div>
    </div>
    <div className="banking">
      <h2>We take banking personally</h2>
    </div>
    <div className="mob">
      <div className="mobcontent">
        <div className="save">
          <h2>SAVE</h2>
          <h4>We’re using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.</h4>
        </div>
        <div className="spend">
          <h2>SPEND</h2>
          <h4>We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.</h4>
        </div>
        <div className="send">
        <h2>SEND</h2>
        <h4>From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.</h4>
        </div>
      </div>
      <div className="mobimage">
        <img src={mobile} className="mobdiv" alt="mobdiv"/>
      </div>
    </div>
    <div className="trust">trusted by People all over the world</div>
    <div className="comments">
      <div className="comimage">
        <img src={will} className="william" alt="william"/>
        <img src={rebecca} className="rebecca" alt="rebecca"/>
      </div>
      <div className="arrow">
        <buttom className="arrowimg">
          <img src={arr1} className="arrow1div" alt="arrow1div"/>
          <img src={arr2} className="arrow2div" alt="arrow2div"/>
        </buttom>
      </div>
    </div>
    <div className="quest">
      <h2>frequently asked question</h2>
    </div>
    <div className="question">
      <div id="e1" className="que1">
        <h2 id="ih1">How much would it require to open an account ?</h2>
        
        <OpenBelow1 />
      </div>
      <div  id="e2"className="que2">
        <h2 id="ih2">Is there a minimum operational cost ?</h2>
        <OpenBelow2 />
      </div>
      <div id="e3" className="que3">
        <h2 id="ih3">where can i use my debit cards ?</h2>
        <OpenBelow3 />
      </div>
      <div id="e4" className="que4">
        <h2 id="ih4">how much do i get as interest on savings ?</h2>
        <OpenBelow4 />
      </div>
    </div>
    <div className="subscription">
      <div className="subcontent">
        <h2>subscribe to our newsletter for a 10% bonus on transactions</h2>
        <img src={star1} className="subimg" alt="subimg"/>
      </div>
      <div class="buttonIn">
        <input type="email" id="email" name="email" placeholder="Your email address"/>
        <button id="clear" class="mail">SUBSCRIBE</button>
      </div>
    </div>
  </body>
  </>
  );
}

export default App;