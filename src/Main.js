import React from "react";
import Card from "./ReactCart";
import "./Main.css";
import ReactSearchBar from "./ReactSearchBar";

export default function Main() {
  return (
    <>
      <div className="home">
        <ReactSearchBar />
        <div className="home__section">
          <Card
            src="http://photos.hotelbeds.com/giata/original/01/013569/013569a_hb_a_067.jpg"
            title="Sofitel Washington DC Lafayette Square"
            description="If you want to be transported to another world where the blessings of nature pour upon you, breathing the crisp mountain air by gazing at the breathtaking views, and witnessing the heaven on earth and having the feeling of bliss which is true. Then welcome to Coorg- The Scotland of India."
            price="$700/night"
          />
          <Card
            src="https://www.kayak.co.in/rimg/himg/b6/86/75/leonardo-162255430-chiao-patio-2134-hor-clsc_O-456229.jpg?width=1366&height=768&crop=true"
            title="The Drake Oak Brook, Autograph Collection"
            description="If you want to be transported to another world where the blessings of nature pour upon you, breathing the crisp mountain air by gazing at the breathtaking views, and witnessing the heaven on earth and having the feeling of bliss which is true. Then welcome to Coorg- The Scotland of India."
            price="$600/night"
          />
          <Card
            src="https://www.hospitalitynet.org/picture/xxl_153122150.jpg?t=1608282683"
            title="Four Seasons Hotel Bangkok at Chao Phraya River"
            description="If you want to be transported to another world where the blessings of nature pour upon you, breathing the crisp mountain air by gazing at the breathtaking views, and witnessing the heaven on earth and having the feeling of bliss which is true. Then welcome to Coorg- The Scotland of India."
            price="$500/night"
          />
          <Card
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/00/40/36/the-marker-hotel.jpg?w=700&h=-1&s=1"
            title="The Marker Hotel Dublin"
            description="If you want to be transported to another world where the blessings of nature pour upon you, breathing the crisp mountain air by gazing at the breathtaking views, and witnessing the heaven on earth and having the feeling of bliss which is true. Then welcome to Coorg- The Scotland of India."
            price="$400/night"
          />
          <Card
            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/cb/26/14/airelles-saint-tropez.jpg"
            title="Airelles Saint-Tropez, Pan Dei Palais"
            description="If you want to be transported to another world where the blessings of nature pour upon you, breathing the crisp mountain air by gazing at the breathtaking views, and witnessing the heaven on earth and having the feeling of bliss which is true. Then welcome to Coorg- The Scotland of India."
            price="$300/night"
          />
          <Card
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/59/90/8e/shangri-la-bosphorus.jpg?w=700&h=-1&s=1"
            title="Shangri-La Bosphorus, Istanbul"
            description="If you want to be transported to another world where the blessings of nature pour upon you, breathing the crisp mountain air by gazing at the breathtaking views, and witnessing the heaven on earth and having the feeling of bliss which is true. Then welcome to Coorg- The Scotland of India."
            price="$200/night"
          />
        </div>
      </div>
    </>
  );
}
