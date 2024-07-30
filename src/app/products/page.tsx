import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/images/rent.jpg";
import ProductsCarousel from "@/components/products-carousel";
import MobileImage from "../../../public/images/iphone15.webp";
import ComputerImage from "../../../public/images/macbook.jpeg";
import ScreenImage from "../../../public/images/screen.webp";
import { ProductsAccordion } from "@/components/products-accordion";

const ProductsPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="relative aspect-[3100/1500] w-full max-h-[600px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-3xl xl:text-4xl font-semibold text-center">
          ÜRÜNLERİMİZ
        </p>
        <Image
          src={AboutImage}
          fill
          alt="About Us Image"
          className="object-fit z-0"
        />
      </div>

      {/* Mobile */}
      <div className="w-full py-16 flex flex-col gap-y-12 px-4">
        <h1 className="text-4xl font-bold text-center">Cep Telefonu</h1>
        <ProductsCarousel data={mobileData} />
      </div>

      {/* Computer */}
      <div className="w-full py-16 flex flex-col gap-y-12 px-4">
        <h1 className="text-4xl font-bold text-center">Bilgisayar</h1>
        <ProductsCarousel data={computerData} />
      </div>

      {/* Screen */}
      <div className="w-full py-16 flex flex-col gap-y-12 px-4">
        <h1 className="text-4xl font-bold text-center">Monitör</h1>
        <ProductsCarousel data={screenData} />
      </div>

      <div className="w-full px-4 my-8">
        <h4 className="text-3xl font-bold text-center mb-6">
          Sıkça Sorulan Sorular
        </h4>
        <ProductsAccordion />
      </div>
    </div>
  );
};

export default ProductsPage;

const mobileData = [
  {
    label: "FirstImage",
    img: MobileImage,
  },
  {
    label: "SecondImage",
    img: MobileImage,
  },
  {
    label: "ThirdImage",
    img: MobileImage,
  },
  {
    label: "FourthImage",
    img: MobileImage,
  },
  {
    label: "FifthImage",
    img: MobileImage,
  },
  {
    label: "SixthImage",
    img: MobileImage,
  },
];

const computerData = [
  {
    label: "FirstImage",
    img: ComputerImage,
  },
  {
    label: "SecondImage",
    img: ComputerImage,
  },
  {
    label: "ThirdImage",
    img: ComputerImage,
  },
  {
    label: "FourthImage",
    img: ComputerImage,
  },
  {
    label: "FifthImage",
    img: ComputerImage,
  },
  {
    label: "SixthImage",
    img: ComputerImage,
  },
];

const screenData = [
  {
    label: "FirstImage",
    img: ScreenImage,
  },
  {
    label: "SecondImage",
    img: ScreenImage,
  },
  {
    label: "ThirdImage",
    img: ScreenImage,
  },
  {
    label: "FourthImage",
    img: ScreenImage,
  },
  {
    label: "FifthImage",
    img: ScreenImage,
  },
  {
    label: "SixthImage",
    img: ScreenImage,
  },
];
