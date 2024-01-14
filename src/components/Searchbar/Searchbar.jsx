import { Component } from "react";

class Searchbar extends Component {
    state = {
        images: [],
        page: 1,
        per_page: 12, 
    }

    
    render() {
        return (
          <header class="searchbar">
            <form class="form">
              <button type="submit" class="button">
                <span class="button-label">Search</span>
              </button>

              <input
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        );
    }
}

export default Searchbar;