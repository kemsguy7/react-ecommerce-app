import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Gallery from "../components/Home/Gallery";
import GalleryOne from "../components/Home/GalleryOne";
import galleryItems from "../components/Home/Gallery/galleryItems";



const HomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Gallery items={galleryItems} rows={2} showCarousel={false}/>
      <GalleryOne />
    </>
  );
};

export default HomePage;
