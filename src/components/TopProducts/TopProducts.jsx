import React from "react";
import Img1 from "../../assets/shirts/shirt.png"
import Img2 from "../../assets/shirts/shirt2.png"
import Img3 from "../../assets/shirts/shirt3.png"
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/*Header section*/}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            corporis nesciunt veritatis.
          </p>
        </div>
        {/*Body section*/}
        <div className="grid grid-cols-1 smÇgrid-cols-2 mdÇgrid-cols-3 gap-20 mdÇgap-5 place-items-center">
          {
          ProductsData.map((data) => (
            <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
            hover:text-white relative shadow-xl duration-300 group max-w-[300px]">   
                <div>
                    <img src={data.img} alt="" 
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300
                    drop-shadow-md"/>
                </div>
                {/* details section */}
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
