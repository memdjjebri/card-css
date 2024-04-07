import React from "react";
import "./App.css";
import Card from "./components/Card";
qqq
const members = [
  {
    firstName: "Denzel",
    lastName: "Washington",
    image: "https://fr.web.img4.acsta.net/pictures/17/01/24/15/19/303818.jpg",
    job: "Acteur Realisateur ",
    quote: " If you don't trust the pilot, don't go. ",
  },
  {
    firstName: "Julia",
    lastName: "Roberts",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Julia_Roberts_Delivers_Remarks_at_the_2022_Kennedy_Center_Honors_Dinner_%2852542372884%29_%28cropped%29.jpg",
    job: "Actrice",
    quote:
      "You can be true to the character all you want but you've got to go home with yourself!",
  },
];

function App() {
  return (
    <div>
      {members.map((member, index) => (
        <Card key={index} member={member} />
      ))}
    </div>
  );
}
export default App;
