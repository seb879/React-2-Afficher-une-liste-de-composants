import React from "react";
import Travel from "./Travel";

// src/Travels.js
const travels = [
{
    destination: "Montreal",
    country: "Canada",
    photo: "https://zupimages.net/up/19/13/pijz.jpg",
    distance: "5843km"
  },
  {
    destination: "Los Angeles",
    country: "USA",
    photo: "https://zupimages.net/up/19/13/dvvp.jpg",
    distance: "9954km"
  },
  {
    destination: "Tokyo",
    country: "Japon",
    photo: "https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/10/n-tokyo-a-20171013-870x581.jpg",
    distance: "9954km"
  },
  {
    destination: "Rome",
    country: "Italie",
    photo: "https://www.les-escapades.fr/wp-content/uploads/2017/09/unnamed-file-700x467.jpg",
    distance: "1290km"
  },
  {
    destination: "Stockholm",
    country: "Suède",
    photo: "https://ssl.viaimage.viafrance.com/img/img-800x450/2/9/4/294949_800x450.jpg",
    distance: "2265km"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
    ))}
  </div>
);

export default Travels;

