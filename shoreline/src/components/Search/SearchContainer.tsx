import Searchbar from "./Searchbar";
import Stock from "./Stock";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const SearchContainer: React.FunctionComponent = () => {
  return (
    <Row className="row-search">
      <Searchbar />
      <Stock />
    </Row>
  );
};

export default SearchContainer;
