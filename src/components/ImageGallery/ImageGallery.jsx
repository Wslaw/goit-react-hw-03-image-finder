import { Component } from "react";


class ImageGallery extends Component {
  state = {
    search: '',
    images: [
      {
        total: 24390,
        totalHits: 500,
        hits: [
          {
            id: 736877,
            pageURL:
              'https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/',
            type: 'photo',
            tags: 'tree, animal, cat',
            previewURL:
              'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg',
            previewWidth: 150,
            previewHeight: 100,
            webformatURL:
              'https://pixabay.com/get/gcbc7dd90cce5a498e430cac1d518778f4f2e1da8dd2363b15c61d7297fe4bef974fa75e0a7e182c9103c55cf720a0534_640.jpg',
            webformatWidth: 640,
            webformatHeight: 427,
            largeImageURL:
              'https://pixabay.com/get/g885bdf0362480f339eeeb4ee0cb15e325266c2431aab2c93ca60b5abe69db64ffaac33f16877b4fadc3074bbfd2ae668a67e6861676fdd580616133f51e85403_1280.jpg',
            imageWidth: 1920,
            imageHeight: 1282,
            imageSize: 97150,
            views: 1482813,
            downloads: 800611,
            collections: 2763,
            likes: 3263,
            comments: 616,
            user_id: 909086,
            user: 'Bessi',
            userImageURL:
              'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
          },
          {
            id: 4611189,
            pageURL:
              'https://pixabay.com/photos/kitten-cat-pet-feline-animal-fur-4611189/',
            type: 'photo',
            tags: 'kitten, nature, cat',
            previewURL:
              'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_150.jpg',
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              'https://pixabay.com/get/gba3c2ed71785a5d7326632ae91353ba903a0382a0f68f64648db2ca687b6174bd994647291919293ca5a214ae6501fc6b833458fd1fe67831983c3f6720f63b1_640.jpg',
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              'https://pixabay.com/get/g403629b363fa6a815cddca9b074ded16987318359ca6d00822a3b422673525caf54a171131f403c5d9c447f37c927e2740036d8c5619042f913a8fb2951ae735_1280.jpg',
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 3885974,
            views: 468413,
            downloads: 354616,
            collections: 942,
            likes: 1033,
            comments: 187,
            user_id: 9285194,
            user: 'guvo59',
            userImageURL:
              'https://cdn.pixabay.com/user/2023/06/15/05-00-59-993_250x250.jpg',
          },
          {
            id: 1192026,
            pageURL:
              'https://pixabay.com/photos/cat-kitten-pet-striped-young-1192026/',
            type: 'photo',
            tags: 'cat, kitten, pet',
            previewURL:
              'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_150.jpg',
            previewWidth: 150,
            previewHeight: 112,
            webformatURL:
              'https://pixabay.com/get/ge98212c6741160c0f916702f29c96ff7f3172bed069827999b09a2451994a93617dddd70dbd1a2e94936f031b9aaed9453060bf154f8b8dad9eb6d24511cde92_640.jpg',
            webformatWidth: 640,
            webformatHeight: 480,
            largeImageURL:
              'https://pixabay.com/get/g2d2457c5064f7f4e0dbe7952f6d0032c207c94148b592a779940c9ed68ee2d25a2eeeff730d0fa5f606f14811c69e8c46accd7519406e4d3a840ea3cfcd78d79_1280.jpg',
            imageWidth: 2560,
            imageHeight: 1920,
            imageSize: 909777,
            views: 511597,
            downloads: 315439,
            collections: 970,
            likes: 998,
            comments: 150,
            user_id: 1892688,
            user: 'Chiemsee2024',
            userImageURL:
              'https://cdn.pixabay.com/user/2022/05/10/07-03-44-588_250x250.jpg',
          },
          {
            id: 2934720,
            pageURL:
              'https://pixabay.com/photos/cat-kitten-pets-animals-housecat-2934720/',
            type: 'photo',
            tags: 'cat, animal, kitten',
            previewURL:
              'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_150.jpg',
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              'https://pixabay.com/get/g81e61c5058f995533f2fd7f4fd80d18fc740f13c4ea2fec6a9558b7faa8038946005e7ac03d268c11f76631d711425f6a9db8914904aea8ec3f1ff804430a5e2_640.jpg',
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              'https://pixabay.com/get/gdcc72ddda839bf19a5adf033ab8a372b5cb405275e6a54b6c0ebd1dbe8d81647264f443158e24ca2945c0a697564dd36bce2fb3d16446514e109a1013c82a7e0_1280.jpg',
            imageWidth: 3495,
            imageHeight: 2330,
            imageSize: 1971228,
            views: 660445,
            downloads: 405349,
            collections: 1293,
            likes: 1511,
            comments: 253,
            user_id: 6995361,
            user: 'Kirgiz03',
            userImageURL:
              'https://cdn.pixabay.com/user/2017/11/14/22-33-33-341_250x250.jpg',
          },
          {
            id: 2948404,
            pageURL:
              'https://pixabay.com/photos/kitty-playful-flowers-wildflowers-2948404/',
            type: 'photo',
            tags: 'kitty, playful, flowers',
            previewURL:
              'https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_150.jpg',
            previewWidth: 150,
            previewHeight: 101,
            webformatURL:
              'https://pixabay.com/get/g916164ec2fb17658c25b214fc27a69ac044fd4b179d7532c792619a013ca892935c50f7880862408bf6aab965d7aa4e178d521191e9b9549cfa18c79e7a2e4c7_640.jpg',
            webformatWidth: 640,
            webformatHeight: 433,
            largeImageURL:
              'https://pixabay.com/get/gd95cfe518ffa35448ca88c854777b5c0720c1af629d9713762a18d2a5367179eda390b1ac65df7a2dfa7ea5640d46602dde4065511709f6dd46bac19edec07b2_1280.jpg',
            imageWidth: 4056,
            imageHeight: 2746,
            imageSize: 3464997,
            views: 753038,
            downloads: 503763,
            collections: 1038,
            likes: 1295,
            comments: 175,
            user_id: 3558510,
            user: 'IlonaBurschl',
            userImageURL:
              'https://cdn.pixabay.com/user/2022/05/30/08-07-40-119_250x250.jpg',
          },
          {
            id: 1508613,
            pageURL:
              'https://pixabay.com/photos/cat-tabby-face-whiskers-pet-1508613/',
            type: 'photo',
            tags: 'cat, tabby, face',
            previewURL:
              'https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg',
            previewWidth: 150,
            previewHeight: 110,
            webformatURL:
              'https://pixabay.com/get/g33b90325378a4ca2ea598b696cbe0095f160b64b968fcc1f6f0d9cecca43ffc8ff7d1fcf2cea3e77767f7fda9a6a1690930ce49c531d1de7723c58dca8ecadad_640.jpg',
            webformatWidth: 640,
            webformatHeight: 472,
            largeImageURL:
              'https://pixabay.com/get/g9d29264461cad7f5ca50a8b954473459ba52140389998e1eea16e12aed343c72bf23341f1552997eb071e74e58a8384a4d77a1fe3ef7875bedddf7765d95ee99_1280.jpg',
            imageWidth: 2894,
            imageHeight: 2135,
            imageSize: 1630104,
            views: 407765,
            downloads: 266078,
            collections: 1043,
            likes: 1053,
            comments: 137,
            user_id: 127419,
            user: 'cocoparisienne',
            userImageURL:
              'https://cdn.pixabay.com/user/2023/10/15/14-40-46-737_250x250.jpeg',
          },
          {
            id: 4611189,
            pageURL:
              'https://pixabay.com/photos/kitten-cat-pet-feline-animal-fur-4611189/',
            type: 'photo',
            tags: 'kitten, nature, cat',
            previewURL:
              'https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_150.jpg',
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              'https://pixabay.com/get/gba3c2ed71785a5d7326632ae91353ba903a0382a0f68f64648db2ca687b6174bd994647291919293ca5a214ae6501fc6b833458fd1fe67831983c3f6720f63b1_640.jpg',
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              'https://pixabay.com/get/g403629b363fa6a815cddca9b074ded16987318359ca6d00822a3b422673525caf54a171131f403c5d9c447f37c927e2740036d8c5619042f913a8fb2951ae735_1280.jpg',
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 3885974,
            views: 468413,
            downloads: 354616,
            collections: 942,
            likes: 1033,
            comments: 187,
            user_id: 9285194,
            user: 'guvo59',
            userImageURL:
              'https://cdn.pixabay.com/user/2023/06/15/05-00-59-993_250x250.jpg',
          },
          {
            id: 1192026,
            pageURL:
              'https://pixabay.com/photos/cat-kitten-pet-striped-young-1192026/',
            type: 'photo',
            tags: 'cat, kitten, pet',
            previewURL:
              'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_150.jpg',
            previewWidth: 150,
            previewHeight: 112,
            webformatURL:
              'https://pixabay.com/get/ge98212c6741160c0f916702f29c96ff7f3172bed069827999b09a2451994a93617dddd70dbd1a2e94936f031b9aaed9453060bf154f8b8dad9eb6d24511cde92_640.jpg',
            webformatWidth: 640,
            webformatHeight: 480,
            largeImageURL:
              'https://pixabay.com/get/g2d2457c5064f7f4e0dbe7952f6d0032c207c94148b592a779940c9ed68ee2d25a2eeeff730d0fa5f606f14811c69e8c46accd7519406e4d3a840ea3cfcd78d79_1280.jpg',
            imageWidth: 2560,
            imageHeight: 1920,
            imageSize: 909777,
            views: 511597,
            downloads: 315439,
            collections: 970,
            likes: 998,
            comments: 150,
            user_id: 1892688,
            user: 'Chiemsee2024',
            userImageURL:
              'https://cdn.pixabay.com/user/2022/05/10/07-03-44-588_250x250.jpg',
          },
        ],
      },
    ],
  };

  render() {
    const { images } = this.state;
    const items = images[0].hits.map(({ id, pageURL, userImageURL, tags }) => (
      <li className="ImageGalleryItem">
        {/* <h3>{total}</h3> */}
        <img
          className="ImageGalleryItem-image "
          src={userImageURL}
          alt={tags}
        />
        {/* <h2>{totalHits}</h2> */}
        {/* <p>{hits}</p> */}
      </li>
    ));
    // const elements = images.map(
    //   ({ id, total,totalHits, hits, pageUrl, tags, webformatURL, userImageURL }) => (

    //   )
    // );

    return <ul className="ImageGallery">{items}</ul>;
  }
}

export default ImageGallery;
