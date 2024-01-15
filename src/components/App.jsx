import axios from "axios";
// import Searchbar from "./Searchbar/Searchbar";
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import Modal from "./Modal/Modal";

import { Component } from "react";
import { fetchImages } from "./pixabayApi";



export class App extends Component {
  state = {
    search: '',
    images: [],
  }

  componentDidMount() {
    axios.get(
      'https://pixabay.com/api/?key=40845730-59b552d3cf1577a71be805545&q=cat'
    ).then(({ data })=> {
      console.log(data)
      if (data?.length) {
        this.setState({
          images: data,
        })
      }
    });
  }

  render() {

    const { images } = this.state;

    const elements = images.map(({ id, tags, previewURL }) => (
      <li>
        <h3>{tags}</h3>
        <img src={previewURL} alt="#" />
        <p>{id}</p>
      </li>
    ));
    return (
      <ul>
        {elements}
    </ul>
    )
  }
}
 

// componentDidUpdate(prevProps, prevState){
//  if(this.state.page !== prevState.page || this.state.query!== prevState.query ){
//    fetchImages()
//  }
// }







 
