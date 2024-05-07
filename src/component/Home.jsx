import { InfiniteZoomFader } from "infinite-zoom-fader"; // Import the InfiniteZoomFader component
import "./Home.css";
import img1 from "../../src/images/home/image1.png";
import img2 from "../../src/images/home/image2.png";
import moble1 from "../../src/images/home/iloveimg-resized/image1.png"
import moble2 from "../../src/images/home/iloveimg-resized/image2.png"
import { Navbarmenu } from "./navbar/Navbarmenu";
const Home = () => {
  
  const images1 = {
    desktop: [
      {
        src: img1,
        alt: 'Image 1 alt'
      },
      {
        src: img2,
        alt: 'Image 1 alt'
      }
    ],
    mobile: [
      {
        src: moble1,
        alt: 'Mobile image 1 alt'
      },{
        src: moble2,
        alt: 'Mobile image 1 alt'
      }
      
    ]
  }
  const images = [img1, img2]; // Array of images for the InfiniteZoomFader component

  return (
    <div>
      <Navbarmenu/>
      <div className="hero-section" >
        <InfiniteZoomFader
          images={images1}
          zoom="out"
          zoomScale={0.5}
          zoomTime={9}
          zoomMax={0.25}
          zoomTimingFunction="linear"
          transitionTime={1}
        >
          <div className="overlay">
            <div className="company-info">
              <h1>Welcome to P Cube Industries</h1>
              <hr />
              <p className="discription">
                We specialize in eco-friendly paper products, now focusing on
                paper plate materials for food consumption.
              </p>
              <span className="address">
                Address: 123 Main Street, City, Country
              </span>
            </div>
          </div>
        </InfiniteZoomFader>
      </div>
    </div>
  );
};

export default Home;
