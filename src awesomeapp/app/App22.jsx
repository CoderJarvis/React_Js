import React from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
//css include

export default function App22() {
  return (
    <>
      <Heading head="My Favorite Web Series" />

      <div className=" netflix">
        <Card img="https://wallpapercave.com/wp/wp4056410.jpg" 
        title="Dark"
        link="https://www.netflix.com/in/title/80100172" />
        <Card
          img="https://wallpapercave.com/wp/wp6042721.jpg"
          title="Kota Factory"
          link="https://www.netflix.com/in/title/81249783"
        />

        <Card
          img="https://wallpapercave.com/wp/wp2971732.jpg"
          title="Death Note"
          link="https://www.netflix.com/in/title/70204970"
        />

        <Card
          img="https://wallpapercave.com/wp/wp4275043.jpg"
          title="Game of thrones"
          link="https://www.hbo.com/game-of-thrones"
        />

        <Card
          img="https://wallpapercave.com/wp/wp9920339.jpg"
          title="Squid Game"
          link="https://www.netflix.com/in/title/81040344"
        />

        <Card
          img="https://wallpapercave.com/wp/wp6201564.jpg"
          title="Money Heist"
          link="https://www.netflix.com/in/title/80192098"
        />

        <Card
          img="https://wallpapercave.com/wp/wp1839617.jpg"
          title="Strenger Things"
          link="https://www.netflix.com/in/title/80057281"
        />
      </div>
    </>
  );
}
