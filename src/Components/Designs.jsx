import React, { useState } from "react";

const Designs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const sections = [
    {
      title: "Pokemon Edition",
      folder: "Pokemon",
      pictures: [
        {
          id: 1,
          src: "src/assets/Pokemon/pikachu.jpg",
          description: "Pikachu",
        },
        // add more pictures here later
        {
          id: 2,
          src: "src/assets/Pokemon/bulbasaur.jpg",
          description: "Bulbasaur",
        },
        {
          id: 3,
          src: "src/assets/Pokemon/charizard.jpg",
          description: "Charizard",
        },
        {
          id: 4,
          src: "src/assets/Pokemon/charmander.jpg",
          description: "Charmander",
        },
      ],
    },
    // add more sections here later
  ];

  const handlePictureClick = (picture) => {
    setSelectedPicture(picture);
    setShowPopup(true);
  };

  const closePopUp = () => {
    setSelectedPicture(null);
    setShowPopup(false);
  };

  return (
    <div className="designs">
      <h1>Available Designs</h1>
      {sections.map((section, index) => (
        <div key={index} className="section">
          <h2>{section.title}</h2>
          <div className="scroll-pictures">
            {section.pictures.map((picture) => (
              <div key={picture.id} className="picture-container">
                <img
                  src={`${picture.src}`}
                  alt={picture.description}
                  onClick={() => handlePictureClick(picture)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {showPopup && (
        <div className="popup">
          <img
            src={`assets/${selectedPicture.folder}/${selectedPicture.src}`}
            alt={selectedPicture.description}
          />
          <p>{selectedPicture.description}</p>
          <button onClick={closePopUp}>Close</button>
          <button>Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Designs;
