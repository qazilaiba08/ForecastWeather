import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1>About Us</h1>
          <p className="text-muted">
            Welcome to WeatherPro, your trusted source for accurate weather updates and forecasts.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Our Mission</Card.Header>
            <Card.Body>
              <Card.Text>
                At WeatherPro, our mission is to deliver precise and up-to-date weather information to help you plan your days better.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Key Features</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Real-time weather updates</ListGroup.Item>
              <ListGroup.Item>7-day and hourly forecasts</ListGroup.Item>
              <ListGroup.Item>Interactive charts and severe weather alerts</ListGroup.Item>
              <ListGroup.Item>Easy-to-use city search functionality</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header as="h5">Technology Stack</Card.Header>
            <Card.Body>
              <Card.Text>
                Our app is built using the following technologies:
              </Card.Text>
              <ul>
                <li>React for the front-end interface</li>
                <li>OpenWeatherMap API for weather data</li>
                <li>React Bootstrap for responsive design</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header as="h5">Contact Us</Card.Header>
            <Card.Body>
              <Card.Text>
                Have questions or feedback? Reach out to us at:
              </Card.Text>
              <p>
                Email: <a href="mailto:support@weatherapi.com">support@weatherpro.com</a>
              </p>
              <p>
                Follow us on social media:<FaLinkedin /> <FaInstagram /> <FaGithub />
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
