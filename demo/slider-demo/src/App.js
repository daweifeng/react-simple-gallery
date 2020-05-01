import React from 'react';
import { ImageSlider } from "react-simple-gallery"
import "./App.css"
import "react-simple-gallery/dist/index.css"

function App() {
  const data = [
    { title: "image 1", src: "https://picsum.photos/800/600" },
    { title: "image 2", src: "https://picsum.photos/800/500" },
    { title: "image 3", src: "https://picsum.photos/800/700" },
    { title: "image 4", src: "https://picsum.photos/800/800" },
    { title: "image 5", src: "https://picsum.photos/800/600" },
  ]
  return (
    <div className="App">
      <div className="container">
        <h2>Image Slider Demo</h2>
        <ImageSlider data={data} />
      </div>
    </div>
  );
}

export default App;
