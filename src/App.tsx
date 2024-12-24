import ScrollButton from "./components/ScrollButton/ScrollButton";
import jamie from "./assets/jamie_clean.jpg";
import PortfolioBlobs from "./components/PortfolioBlobs/PortfolioBlobs";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Header from "./components/Header/Header";


function App() {
  const css = `
    .card-height {
      height: 80vh;
    }

    @media (max-width: 768px) {
      .card-height {
        height: 80vh;
      }
    }

    @media (max-width: 576px) {
      .card-height {
          height: 93vh;
      }
    }
  `;
  return (
    <>
      <style scoped>{css}</style>
      <Header />
      
      <div className="overlay-box border-0 rounded-0 card card-height">
        <img
          src={jamie}
          className="card-img rounded-0 w-100 h-100"
          alt="..."
          style={{ objectFit: "cover", objectPosition: "1000, 1000" }}
        />
        <div
          className="card-img-overlay h-100 w-100 text-center text-white justify-content-center d-flex flex-column"
          style={{ background: "rgba(1, 26, 61, 0.8)" }}
        >
          <h3
            className="fw-lighter m-4 advent-pro-header fs-3"
            style={{ fontSize: "4vw", letterSpacing: ".6rem" }}
          >
            Nathanal Photography
          </h3>
          <h4
            className="card-title fw-lighter m-4 advent-pro-header"
            style={{ fontSize: "8vw", fontWeight: "0" }}
          >
            High Quality Imagery
          </h4>
          <h3
            className="fw-lighter m-4 advent-pro-header fs-3"
            style={{ fontSize: "4vw", letterSpacing: ".6rem" }}
          >
            Portraits, Lifestyle & Creative Visuals
          </h3>
        </div>
      </div>

      <PortfolioBlobs />
      <About />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
