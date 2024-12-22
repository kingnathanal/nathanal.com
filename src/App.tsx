import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import nathanal_logo from "./assets/nathanallogo.png";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import jamie from "./assets/jamie.jpg";
import PortfolioBlobs from "./components/PortfolioBlobs/PortfolioBlobs";
import me from "./assets/me.jpg";

function App() {

  return (
    <>
      <Navbar
        expand="sm"
        className="bg-body-tertiary border-bottom bg-black shadow"
        variant="light"
      >
        <Container fluid className="justify-content-center">
          <Navbar.Brand href="#">
            <img src={nathanal_logo} style={{ width: "15rem" }} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div
        className="overlay-box card border-0 rounded-0"
      >
        <img
          src={jamie}
          className="card-img rounded-0 w-100 h-100"
          alt="..."
          style={{ objectFit: "cover", objectPosition: "1000, 1000" }}
        />
        <div
          className="card-img-overlay h-100 w-100 text-center text-white justify-content-top d-flex flex-column"
          style={{ background: "rgba(15, 36, 76, 0.7)" }}
        >
          <h1
            className="card-title fw-lighter m-4"
            style={{ fontSize: "8vw" }}
          >
            High Quality Imagery
          </h1>
          <h3
            className="fw-lighter m-4"
            style={{ fontSize: "4vw", letterSpacing: ".6rem" }}
          >
            Portraits, Lifestyle & Creative Visuals
          </h3>
        </div>
      </div>
      
      <PortfolioBlobs />
      <ScrollButton />
      <div className="container shadow p-5 mt-5 ">
        <div className="row" style={{ maxHeight: "90rem" }}>
          <div className="col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: "90rem" }}>
            <img src={me} className="img-fluid rounded-1" alt="..." />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 " style={{ maxHeight: "90rem" }}>
            <div className="card bg-white border-0">
              <div className="card-body p-0">
                <div className="card-title">
                  <h3 className="fw-lighter mt-2" style={{letterSpacing: ".5rem"}}>William Nathanal Britton</h3>
                </div>
                <p className="card-text lh-lg">
                  
There isn’t anything particularly special about me—just someone who had a camera, a computer, and a copy of Photoshop. I started photography over 10 years ago, hoping to create fantastic art with fantastic people. I love the beauty of portraiture and lifestyle photography, and I’ve been inspired by photographers like Dani Diamond and Lindsey Adler. Thank you for stopping by to check out my work. Although I’m less active in the photography world now, I still love to create. This site is just a small collection of my work that I often like to show off. I hope you enjoy it as much as I do. In the footer of this site will be a link to my Linkedin if I could ever be a help to anyone. <br />
Detroit, Michigan<br /> ✌️
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {
        // the footer
      }
      <footer className="bg-dark text-white py-4 mt-5 border-top">
        <Container fluid className="p-5">
          <div className="row">
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              <h5>Contact</h5>
              <p>Email: hello@nathanal.com</p>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <h5>Connect</h5>
              <div>
                <a href="https://github.com/yourusername" className="text-white me-3">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-white me-3">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <p>&copy; {new Date().getFullYear()} Nathanal. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
