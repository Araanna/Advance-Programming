import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Home = () => {
  return (
    <>
      <h1 className="red-color">Hello World!</h1>
      <h1>Please Good to me.</h1>
      <Image
        src={"/assets/images/cyberpunk.png"}
        alt="itsmela"
        width={300}
        height={200}
      ></Image>
      <br />
      <Link href={"/about"}>About</Link>
      <br />
      <Link href={"/blogs"}>Blogs</Link>
      <br />
      <Link href={"/contact"}>Contact Us</Link>
      <br />
      <Link href={"/news"}>News</Link>
      <br />

      <Button variant="primary">Click me</Button>
      <br />
      <Container>
        <h1>React Bootstrap </h1>
        <Row>
          <Col lg={2} style={{ backgroundColor: "red" }}>
            r1 c1
          </Col>
          <Col
            lg={8}
            style={{ backgroundColor: "blue" }}
            className="text-center"
          >
            <Image
              src={"/assets/images/cat.gif"}
              alt="cat"
              height={200}
              width={300}
            ></Image>
          </Col>
          <Col lg={2} style={{ backgroundColor: "red" }}>
            r1 c3
          </Col>
        </Row>
        <Row>
          <Col lg={4} style={{ backgroundColor: "red" }}>
            r1 c1
          </Col>
          <Col lg={8} style={{ backgroundColor: "blue" }}>
            r1 c2
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
