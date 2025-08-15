import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { ProductCard } from "../Product/ProductCard";

export function ProductGallery() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={2}
      emblaOptions={{ align: "start", slidesToScroll: mobile ? 1 : 2 }}
    >
      <Carousel.Slide key={1}>
        <ProductCard />
      </Carousel.Slide>
      <Carousel.Slide key={2}>
        <ProductCard />
      </Carousel.Slide>
      <Carousel.Slide key={3}>
        <ProductCard />
      </Carousel.Slide>
    </Carousel>
  );
}
