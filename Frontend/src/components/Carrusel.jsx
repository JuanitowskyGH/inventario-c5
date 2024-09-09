import React from "react";
import { Carousel } from "flowbite-react";
import "flowbite";

export const Carrusel = () => {
  return (
    <div className="container-fluid w-auto px-10 py-10 rounded-md h-max bg-white">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="shadow-md">
          <img src="/carrousel/img1.jpg" />
          <img src="/carrousel/cesesp.jpg" />
          <img src="/carrousel/img3.jpg" />
          <img src="/carrousel/img4.jpg" />
          <img src="/carrousel/img2.jpg" />
        </Carousel>
      </div>
    </div>
  );
};
