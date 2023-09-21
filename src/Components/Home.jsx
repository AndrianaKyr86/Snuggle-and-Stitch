import React from "react";
import "./Home.css"; // Make sure this file includes your styling rules

export default function Home() {
  return (
    <div className="contOne">
      {/* this is the hero section where at the moment I am hosting two things
    the heroImage and the hero text. In the herosection I have added the background img 
    but I am not sure this is correct anymore as I can not adjust
    the elements how I want
    Let's try and do again the img on the heroImage instead of background */}
      <div className="heroSection">
        {/* this is the image that I am having trouble to resize */}
        <div className="heroImage">
          <img
            className="kitty"
            src="src/assets/KittyTrans.jpg"
            alt="Image of a black cat on watercolor background"
          />
        </div>
        {/* anf the text where I cannot find how to put the next to each other and share an equal space */}
        <div className="heroText">
          <h1>Welcome to Snuggle & Stitch</h1>
          <p>
            Handcrafted with love, our crocheted animals and dolls bring joy to
            kids and adults alike. Explore our collection and find your perfect
            cuddle companion.
          </p>
          {/* the button needs to be under both the heroImage and heroText and in the center as it is now */}
          <button className="shopNowButton">Shop Now</button>
        </div>
      </div>

      {/* this is where we start with the cards for the benefits */}
      <div className="benefits">
        <h2>Why Choose Snuggle & Stitch</h2>
        <p>
          Discover the magic of handmade crafts. Each creation is meticulously
          crafted to bring warmth and smiles to your life.
        </p>
        <div className="benefitCards">
          <div className="beneCard">
            <img src="src/assets/uni.jpeg" alt="Handcrafted Icon" />
            <h3>Handcrafted with Care</h3>
            <p>Every stitch is an expression of creativity and dedication.</p>
          </div>
          <div className="beneCard">
            <img src="src/assets/froggy.jpeg" alt="Quality Icon" />
            <h3>Premium Quality</h3>
            <p>We use the finest materials to ensure lasting enjoyment.</p>
          </div>
          <div className="beneCard">
            <img src="src/assets/hippos.jpeg" alt="Unique Icon" />
            <h3>Uniquely Yours</h3>
            <p>Each creation carries its own charm and personality.</p>
          </div>
        </div>
      </div>

      {/* I want here to add a carousel but I will make a different component for it */}
    </div>
  );
}
