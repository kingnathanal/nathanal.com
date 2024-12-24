import { Container, Navbar } from "react-bootstrap";
import nathanal_logo from "../../assets/nathanallogo.png";

const Header = () => {

    return (
      <Navbar
        expand="sm"
        className="bg-body-tertiary border-bottom bg-black shadow"
        variant="light"
      >
        <Container fluid className="justify-content-center">
          <Navbar.Brand href="#">
            <img src={nathanal_logo} style={{ width: "12rem" }} />
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Header;