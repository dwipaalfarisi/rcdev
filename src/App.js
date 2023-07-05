import React from "react";
import "./App.css";

const user = {
  name: "avatar",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function MyButton() {
  return <button>Click me!</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>This is the about page</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>My App</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}
