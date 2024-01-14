import { Component } from "react";
import styles from './searchbar.module.css';


class Searchbar extends Component {
    state = {
        images: [],
        page: 1,
        per_page: 12, 
    }


    render() {
        return (
          <header className={styles.searchbar}>
            <form className={styles.form}>
              <button type="submit" className={styles.button}>
                <span className={styles.buttonLabel}>Search</span>
              </button>

              <input
                className={styles.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        );
    }
}

export default Searchbar;