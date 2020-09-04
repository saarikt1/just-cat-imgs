import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseUrl = "http://localhost:3001";

const imageObj = {
  description: "a female adult cat walking in fall leaves.",
  urls: {
    raw:
      "https://images.unsplash.com/photo-1580253784018-8b2c4a9034c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2Mjk4M30",
    full:
      "https://images.unsplash.com/photo-1580253784018-8b2c4a9034c2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE2Mjk4M30",
    regular:
      "https://images.unsplash.com/photo-1580253784018-8b2c4a9034c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2Mjk4M30",
    small:
      "https://images.unsplash.com/photo-1580253784018-8b2c4a9034c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2Mjk4M30",
    thumb:
      "https://images.unsplash.com/photo-1580253784018-8b2c4a9034c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE2Mjk4M30",
  },
  user: {
    username: "photographyurway",
    name: "Diana Orey",
  },
};

function App() {
  const [image, setImage] = useState(imageObj);

  // useEffect(() => {
  //   const getImage = async () => {
  //     if (localStorage.getItem("image")) {
  //       setImage(JSON.parse(localStorage.getItem("image")));
  //     }
  //     try {
  //       const response = await axios.get(baseUrl);
  //       if (!localStorage.getItem("image")) {
  //         setImage(response.data);
  //       }
  //       localStorage.setItem("image", JSON.stringify(response.data));
  //     } catch (error) {
  //       console.log("ERROR: ", error);
  //     }
  //   };

  //   if (!image) {
  //     getImage();
  //   }
  // }, [image]);

  return (
    <div className="container">
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      {/* {
        <img
          src={
            "https://images.unsplash.com/photo-1580253784018-8b2c4a9034c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2Mjk4M30"
          }
          alt="a female adult cat walking in fall leaves"
        />
      } */}
      <p id="credit">
        Photo by{" "}
        <a
          href={
            "https://unsplash.com/@" +
            image.user.username +
            "?utm_source=just_cat_imgs&utm_medium=referral"
          }
        >
          {image.user.name}
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/?utm_source=just_cat_imgs&utm_medium=referral">
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default App;
