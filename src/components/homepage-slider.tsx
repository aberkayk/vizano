import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image1 from "../../public/images/bazaar.png";
import Image2 from "../../public/images/bridge.png";
import Image3 from "../../public/images/house.png";
import Image4 from "../../public/images/istiklal.png";
import Image5 from "../../public/images/mosque.png";
import Autoplay from "embla-carousel-autoplay";

const HomepageSlider = () => {
  const images = [
    { src: Image1, alt: "Bazaar" },
    { src: Image2, alt: "Bridge" },
    { src: Image3, alt: "House" },
    { src: Image4, alt: "Istiklal" },
    { src: Image5, alt: "Mosque" },
  ];

  return (
    <Carousel
      opts={{ align: "center", loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="w-full">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-64 md:h-96 ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HomepageSlider;
