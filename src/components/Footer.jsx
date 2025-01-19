import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">&copy; {new Date().getFullYear()} WeatherApp. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">
              Built with 
              <span> <FaHeart/> created by Laiba Qazi</span> and WeatherAPI.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
