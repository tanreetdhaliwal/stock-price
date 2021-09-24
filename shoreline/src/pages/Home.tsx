import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Home.module.css";

import Sidebar from "../components/Sidebar/Sidebar";
import SearchContainer from "../components/Search/SearchContainer";

const Home = () => {
  return (
    <Container fluid className={styles.cont}>
      <Row className={styles.rows}>
        <Col className={styles.leftCol} lg={2}>
          <Sidebar />
        </Col>
        <Col className={styles.rightCol} lg={10}>
          <SearchContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
