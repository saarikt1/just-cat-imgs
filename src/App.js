import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001";

function App() {
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get(baseUrl);
        setImage(response.data);
        console.log("Image set", response.data.alt_description);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };

    if (!image) {
      getImage();
    }
  }, [image]);

  return (
    <div>
      {image && <img src={image.urls.small} alt={image.alt_description} />}
    </div>
  );
}

export default App;
