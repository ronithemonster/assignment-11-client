import React from "react";
import { BiShoppingBag, BiSupport } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="my-container rounded-md">
        <div className="carousel h-[550px] w-full rounded-md">
      <div id="slide1" className="carousel-item relative w-full rounded-md">
        <img
          src="https://www.thesouthafrican.com/wp-content/uploads/2020/08/6686c940-lando-norris-mclaren-800x529.jpg"
          className="w-full"
        />
        <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 pl-10 w-1/2">
            <h3 className="text-5xl font-semibold text-white">
        Learn Through Play<span className="text-red-300"> Awesome Cars</span>
            </h3>
            <p className="font-bold text-white">
           You can buy difference types of cars here . Including: sports car, truck, regular car, mini fire truck, mini police car, etc. You can also get engine types of cars that you can drive . Give a Simple gift to your closest one. 
            </p>
            <div>
             <Link to={'/toys'}> <button className="btn btn-outline mr-4 btn-secondary font-mono">
              Shop Now  <BiShoppingBag className="ml-3" />
              </button></Link>
           
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDOH-BABY-BABYOH-B185384E22E0D6B/1588582970138_8.jpg"
          className="w-full"
        />
         <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 pl-10 w-1/2">
            <h3 className="text-5xl font-semibold text-white">
        Learn Through Play<span className="text-red-300"> Awesome Cars</span>
            </h3>
            <p className="font-bold text-white">
           You can buy difference types of cars here . Including: sports car, truck, regular car, mini fire truck, mini police car, etc. You can also get engine types of cars that you can drive . Give a Simple gift to your closest one. 
            </p>
            <div>
             <Link to={'/toys'}> <button className="btn btn-outline mr-4 btn-secondary font-mono">
              Shop Now  <BiShoppingBag className="ml-3" />
              </button></Link>
           
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-NSc98Ok4V6k1YQbo7iYN9EY_emz2aIGWg&usqp=CAU"
          className="w-full"
        />
         <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 pl-10 w-1/2">
            <h3 className="text-5xl font-semibold text-white">
        Learn Through Play<span className="text-red-300"> Awesome Cars</span>
            </h3>
            <p className="font-bold text-white">
           You can buy difference types of cars here . Including: sports car, truck, regular car, mini fire truck, mini police car, etc. You can also get engine types of cars that you can drive . Give a Simple gift to your closest one. 
            </p>
            <div>
             <Link to={'/toys'}> <button className="btn btn-outline mr-4 btn-secondary font-mono">
              Shop Now  <BiShoppingBag className="ml-3" />
              </button></Link>
           
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://m.media-amazon.com/images/I/41zuBbFQgoL._AC_.jpg"
          className="w-full"
        />
         <div className="absolute pl-20 h-full flex items-center  left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-10 pl-10 w-1/2">
            <h3 className="text-5xl font-semibold text-white">
        Learn Through Play<span className="text-red-300"> Awesome Cars</span>
            </h3>
            <p className="font-bold text-white">
           You can buy difference types of cars here . Including: sports car, truck, regular car, mini fire truck, mini police car, etc. You can also get engine types of cars that you can drive . Give a Simple gift to your closest one. 
            </p>
            <div>
             <Link to={'/toys'}> <button className="btn btn-outline mr-4 btn-secondary font-mono">
              Shop Now  <BiShoppingBag className="ml-3" />
              </button></Link>
           
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
