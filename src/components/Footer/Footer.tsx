import { Container} from "react-bootstrap";

const Footer = () => {

    return (
        <footer className="bg-dark text-white py-4 mt-5 border-top">
        <Container fluid className="p-5">
          <div className="row">
            <div className="col-md-4 text-center mb-3">
              <a
                href="https://github.com/kingnathanal"
                className="text-white me-3"
              >
                GitHub
              </a>
            </div>

            <div className="col-md-4 text-center justify-content-center">
              <p>
                &copy; {new Date().getFullYear()} HyyerCode <br /> William
                Nathanal Britton JR
              </p>
            </div>
            <div className="col-md-4 text-center">
              <a
                href="https://www.linkedin.com/in/brittonwilliam/"
                className="text-white me-3"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </footer>
    );
}

export default Footer;