import React from "react";
import styles from './imageGalleryItem.module.css';


const ImageGalleryItem = (image) => (
  <li className = {styles.galleryItem} >
    <img src={image.webformatURL} alt='' />
  </li>
);

export default ImageGalleryItem;
