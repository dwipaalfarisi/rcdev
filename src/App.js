import React, { useState } from "react";
import "./App.css";

const user = {
  name: "avatar",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Carrot", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? "magenta" : "darkgreen",
    }}
  >
    {product.title}
  </li>
));

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Button clicked {count} times!</button>;
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <p>This is the about page</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"The photo of " + user.name}
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
      <MyButton />
      <AboutPage />
      <ul>{listItems}</ul>
    </div>
  );
}
