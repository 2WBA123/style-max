import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  CarouselButton,
  CarouselMiniButton,
  Container,
  ImagesCounter,
  Viewport,
} from "./Carousel.styled";
import React from "react";

export const Carousel = ({
  children,
  marginBtnTop = "10px",
  carouselContainerWidth,
  startIndex,
  images,
  selectedIndex,
  mini = false,
}) => {
  const [carouselRef, carousel] = useEmblaCarousel({
    loop: false,
    align: "start",
    startIndex:0,
  });
  const [prevButtonEnabled, setPrevButtonEnabled] = useState(false);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [current, setCurrentPage] = useState(1);

  const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel]);
  const scrollNext = useCallback(() => carousel.scrollNext(), [carousel]);
  useEffect(() => {
    const onSelect = () => {
      setPrevButtonEnabled(carousel?.canScrollPrev());
      setNextButtonEnabled(carousel?.canScrollNext());
      setCurrentPage(carousel?.selectedScrollSnap());
      if (selectedIndex && carousel?.selectedScrollSnap() + 1) {
        selectedIndex(carousel.selectedScrollSnap());
      }
    };

    if (carousel) {
      carousel.on("select", onSelect);
      onSelect();
    }
    if (!carousel) return;
    carousel.reInit();
  }, [carousel, startIndex, images, selectedIndex]);

  // if (!isArray(children)) return ;

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "100%",
        minWidth: "100%",
        gap: "45px",
        flexDirection: "row",
        justifyContent:"center"
      }}
    >
      {mini ? (
        <CarouselMiniButton
          onClick={scrollPrev}
          enabled={prevButtonEnabled}
          marginBtnTop={marginBtnTop}
          style={{ marginRight: "-4.8%" }}
        >
          <svg
            style={{ height: "12px", width: "10px" }}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2555 0.360484C17.7362 0.841129 17.7362 1.62041 17.2555 2.10105L3.35659 16L17.2555 29.8989C17.7362 30.3796 17.7362 31.1589 17.2555 31.6395C16.7749 32.1202 15.9956 32.1202 15.515 31.6395L0.745738 16.8703C0.265093 16.3896 0.265093 15.6104 0.745738 15.1297L15.515 0.360484C15.9956 -0.120161 16.7749 -0.120161 17.2555 0.360484Z"
              fill="#41415B"
            />
          </svg>
        </CarouselMiniButton>
      ) : (
        <CarouselButton
          onClick={scrollPrev}
          enabled={prevButtonEnabled}
          marginBtnTop={marginBtnTop}
        >
          <svg
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2555 0.360484C17.7362 0.841129 17.7362 1.62041 17.2555 2.10105L3.35659 16L17.2555 29.8989C17.7362 30.3796 17.7362 31.1589 17.2555 31.6395C16.7749 32.1202 15.9956 32.1202 15.515 31.6395L0.745738 16.8703C0.265093 16.3896 0.265093 15.6104 0.745738 15.1297L15.515 0.360484C15.9956 -0.120161 16.7749 -0.120161 17.2555 0.360484Z"
              fill="#41415B"
            />
          </svg>
        </CarouselButton>
      )}
      <Viewport
        ref={carouselRef}
        // style={{ justifyContent: "flex-start", flexDirection: "column" }}
      >
        <Container
          style={{
            gap: `${mini ? "22px" : "32px"}`,
            justifyContent: "flex-start",
          }}
          width={"auto"}
        >
          {children}
        </Container>
      </Viewport>
      {mini ? (
        <CarouselMiniButton
          onClick={scrollNext}
          enabled={nextButtonEnabled}
          marginBtnTop={marginBtnTop}
          style={{ marginLeft: "-4.8%" }}
        >
          <svg
            style={{ height: "12px", width: "10px" }}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.745738 0.360484C1.22638 -0.120161 2.00566 -0.120161 2.48631 0.360484L17.2555 15.1297C17.7362 15.6104 17.7362 16.3896 17.2555 16.8703L2.48631 31.6395C2.00566 32.1202 1.22638 32.1202 0.745738 31.6395C0.265093 31.1589 0.265093 30.3796 0.745738 29.8989L14.6447 16L0.745738 2.10105C0.265093 1.62041 0.265093 0.841129 0.745738 0.360484Z"
              fill="#41415B"
            />
          </svg>
        </CarouselMiniButton>
      ) : (
        <CarouselButton
          onClick={scrollNext}
          enabled={nextButtonEnabled}
          marginBtnTop={marginBtnTop}
        >
          <svg
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.745738 0.360484C1.22638 -0.120161 2.00566 -0.120161 2.48631 0.360484L17.2555 15.1297C17.7362 15.6104 17.7362 16.3896 17.2555 16.8703L2.48631 31.6395C2.00566 32.1202 1.22638 32.1202 0.745738 31.6395C0.265093 31.1589 0.265093 30.3796 0.745738 29.8989L14.6447 16L0.745738 2.10105C0.265093 1.62041 0.265093 0.841129 0.745738 0.360484Z"
              fill="#41415B"
            />
          </svg>
        </CarouselButton>
      )}
    </div>
  );
};
