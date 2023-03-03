import React, {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {CarouselButton, CarouselButtonLeft, CarouselMiniButton, Container, Viewport,} from "./Carousel.styled";

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
        startIndex: 0,
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
                // marginBottom:"55px",
            }}
        >
            {mini ? (
                <CarouselMiniButton
                    onClick={scrollPrev}
                    enabled={prevButtonEnabled}
                    marginBtnTop={marginBtnTop}
                    style={{marginRight: "-4.8%"}}
                >
                    <svg
                        style={{height: "12px", width: "10px"}}
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
                <CarouselButtonLeft
                    onClick={scrollPrev}
                    enabled={prevButtonEnabled}
                    marginBtnTop={marginBtnTop}
                    style={{transform: "rotate(180deg)", position: "relative", zIndex: '1', left: '6%'}}
                >
                    <svg
                        width="52"
                        height="54"
                        viewBox="0 0 52 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27 5.0625C22.6612 5.0625 18.4198 6.34911 14.8122 8.75964C11.2046 11.1702 8.3928 14.5963 6.7324 18.6049C5.07201 22.6134 4.63757 27.0243 5.48403 31.2798C6.3305 35.5353 8.41984 39.4441 11.4879 42.5122C14.5559 45.5802 18.4648 47.6695 22.7202 48.516C26.9757 49.3624 31.3866 48.928 35.3951 47.2676C39.4037 45.6072 42.8298 42.7954 45.2404 39.1878C47.6509 35.5802 48.9375 31.3388 48.9375 27C48.9308 21.1839 46.6174 15.6079 42.5047 11.4953C38.3921 7.38265 32.8161 5.06922 27 5.0625Z"
                            fill="#4F4F4F"
                        />
                        <path
                            d="M26.7221 19.1957C26.807 18.991 26.9313 18.805 27.088 18.6483C27.2447 18.4916 27.4307 18.3672 27.6354 18.2824C27.8401 18.1976 28.0595 18.1539 28.2811 18.1539C28.5027 18.1539 28.7222 18.1976 28.9269 18.2824C29.1316 18.3672 29.3176 18.4916 29.4742 18.6483L36.6309 25.8082C36.9473 26.1255 37.125 26.5553 37.125 27.0034C37.125 27.4515 36.9473 27.8813 36.6309 28.1986L29.4742 35.3552C29.1577 35.6711 28.7287 35.8484 28.2815 35.8481C27.8343 35.8479 27.4055 35.6702 27.0893 35.3539C26.7731 35.0377 26.5953 34.6089 26.5951 34.1617C26.5948 33.7145 26.7721 33.2855 27.088 32.969L31.3661 28.6909H18.5648C18.1173 28.6909 17.688 28.5131 17.3716 28.1966C17.0551 27.8802 16.8773 27.451 16.8773 27.0034C16.8773 26.5559 17.0551 26.1266 17.3716 25.8102C17.688 25.4937 18.1173 25.3159 18.5648 25.3159H31.3671L27.088 21.0345C26.9313 20.8779 26.807 20.6919 26.7221 20.4872C26.6373 20.2824 26.5936 20.063 26.5936 19.8414C26.5936 19.6198 26.6373 19.4004 26.7221 19.1957Z"
                            fill="#F2F2F2"
                        />
                    </svg>
                </CarouselButtonLeft>
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
                    style={{marginLeft: "-4.8%"}}
                >
                    <svg
                        style={{height: "12px", width: "10px"}}
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
                    style={{position: "relative", zIndex: '1', right: '6%'}}
                >
                    <svg
                        width="52"
                        height="54"
                        viewBox="0 0 52 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27 5.0625C22.6612 5.0625 18.4198 6.34911 14.8122 8.75964C11.2046 11.1702 8.3928 14.5963 6.7324 18.6049C5.07201 22.6134 4.63757 27.0243 5.48403 31.2798C6.3305 35.5353 8.41984 39.4441 11.4879 42.5122C14.5559 45.5802 18.4648 47.6695 22.7202 48.516C26.9757 49.3624 31.3866 48.928 35.3951 47.2676C39.4037 45.6072 42.8298 42.7954 45.2404 39.1878C47.6509 35.5802 48.9375 31.3388 48.9375 27C48.9308 21.1839 46.6174 15.6079 42.5047 11.4953C38.3921 7.38265 32.8161 5.06922 27 5.0625Z"
                            fill="#4F4F4F"
                        />
                        <path
                            d="M26.7221 19.1957C26.807 18.991 26.9313 18.805 27.088 18.6483C27.2447 18.4916 27.4307 18.3672 27.6354 18.2824C27.8401 18.1976 28.0595 18.1539 28.2811 18.1539C28.5027 18.1539 28.7222 18.1976 28.9269 18.2824C29.1316 18.3672 29.3176 18.4916 29.4742 18.6483L36.6309 25.8082C36.9473 26.1255 37.125 26.5553 37.125 27.0034C37.125 27.4515 36.9473 27.8813 36.6309 28.1986L29.4742 35.3552C29.1577 35.6711 28.7287 35.8484 28.2815 35.8481C27.8343 35.8479 27.4055 35.6702 27.0893 35.3539C26.7731 35.0377 26.5953 34.6089 26.5951 34.1617C26.5948 33.7145 26.7721 33.2855 27.088 32.969L31.3661 28.6909H18.5648C18.1173 28.6909 17.688 28.5131 17.3716 28.1966C17.0551 27.8802 16.8773 27.451 16.8773 27.0034C16.8773 26.5559 17.0551 26.1266 17.3716 25.8102C17.688 25.4937 18.1173 25.3159 18.5648 25.3159H31.3671L27.088 21.0345C26.9313 20.8779 26.807 20.6919 26.7221 20.4872C26.6373 20.2824 26.5936 20.063 26.5936 19.8414C26.5936 19.6198 26.6373 19.4004 26.7221 19.1957Z"
                            fill="#F2F2F2"
                        />
                    </svg>
                </CarouselButton>
            )}
        </div>
    );
};
