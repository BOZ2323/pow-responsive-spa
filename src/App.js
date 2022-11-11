import "./App.css";
import Logo from "./images/logo.svg";
import IllustrationIntro from "./images/illustration-intro.svg";

function App() {
  return (
    <div className="App">
      <header className="primary-header">
        <div className="container"></div>
        <a href="http://www.martinbaaske.de">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="primary-navigation">
          <ul className="nav-list">
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
        <button className="button">Get Started</button>
      </header>
      <section>
        <div className="container">
          <div className="even-columns">
            <div>
              <h1 className="fs-primary-heading fw-bold text-accent-400">
                Bring everyone together to build better products.
              </h1>
            </div>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
              view.
            </p>
            <div></div>
          </div>
        </div>
        <div className="container">
          <div>
            <img src={IllustrationIntro} alt="st" />
          </div>
        </div>
      </section>
      <div className="container">
        <div className="even-columns"></div>
        <div>
          <h2 className="fs-secondary-heading fw-bold">What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made
            for modern digital product teams.
          </p>
        </div>
        <div>
          <ul className="numbered-list">
            <li>
              <h3 className="fs-600 fw-bold">Track company-wide progress</h3>
              <p>
                See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone
                level all the way done to the smallest of details. Never lose sight of the bigger picture again.
              </p>
            </li>
            <li>
              <h3 className="fs-600 fw-bold">Advanced built-in reports</h3>
              <p>
                Set internal delivery estimates and track progress toward company goals. Our customisable dashboard
                helps you build out the reports you need to keep key stakeholders informed.{" "}
              </p>
            </li>
            <li>
              <h3 className="fs-600 fw-bold">Everything you need in one place</h3>
              <p>
                Stop jumping from one service to another to communicate, store files, track tasks and share documents.
                Manage offers an all-in-one team productivity solution.{" "}
              </p>
            </li>
          </ul>
        </div>
        <section className="carousel">
          <h2 className="secondary-heading">What they've said</h2>
          {/* Carousel here */}
          <button className="button">Get started</button>
        </section>
      </div>
      <section className="cta | bg-accent-400">
      <div className="even-columns">
        <div>
          {" "}
          <p className="fs-secondary-heading fw-bold text-neutral-100">Simplify how your team works today</p>
        </div>
        <div>
          <button className="button" datatype="inverted">Get started</button>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
