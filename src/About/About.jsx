import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "../App.scss";
import { Container } from "react-bootstrap";

function About() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [activeAbout, setActiveAbout] = useState(params.id);

  // useEffect(() => {
  //   if (params.id === "me") {
  //     setActiveAbout("me");
  //     }
  //   if (params.id === 'gamma') {
  //     setActiveAbout("gamma");
  //   }
  // }, [params]);

  return (
    <Container className="about">
      <h5>
        This is a training project by Nina Naumenko in the Gamma Intelligence
        education course.
      </h5>
      <Accordion defaultActiveKey={[activeAbout]}>
        <Accordion.Item eventKey="me">
          <Accordion.Header>
            <Link to="/about/me" className="nav-link">
              About me
            </Link>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              My name is Nina Naumenko. I'm learning front-end development,
              especially React framework. My higher education in IT and many years of
              experience as a brand designer help me with this.
            </p>
            <p>
              <a href="https://github.com/Trunessi"> My GitHub</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="gamma">
          <Accordion.Header>
            <Link to="/about/gamma" className="nav-link">
              About Gamma
            </Link>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Since July 2020, the Gamma Intelligence Training Centre has been
              conducting courses aimed at preparing specialists in the field of
              cutting-edge digital technologies, including software development,
              implementation of digital technologies, automation and
              optimization of business processes, machine learning, data
              analysis, and computer modeling.
            </p>
            <p>
              <a href="https://www.gammatest.net/index.php"> GAMMA site</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default About;
