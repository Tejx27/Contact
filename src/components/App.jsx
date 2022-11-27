import React from "react";
import Card from "./Card.jsx";
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Tejas Nikam"
        img="https://picsum.photos/200/300"
        tel="9595729100"
        gmail="contactTejas@gmail.com"
      />
      <Card
        name="Suraj More"
        img="https://picsum.photos/200/300"
        tel="7666001508"
        gmail="contactSuraj@gmail.com"
      />
      <Card
        name="Suraj Mahind"
        img="https://picsum.photos/200/300"
        tel="9307999968"
        gmail="contactSurajpm@gmail.com"
      />
      <Card
        name="Anil Shirtode"
        img="https://picsum.photos/200/300"
        tel="8265064647"
        gmail="contactAnil@gmail.com"
      />
      <Card
        name="Kishor Maske"
        img="https://picsum.photos/200/300"
        tel="8805138667"
        gmail="contactKishore@gmail.com"
      />
    </div>
  );
}

export default App;
