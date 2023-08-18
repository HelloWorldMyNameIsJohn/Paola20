import React from "react";

function Carrousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="PAOLA20/1.jpg"
            className="object-cover h-96 w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="PAOLA20/2.jpeg"
            className="object-cover h-96 w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="PAOLA20/3.jpg"
            className="object-cover h-96 w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="PAOLA20/4.jpg"
            className="object-cover h-96 w-full"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="PAOLA20/5.jpg"
            className="object-cover h-96 w-full"
          />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img
            src="PAOLA20/6.jpg"
            className="object-cover h-96 w-full"
          />
        </div>
        <div id="item7" className="carousel-item w-full">
          <img
            src="PAOLA20/7.jpg"
            className="object-cover h-96 w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
        <a href="#item7" className="btn btn-xs">
          7
        </a>
      </div>
    </>
  );
}

export default Carrousel;
