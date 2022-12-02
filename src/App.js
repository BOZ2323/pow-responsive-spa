import "./App.css";
import IllustrationIntro from "./images/illustration-intro.svg";
import Logo from "./images/logo.svg";
import LogoInverted from "./images/logo-2.svg";
import NavButton from "./components/NavButton";
import youtubeIcon from "./images/social-icons-svgs/icon-youtube.svg"
import pinterestIcon from "./images/social-icons-svgs/icon-pinterest.svg"
import instagramIcon from "./images/social-icons-svgs/icon-instagram.svg"
import facebookIcon from "./images/social-icons-svgs/icon-facebook.svg"
import twitterIcon from "./images/social-icons-svgs/icon-twitter.svg"

function App() {
  return (
    <>
      <div className="App">
        <header className="primary-header padding-block-400">
          <div className="container">
            <div className="nav-wrapper">
              {" "}
              <a href="http://www.martinbaaske.de">
                <img src={Logo} alt="Logo" />
              </a>
              <div>
                {" "}
                <NavButton />
              </div>
              <nav className="primary-navigation" id="primary-navigation">
                <ul className="primary-nav-list">
                  <li>
                    <a href="Pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="Product">Product</a>
                  </li>
                  <li>
                    <a href="About">About Us</a>
                  </li>
                  <li>
                    <a href="Career">Career</a>
                  </li>
                  <li>
                    <a href="Community">Community</a>
                  </li>
                </ul>
              </nav>
              <button className="button | display-sm-none .display-md-inline-flex">Get Started</button>
            </div>
          </div>
        </header>
        <main>
          <section className="padding-block-400">
            <div className="container">
              <div className="even-columns">
                <div>
                  <h1 className="fs-primary-heading fw-bold">Bring everyone together to build better products.</h1>
                  <p>
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team
                    goals in view.
                  </p>
                  <button className="button">Get Started</button>
                </div>
                <div>
                  <img src={IllustrationIntro} alt="st" />
                </div>
              </div>
            </div>
          </section>
          <section className="padding-block-400">
            <div className="container">
              <div className="even-columns">
                <div>
                  <h2 className="fs-secondary-heading fw-bold">What's different about Manage?</h2>
                  <p>
                    Manage provides all the functionality your team needs, without the complexity. Our software is
                    tailor-made for modern digital product teams.
                  </p>
                </div>
                <div>
                  <ul className="numbered-list">
                    <li>
                      <h3 className="fs-600 fw-bold">Track company-wide progress</h3>
                      <p>
                        See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the
                        milestone level all the way done to the smallest of details. Never lose sight of the bigger
                        picture again.
                      </p>
                    </li>
                    <li>
                      <h3 className="fs-600 fw-bold">Advanced built-in reports</h3>
                      <p>
                        Set internal delivery estimates and track progress toward company goals. Our customisable
                        dashboard helps you build out the reports you need to keep key stakeholders informed.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="fs-600 fw-bold">Everything you need in one place</h3>
                      <p>
                        Stop jumping from one service to another to communicate, store files, track tasks and share
                        documents. Manage offers an all-in-one team productivity solution.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="carousel | padding-block-700">
            <h2 className="fs-secondary-heading fw-bold">What they've said</h2>
            {/* Carousel here */}
            <button className="button">Get started</button>
          </section>

          <section class="cta | padding-block-900 bg-accent-400 text-neutral-100">
            <div class="container">
              <div class="even-columns vertical-align-center">
                <div>
                  <p class="fs-primary-heading fw-bold">Simplify how your team works today.</p>
                </div>
                <div class="justify-self-end-md">
                  <button class="button inverted">Get Started</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="primary-footer | padding-block-700 bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="primary-footer-wrapper">
            <div className="primary-footer-logo-social">
            <div>
              {" "}
              <a href="http://www.martinbaaske.de">
                <img src={LogoInverted} alt="Logo"/>
              </a>
            </div>
           
              <ul className="social-list" aria-label="Social links">
                <li>
                  <a aria-label="youtube" href="">
               
                   
                  <img className="social-icon" src={youtubeIcon} alt="Logo" />
                   
                  </a>
                </li>
                <li>
                  <a aria-label="twitter" href="">
                  <img  className="social-icon" src={twitterIcon} alt="Logo" />
                  </a>
                </li>
                <li>
                  <a aria-label="facebook" href="">
                  <img className="social-icon" src={facebookIcon} alt="Logo" />
                  </a>
                </li>
                <li>
                  <a aria-label="instagram" href="">
                  <img className="social-icon" src={instagramIcon} alt="Logo" />
                  </a>
                </li>
                <li>
                  <a aria-label="pinterest" href="">
                  <img  className="social-icon" src={pinterestIcon} alt="Logo" />
                  </a>
                </li>
               
                
              </ul>
         
            </div>
            <div className="primary-footer-nav">
              <nav className="footer-nav">
                <ul aria-label="Footer" className="flow">
                  <li>
                    <a href="Home">Home</a>
                  </li>
                  <li>
                    <a href="Pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="Products">Products</a>
                  </li>
                  <li>
                    {" "}
                    <a href="About">About Us</a>
                  </li>
                  <li>
                    <a href="Careers">Careers</a>
                  </li>
                  <li>
                    <a href="Community">Community</a>
                  </li>
                  <li>
                    <a href="Privacy-Policy">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="primary-footer-form">
              <div>
              <input className="button inverted" type="email" placeholder="Updates in your inbox" />
              <button className="button">Go</button>
              </div>
              <p className="copyright">Copyright 2020. All Rights Reserved</p>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
