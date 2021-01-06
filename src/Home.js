import React, { useEffect, useState } from "react";
import Product from "./Product.js";
import "./Home.css";
function Home() {
  let array = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/December/Bigbrandsale/Men/GW/GW_PC_BUNK_MFW_1500x600_new-eng._CB412327820_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/AugustShopping_Week_1500x600._CB406224931_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/0.7ML/DesktopHero_reward_1500x600_3._CB413832255_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/PSW/PSW_DesktopMaster_1500x600-Prime._CB413743831_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/GWherotator/GW_pc/2._CB414092345_.jpg"
  ];
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState(array[index]);
  const n = array.length;
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % n);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  });
  useEffect(() => {
    setUrl(array[index]);
  }, [index]);
  return (
    <div className="home">
      <div className="home_container">
        <img src={url} alt="amazon banner" className="amazon_image" />
        <div className="home_row">
          {/**Product */}
          <Product
            title="FashCloud Men's Regular Fit Multi Color Polo T Shirt"
            image="https://images-na.ssl-images-amazon.com/images/I/61lzDg21uyL._UL1070_.jpg"
            price="300"
            rating="4"
          />
          {/**Product */}
          <Product
            title="Casio CTK-2550 61-Key Portable Keyboard"
            image="https://m.media-amazon.com/images/I/31F3zQpBRrL.jpg"
            price="6745"
            rating="5"
          />
        </div>
        <div className="home_row">
          {/**Product */}
          <Product
            title="POLESTAR XPLORE 55 ltrs with Rain Cover Rucksack Hiking Backpack. Backpack for traveling"
            image="https://images-na.ssl-images-amazon.com/images/I/910go3oR3-L._SL1500_.jpg"
            price="826"
            rating="4"
          />
          {/**Product */}
          <Product
            title="Kidsmall Body Gym Exercise Cycle for Weight Loss at Home and be Healthy"
            image="https://images-na.ssl-images-amazon.com/images/I/51puCzgEBlL._SL1024_.jpg"
            price="9990"
            rating="5"
          />
          {/**Product */}
          <Product
            title="AmazonBasics Nylon Braided USB A to Lightning Compatible Cable - Apple MFi Certified - Dark Grey (3 Feet/0.9 Meter)"
            image="https://images-na.ssl-images-amazon.com/images/I/71p11135VSL._SL1500_.jpg"
            price="759"
            rating="4"
          />
        </div>
        <div className="home_row">
          <Product
            title="Amazon Brand - Solimo Microfiber Reversible Comforter, Single (Aqua Blue & Olive Green, 200 GSM)"
            image="https://m.media-amazon.com/images/I/81Vzm0NAr8L._AC_UL480_FMwebp_QL65_.jpg"
            price="999"
            rating="4"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
