import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface MobileDataItem {
  label: string;
  img: StaticImageData;
}

interface Props {
  data: MobileDataItem[];
}

const ProductsCarousel = ({ data }: Props) => {
  return (
    <Carousel opts={{ loop: true }} className="w-full px-8">
      <CarouselContent className="flex h-full">
        {data.map((item, index) => (
          <CarouselItem
            className="h-full basis-1/2 sm:basis-1/3 lg:basis-1/4 ml-4"
            key={index}
          >
            <div className="relative h-64 w-full drop-shadow-sm">
              <Image
                priority
                className="object-fill rounded-lg drop-shadow-sm"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                src={item.img}
                alt={item.label}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-2" />
      <CarouselNext className="-right-2" />
    </Carousel>
  );
};

export default ProductsCarousel;
