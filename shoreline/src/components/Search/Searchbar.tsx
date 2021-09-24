import { useState, Dispatch, SetStateAction } from "react";
import Row from "react-bootstrap/Row";
import styles from "./Search.module.css";
interface SearchProps {
  setQuery: Dispatch<SetStateAction<string>>;
  setDuration: Dispatch<SetStateAction<string>>;
}

const Searchbar = (props: SearchProps) => {
  const [query, setQuery] = useState("");
  const [duration, setDuration] = useState("Daily");

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleDurationChange = (e: any) => {
    setDuration(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setQuery(query);
    props.setDuration(duration);
  };

  const options = ["Daily", "Weekly", "Monthly"];

  return (
    <Row className="justify-content-md-center">
      <form onSubmit={handleSubmit} id="search">
        <input
          onChange={handleQueryChange}
          className={`${styles.noSelect} ${styles.searchField}`}
          type="text"
          id="text"
          placeholder="Enter valid stock ticker"
        />
        <select
          className={`${styles.noSelect} ${styles.searchField}`}
          name="duration"
          id="duration"
          onChange={handleDurationChange}
          value={duration}
        >
          {options.map((item, key) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </Row>
  );
};

export default Searchbar;
