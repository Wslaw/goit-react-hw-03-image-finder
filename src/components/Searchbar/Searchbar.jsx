import { Component } from "react";
import styles from './searchbar.module.css';


export default class Searchbar extends Component {
    state = {
        search:'', 
    }


    render() {
        const { search } = this.state;


        return (
          <header className={styles.header}>
            <form className={styles.form}>
              <button type="submit" className={styles.btn}>
                <span className={styles.buttonLabel}>Search</span>
              </button>

              <input
                        className={styles.input}
                        name="search"
                        value={search}
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

 